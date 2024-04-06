import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import Layout from "../components/Layout/Layout";
import {UserEntity} from "../types/entities";

const Employee = () => {
    const params = useParams();
    const id = params.userId;

    const [user, setUser] = useState<UserEntity | null>(null)

    useEffect(() => {
        fetch(`http://localhost:8080/users/${id}`)
            .then(response => response.json())
            .then(json => setUser(json))
    }, [id])

    return (
        <Layout>
            <section className="p-7">
                <div className={"bg-[#fff] rounded-[32px] border-2 border-[#C9C6C3] p-10 flex gap-x-24 min-h-[600px]"}>
                    <img src="/avatars/avatarfull.jpg" alt="Avatar"
                         className="object-cover w-[280px] h-[350px] rounded-2xl flex-shrink-0"/>
                    <div>
                        <h1 className="font-bold text-3xl mb-7">{user?.name + " " + user?.surname}</h1>
                        <ul className="list-disc list-inside text-xl">
                            <li>Должность: {user?.post}</li>
                            <li className="mt-3">Команда: {user?.team}</li>
                            <li className="mt-3">Электронная почта: {user?.gmail}</li>
                        </ul>
                        <div className="mt-10">
                            <h3 className="text-2xl font-bold">Связанные задачи</h3>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    );
};

export default Employee;