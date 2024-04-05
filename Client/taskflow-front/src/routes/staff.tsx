import React from 'react';
import Layout from "../components/Layout/Layout";
import StaffCard from "../components/StaffCard/StaffCard";

const Staff = () => {
    return (
        <Layout>
            <section className="flex flex-wrap justify-center py-8 gap-8 mx-auto">
                <StaffCard img={"/avatars/normis.png"} name={"Lorem Ipsumich Dolorov"} post={"HR manager"} role={"Analytic"} team={"Team 1"} />
                <StaffCard img={"/avatars/normis.png"} name={"Lorem Ipsumich Dolorov"} post={"HR manager"} role={"Analytic"} team={"Team 1"} />
                <StaffCard img={"/avatars/normis.png"} name={"Lorem Ipsumich Dolorov"} post={"HR manager"} role={"Analytic"} team={"Team 1"} />
                <StaffCard img={"/avatars/normis.png"} name={"Lorem Ipsumich Dolorov"} post={"HR manager"} role={"Analytic"} team={"Team 1"} />
                <StaffCard img={"/avatars/normis.png"} name={"Lorem Ipsumich Dolorov"} post={"HR manager"} role={"Analytic"} team={"Team 1"} />
                <StaffCard img={"/avatars/normis.png"} name={"Lorem Ipsumich Dolorov"} post={"HR manager"} role={"Analytic"} team={"Team 1"} />
                <StaffCard img={"/avatars/normis.png"} name={"Lorem Ipsumich Dolorov"} post={"HR manager"} role={"Analytic"} team={"Team 1"} />
                <StaffCard img={"/avatars/normis.png"} name={"Lorem Ipsumich Dolorov"} post={"HR manager"} role={"Analytic"} team={"Team 1"} />
            </section>
        </Layout>
    );
};

export default Staff;