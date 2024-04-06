import React, {useEffect, useState} from 'react';
import NameFilter from "./NameFilter";
import CustomerFilter from "./CustomerFilter";
import PriorityFilter from "./PriorityFilter";
import TeamFilter from "./TeamFilter";
import {ProjectsFiltersTypes} from "../../types/projectsFiltersTypes";

const Filters = () => {
    const [filter, setFilter] = useState<ProjectsFiltersTypes | null>(null);

    const handleFilterOpen = (newFilter: ProjectsFiltersTypes) => {
        if (newFilter === filter) setFilter(null);
        else setFilter(newFilter);
    }

    useEffect(() => {
        document.body.addEventListener("click", () => setFilter(null));

        return document.body.removeEventListener("click", () => setFilter(null));
    }, []);

    return (
        <ul className="flex justify-center gap-x-12 mb-12 text-[#7F7878]">
            <NameFilter opened={filter === ProjectsFiltersTypes.NAME} setOpened={(e) => {
                e.stopPropagation()
                handleFilterOpen(ProjectsFiltersTypes.NAME)
            }} />
            <CustomerFilter opened={filter === ProjectsFiltersTypes.CUSTOMER} setOpened={(e) => {
                e.stopPropagation()
                handleFilterOpen(ProjectsFiltersTypes.CUSTOMER)
            }} />
            <PriorityFilter opened={filter === ProjectsFiltersTypes.PRIORITY} setOpened={(e) => {
                e.stopPropagation()
                handleFilterOpen(ProjectsFiltersTypes.PRIORITY)
            }} />
            <TeamFilter opened={filter === ProjectsFiltersTypes.TEAM} setOpened={(e) => {
                e.stopPropagation()
                handleFilterOpen(ProjectsFiltersTypes.TEAM)
            }} />
        </ul>
    );
};

export default Filters;