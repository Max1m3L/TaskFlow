import React, {useEffect} from 'react';
import {useParams} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import MiniTask from "../components/MiniTask/MiniTask";

const Employee = () => {
    const params = useParams();
    const id = params.projectId;

    useEffect(() => {

    })

    return (
        <Layout>
            <section className="p-7">
                <div className={"bg-[#fff] rounded-[32px] border-2 border-[#C9C6C3] p-10 flex gap-x-24 min-h-[600px]"}>
                    <img src="/avatars/normis.png" alt="Avatar"
                         className="object-cover w-[280px] h-[350px] rounded-2xl flex-shrink-0"/>
                    <div>
                        <h1 className="font-bold text-3xl mb-7">John Doe</h1>
                        <ul className="list-disc list-inside text-xl">
                            <li>Должность: HR manager</li>
                            <li className="mt-3">Команда: First Team</li>
                            <li className="mt-3">Роль: Analytic</li>
                        </ul>
                        <div className="mt-10">
                            <h3 className="text-2xl font-bold">Связанные задачи</h3>
                            <ul className="flex flex-wrap gap-x-4 gap-y-6 mt-6">
                                <li><MiniTask title={"Lorem ipsum dolor sit amet"}
                                              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                                              status={"ready"} deadline={"20.04.2024"}/></li>
                                <li><MiniTask title={"Lorem ipsum dolor sit amet"}
                                              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                                              status={"ready"} deadline={"20.04.2024"}/></li>
                                <li><MiniTask title={"Lorem ipsum dolor sit amet"}
                                              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                                              status={"ready"} deadline={"20.04.2024"}/></li>
                                <li><MiniTask title={"Lorem ipsum dolor sit amet"}
                                              text={"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."}
                                              status={"ready"} deadline={"20.04.2024"}/></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Employee;