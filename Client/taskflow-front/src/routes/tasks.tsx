import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout/Layout";
import {useParams} from "react-router-dom";
import Button from "../components/UI/Button/Button";
import TasksRow from "../components/TasksRow/TasksRow";
import {TaskRowType} from "../types/tasks";
import {TaskEntity} from "../types/entities";

const Tasks = () => {
    const params = useParams();
    const id = params.projectId;

    const [tasksJSON, setTasksJSON] = useState<TaskEntity[]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/projects/tasks/" + id)
            .then(response => response.json())
            .then(json => setTasksJSON(json))
    })

    const inProgressTasks =  tasksJSON.filter(task => task.condition_ === "В работе");
    const queuedTasks =  tasksJSON.filter(task => task.condition_ === "В очереди");
    const completedTasks =  tasksJSON.filter(task => task.condition_ === "Завершена");

    return (
        <Layout>
            <section className="p-7">
                <Button link="/" className="py-2 px-4 w-auto">
                    <div className="flex items-center gap-x-2">
                        <svg width="18" height="15" viewBox="0 0 18 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M7.1002 0.0907726C6.94555 0.189188 0.431446 6.38462 0.276795 6.58613C-0.0793721 7.03603 -0.0934313 7.86084 0.24399 8.36228C0.375209 8.55442 6.894 14.778 7.1002 14.9092C7.29235 15.031 7.70475 15.031 7.91095 14.9045C8.13121 14.7686 8.24837 14.553 8.24837 14.2625C8.24837 14.1266 8.22494 13.9625 8.19214 13.8969C8.16402 13.8313 6.83308 12.5426 5.23501 11.0242L2.33413 8.27324L9.94485 8.24981C17.1807 8.22638 17.5603 8.22169 17.6821 8.14202C18.1086 7.86552 18.1086 7.13444 17.6821 6.85795C17.5603 6.77828 17.1807 6.77359 9.95423 6.75016L2.35287 6.72673L5.21158 4.00861C6.78621 2.51365 8.11247 1.22488 8.15933 1.1499C8.28118 0.957758 8.27649 0.545355 8.15465 0.339152C8.1031 0.254797 7.99531 0.14701 7.91095 0.095459C7.70475 -0.0310736 7.29235 -0.0310736 7.1002 0.0907726Z"
                                fill="white"/>
                        </svg>
                        <span className="text-lg font-normal">Назад</span>
                    </div>
                </Button>
                <ul className="pt-6">
                    <li><TasksRow type={TaskRowType.INPROGRESS} tasks={inProgressTasks} /></li>
                    <li><TasksRow type={TaskRowType.QUEUED} className="mt-6" tasks={queuedTasks} /></li>
                    <li><TasksRow type={TaskRowType.COMPLETED} className="mt-6" tasks={completedTasks} /></li>
                </ul>
            </section>
        </Layout>
    );
};

export default Tasks;