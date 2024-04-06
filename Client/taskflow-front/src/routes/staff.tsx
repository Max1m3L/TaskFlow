import React, {useEffect, useState} from 'react';
import Layout from "../components/Layout/Layout";
import StaffCard from "../components/StaffCard/StaffCard";
import {UserEntity} from "../types/entities";

// const mockes: UserEntity[] = [{id: 1, team: "Team1", post:"post", name: "Tim", surname: "Cook", gmail: "cook@cook.com"},
//     {id: 1, team: "Team1", post:"post", name: "Tim", surname: "Cook", gmail: "cook@cook.com"},
//     {id: 1, team: "Team1", post:"post", name: "Tim", surname: "Cook", gmail: "cook@cook.com"},
//     {id: 1, team: "Team1", post:"post", name: "Tim", surname: "Cook", gmail: "cook@cook.com"},
//     {id: 1, team: "Team1", post:"post", name: "Tim", surname: "Cook", gmail: "cook@cook.com"},
//     {id: 1, team: "Team1", post:"post", name: "Tim", surname: "Cook", gmail: "cook@cook.com"},
//     {id: 1, team: "Team1", post:"post", name: "Tim", surname: "Cook", gmail: "cook@cook.com"},
//     {id: 1, team: "Team1", post:"post", name: "Tim", surname: "Cook", gmail: "cook@cook.com"},
//     {id: 1, team: "Team1", post:"post", name: "Tim", surname: "Cook", gmail: "cook@cook.com"},
// ];

const Staff = () => {
    const [users, setUsers] = useState<UserEntity[]>([])

    useEffect(() => {
        fetch("http://localhost:8080/users")
            .then(response => response.json())
            .then(json => setUsers(json))
    }, []);

    return (
        <Layout>
            <section className="flex flex-wrap justify-center py-8 gap-8 mx-auto w-3/4">
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