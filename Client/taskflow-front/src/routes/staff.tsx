import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout/Layout";
import StaffCard from "../components/StaffCard/StaffCard";
import {UserEntity} from "../types/entities";

const Staff = () => {
    const [users, setUsers] = useState<UserEntity[]>([])

    useEffect(() => {
        fetch("http://localhost:8080/users")
            .then(response => response.json())
            .then(json => setUsers(json))
    }, []);

    return (
        <Layout>
            <section className="flex flex-wrap justify-center py-8 gap-8 mx-auto">
                {
                    users.map((user: UserEntity) => (
                        <StaffCard key={user.id} user={user} />
                    ))
                }
            </section>
        </Layout>
    );
};

export default Staff;