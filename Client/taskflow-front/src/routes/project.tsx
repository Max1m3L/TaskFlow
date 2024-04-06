import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout/Layout";
import {useParams} from "react-router-dom";
import Button from "../components/UI/Button/Button";
import {ProjectEntity} from "../types/entities";

const Project = () => {
    const params = useParams();
    const id = params.projectId;

    const [projectJSON, setProjectJSON] = useState<ProjectEntity | null>(null)

    useEffect(() => {
        fetch("http://localhost:8080/projects/" + id)
            .then(res => res.json())
            .then(json => setProjectJSON(json))
    })

    return (
        <Layout>
            <div className="flex items-start gap-x-5 p-7 pb-20">
                <section className="flex-grow bg-[#fff] rounded-[32px] border-2 border-[#C9C6C3] p-10 min-h-[90vh]">
                    <span className="font-light text-[#595858] text-lg">#{projectJSON?.id}</span>
                    <h1 className="font-bold text-3xl">{projectJSON?.name}</h1>
                    <span className="block text-2xl pt-3 pb-6">Сроки: с {projectJSON?.startdate} до {projectJSON?.enddate}</span>
                    <p>{projectJSON?.description ?? "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."}</p>
                </section>
                <aside className="flex-shrink-0 bg-[#fff] rounded-[32px] border-2 border-[#C9C6C3] py-5 px-7 min-w-40">
                    <Button link={`/projects/tasks/${id}`} className="mb-4 w-full">Задачи</Button>
                    <Button link="/users" className="w-full">Сотрудники</Button>
                    <span className="block font-semibold my-4">Заказчики:</span>
                    <ul>
                        <li className="flex items-center gap-x-2">
                            <img src="/avatars/normis.png" alt="Avatar" className="w-6 h-6 object-cover rounded-full" />
                            <span>Иван Иванов</span>
                        </li>
                        <li className="flex items-center gap-x-2 mt-4">
                            <img src="/avatars/normis.png" alt="Avatar" className="w-6 h-6 object-cover rounded-full"/>
                            <span>Макс Максбетов</span>
                        </li>
                    </ul>
                </aside>
            </div>
        </Layout>
    );
};

export default Project;