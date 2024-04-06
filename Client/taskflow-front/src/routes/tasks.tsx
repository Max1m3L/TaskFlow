import React, {useEffect, useMemo, useState} from 'react';
import Layout from "../components/Layout/Layout";
import {useParams} from "react-router-dom";
import TasksRow from "../components/TasksRow/TasksRow";
import {TaskRowType} from "../types/tasks";
import {TaskEntity} from "../types/entities";
import {TasksFilterTypes} from "../types/projectsFiltersTypes";
import {calculateEndDate} from "../api/deadline";
import SearchForm from "../components/SearchForm/SearchForm";

const Tasks = () => {
    const [tasksJSON, setTasksList] = useState<TaskEntity[]>([]);
    const [tasksFilter, setTasksFilter] = useState<TasksFilterTypes>(TasksFilterTypes.STAGE);
    const [openedFiltersMenu, setOpenedFiltersMenu] = useState(false);
    const [query, setQuery] = useState('');

    const tasksList = tasksJSON.filter(task => task.name.toLowerCase().includes(query.toLowerCase()));

    const filteredRows = useMemo(() => {
        const result = [];

        if (tasksFilter === TasksFilterTypes.STAGE) {
            result.push({
                row: tasksList.filter(task => task.condition_ === "В работе"),
                rowType: TaskRowType.INPROGRESS
            });
            result.push({row: tasksList.filter(task => task.condition_ === "В очереди"), rowType: TaskRowType.QUEUED});
            result.push({
                row: tasksList.filter(task => task.condition_ === "Завершена"),
                rowType: TaskRowType.COMPLETED
            });
        } else if (tasksFilter === TasksFilterTypes.TYPE) {
            result.push({
                row: tasksList.filter(task => task.status_ === "Разработка"),
                rowType: TaskRowType.DEVELOPMENT
            });
            result.push({row: tasksList.filter(task => task.status_ === "Тестирование"), rowType: TaskRowType.TESTING});
            result.push({row: tasksList.filter(task => task.status_ === "Анализ"), rowType: TaskRowType.ANALYSIS});
            result.push({row: tasksList.filter(task => task.status_ === "Новая"), rowType: TaskRowType.NEW});
            result.push({row: tasksList.filter(task => task.status_ === "Релиз"), rowType: TaskRowType.RELEASE});
        } else if (tasksFilter === TasksFilterTypes.PRIORITY) {
            result.push({row: tasksList.filter(task => task.priority === "Высокий"), rowType: TaskRowType.HIGH});
            result.push({row: tasksList.filter(task => task.priority === "Средний"), rowType: TaskRowType.MEDIUM});
            result.push({row: tasksList.filter(task => task.priority === "Низкий"), rowType: TaskRowType.LOW});
        } else if (tasksFilter === TasksFilterTypes.DEADLINE) {
            result.push({
                row: tasksList.sort((task1, task2) => {
                    const timeToAdd1 = Math.ceil((Number(task1.sp_test) + Number(task1.sp_analysis) + Number(task1.sp_analysis) + Number(task1.sp_release)) / 8);
                    const deadline1 = calculateEndDate((task1.startdate ? new Date(task1.startdate.split(' ')[0]).getTime() : Date.now()), timeToAdd1).toLocaleDateString().split('.')[0];

                    const timeToAdd2 = Math.ceil((Number(task2.sp_test) + Number(task2.sp_analysis) + Number(task2.sp_analysis) + Number(task2.sp_release)) / 8);
                    const deadline2 = calculateEndDate((task2.startdate ? new Date(task2.startdate.split(' ')[0]).getTime() : Date.now()), timeToAdd2).toLocaleDateString().split('.')[0];

                    return Number(deadline1) - Number(deadline2);
                }), rowType: TaskRowType.DEADLINE
            });
        }

        return result;
    }, [tasksFilter, tasksList])

    const params = useParams();
    const id = params.projectId;

    useEffect(() => {
        fetch("http://localhost:8080/projects/tasks/" + id)
            .then(response => response.json())
            .then(json => setTasksList(json))
    })

    return (
        <Layout>
            <section className="p-7">
                <div className="flex items-center justify-between">
                    <SearchForm className="border" setQuery={setQuery}/>
                    <p className="relative cursor-pointer flex items-center gap-x-2 mt-6" onClick={() => {
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
                            <div
                                className="absolute bg-white border-2 border-[#C9C6C3] rounded-xl top-8 p-4 min-w-60">
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
                </div>
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