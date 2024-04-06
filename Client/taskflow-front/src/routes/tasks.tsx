import React, {useEffect, useMemo, useState} from 'react';
import Layout from "../components/Layout/Layout";
import {useParams} from "react-router-dom";
import Button from "../components/UI/Button/Button";
import TasksRow from "../components/TasksRow/TasksRow";
import {TaskRowType} from "../types/tasks";
import {TaskEntity} from "../types/entities";
import {TasksFilterTypes} from "../types/projectsFiltersTypes";
import {calculateEndDate} from "../api/deadline";

const Tasks = () => {
    const [tasksJSON, setTasksJSON] = useState<TaskEntity[]>([]);
    const [tasksFilter, setTasksFilter] = useState<TasksFilterTypes>(TasksFilterTypes.STAGE);
    const [openedFiltersMenu, setOpenedFiltersMenu] = useState(false);

    const filteredRows = useMemo(() => {
        const result = [];

        if (tasksFilter === TasksFilterTypes.STAGE) {
            result.push({
                row: tasksJSON.filter(task => task.condition_ === "В работе"),
                rowType: TaskRowType.INPROGRESS
            });
            result.push({row: tasksJSON.filter(task => task.condition_ === "В очереди"), rowType: TaskRowType.QUEUED});
            result.push({
                row: tasksJSON.filter(task => task.condition_ === "Завершена"),
                rowType: TaskRowType.COMPLETED
            });
        } else if (tasksFilter === TasksFilterTypes.TYPE) {
            result.push({
                row: tasksJSON.filter(task => task.status_ === "Разработка"),
                rowType: TaskRowType.DEVELOPMENT
            });
            result.push({row: tasksJSON.filter(task => task.status_ === "Тестирование"), rowType: TaskRowType.TESTING});
            result.push({row: tasksJSON.filter(task => task.status_ === "Анализ"), rowType: TaskRowType.ANALYSIS});
            result.push({row: tasksJSON.filter(task => task.status_ === "Новая"), rowType: TaskRowType.NEW});
            result.push({row: tasksJSON.filter(task => task.status_ === "Релиз"), rowType: TaskRowType.RELEASE});
        } else if (tasksFilter === TasksFilterTypes.PRIORITY) {
            result.push({row: tasksJSON.filter(task => task.priority === "Высокий"), rowType: TaskRowType.HIGH});
            result.push({row: tasksJSON.filter(task => task.priority === "Средний"), rowType: TaskRowType.MEDIUM});
            result.push({row: tasksJSON.filter(task => task.priority === "Низкий"), rowType: TaskRowType.LOW});
        } else if (tasksFilter === TasksFilterTypes.DEADLINE) {
            result.push({
                row: tasksJSON.sort((task1, task2) => {
                    const timeToAdd1 = Math.ceil((Number(task1.sp_test) + Number(task1.sp_analysis) + Number(task1.sp_analysis) + Number(task1.sp_release)) / 8);
                    const deadline1 = calculateEndDate((task1.startdate ? new Date(task1.startdate.split(' ')[0]).getTime() : Date.now()), timeToAdd1).toLocaleDateString().split('.')[0];

                    const timeToAdd2 = Math.ceil((Number(task2.sp_test) + Number(task2.sp_analysis) + Number(task2.sp_analysis) + Number(task2.sp_release)) / 8);
                    const deadline2 = calculateEndDate((task2.startdate ? new Date(task2.startdate.split(' ')[0]).getTime() : Date.now()), timeToAdd2).toLocaleDateString().split('.')[0];

                    return Number(deadline1) - Number(deadline2);
                }), rowType: TaskRowType.DEADLINE
            });
        }

        return result;
    }, [tasksFilter, tasksJSON])

    const params = useParams();
    const id = params.projectId;

    useEffect(() => {
        fetch("http://localhost:8080/projects/tasks/" + id)
            .then(response => response.json())
            .then(json => setTasksJSON(json))
    })

    return (
        <Layout>
            <section className="p-7">
                <p className="relative cursor-pointer flex items-center gap-x-2 mb-10" onClick={() => {
                    setOpenedFiltersMenu(!openedFiltersMenu)
                }}>
                    Отсортировано по: {tasksFilter}
                    {
                        openedFiltersMenu
                            ?
                            <svg className="-rotate-180 transition" width="30" height="11" viewBox="0 0 44 25"
                                 fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <line x1="1.06066" y1="1.93934" x2="23.0607" y2="23.9393" stroke="#333344"
                                      strokeWidth="3"/>
                                <line x1="20.9393" y1="23.9393" x2="42.9393" y2="1.93934" stroke="#333344"
                                      strokeWidth="3"/>
                            </svg>
                            :
                            <svg className="transition" width="30" height="11" viewBox="0 0 44 25" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <line x1="1.06066" y1="1.93934" x2="23.0607" y2="23.9393" stroke="#333344"
                                      strokeWidth="3"/>
                                <line x1="20.9393" y1="23.9393" x2="42.9393" y2="1.93934" stroke="#333344"
                                      strokeWidth="3"/>
                            </svg>
                    }
                    {
                        openedFiltersMenu &&
                        <div className="absolute bg-white border-2 border-[#C9C6C3] rounded-xl top-8 p-4 min-w-60">
                            <ul>
                                <li className="hover:bg-accent hover:text-white transition p-2 rounded"
                                    onClick={e => {
                                        e.stopPropagation();
                                        setTasksFilter(TasksFilterTypes.STAGE);
                                        setOpenedFiltersMenu(false);
                                    }}
                                >Этап
                                </li>
                                <li className="mt-2 hover:bg-accent hover:text-white transition p-2 rounded"
                                    onClick={e => {
                                        e.stopPropagation();
                                        setTasksFilter(TasksFilterTypes.TYPE);
                                        setOpenedFiltersMenu(false);
                                    }}
                                >Тип
                                </li>
                                <li className="mt-2 hover:bg-accent hover:text-white transition p-2 rounded"
                                    onClick={e => {
                                        e.stopPropagation();
                                        setTasksFilter(TasksFilterTypes.PRIORITY);
                                        setOpenedFiltersMenu(false);
                                    }}
                                >Приоритет
                                </li>
                                <li className="mt-2 hover:bg-accent hover:text-white transition p-2 rounded"
                                    onClick={e => {
                                        e.stopPropagation();
                                        setTasksFilter(TasksFilterTypes.DEADLINE);
                                        setOpenedFiltersMenu(false);
                                    }}
                                >Дедлайн
                                </li>
                            </ul>
                        </div>
                    }
                </p>
                <Button link="/" className="w-fit block">
                    <div className="flex items-center gap-x-2 py-2 px-4 justify-center bg-accent font-medium text-xl text-[#FFF] rounded-2xl">
                        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.1002 0.0907726C6.94555 0.189188 0.431446 6.38462 0.276795 6.58613C-0.0793721 7.03603 -0.0934313 7.86084 0.24399 8.36228C0.375209 8.55442 6.894 14.778 7.1002 14.9092C7.29235 15.031 7.70475 15.031 7.91095 14.9045C8.13121 14.7686 8.24837 14.553 8.24837 14.2625C8.24837 14.1266 8.22494 13.9625 8.19214 13.8969C8.16402 13.8313 6.83308 12.5426 5.23501 11.0242L2.33413 8.27324L9.94485 8.24981C17.1807 8.22638 17.5603 8.22169 17.6821 8.14202C18.1086 7.86552 18.1086 7.13444 17.6821 6.85795C17.5603 6.77828 17.1807 6.77359 9.95423 6.75016L2.35287 6.72673L5.21158 4.00861C6.78621 2.51365 8.11247 1.22488 8.15933 1.1499C8.28118 0.957758 8.27649 0.545355 8.15465 0.339152C8.1031 0.254797 7.99531 0.14701 7.91095 0.095459C7.70475 -0.0310736 7.29235 -0.0310736 7.1002 0.0907726Z"
                                fill="white"/>
                        </svg>
                        <span className="text-lg font-normal">Назад</span>
                    </div>
                </Button>
                <ul className="pt-6">
                    {
                        filteredRows.map((row, index) => {
                            return index === 0
                                ?
                                <li><TasksRow type={row.rowType} tasks={row.row}/></li>
                                :
                                <li><TasksRow type={row.rowType} tasks={row.row} className="mt-6"/></li>
                        })
                    }
                </ul>
            </section>
        </Layout>
    );
};

export default Tasks;