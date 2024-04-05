import React, {useEffect, useState} from 'react';
import NameFilter from "./NameFilter";
import CustomerFilter from "./CustomerFilter";
import PriorityFilter from "./PriorityFilter";
import TeamFilter from "./TeamFilter";
import {FiltersTypes} from "../../types/filtersTypes";

const Filters = () => {
    const [filter, setFilter] = useState<FiltersTypes | null>(null);

    const handleFilterOpen = (newFilter: FiltersTypes) => {
        if (newFilter === filter) setFilter(null);
        else setFilter(newFilter);
    }

    useEffect(() => {
        document.body.addEventListener("click", () => setFilter(null));

        return document.body.removeEventListener("click", () => setFilter(null));
    }, []);

    return (
        <ul className="flex justify-center gap-x-12 mb-12 text-[#7F7878]">
            <NameFilter opened={filter === FiltersTypes.NAME} setOpened={(e) => {
                e.stopPropagation()
                handleFilterOpen(FiltersTypes.NAME)
            }} />
            <CustomerFilter opened={filter === FiltersTypes.CUSTOMER} setOpened={(e) => {
                e.stopPropagation()
                handleFilterOpen(FiltersTypes.CUSTOMER)
            }} />
            <PriorityFilter opened={filter === FiltersTypes.PRIORITY} setOpened={(e) => {
                e.stopPropagation()
                handleFilterOpen(FiltersTypes.PRIORITY)
            }} />
            <TeamFilter opened={filter === FiltersTypes.TEAM} setOpened={(e) => {
                e.stopPropagation()
                handleFilterOpen(FiltersTypes.TEAM)
            }} />
        </ul>
    );
};

export default Filters;