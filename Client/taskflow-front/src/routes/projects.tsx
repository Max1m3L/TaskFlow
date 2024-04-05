import React, {useEffect} from 'react';
import Layout from "../components/Layout/Layout";
import SearchForm from "../components/SearchForm/SearchForm";
import ProjectPreview from "../components/ProjectPreview/ProjectPreview";
import Filters from "../components/Filters/Filters";
import {ProjectEntity} from "../types/entities";

const Projects = () => {
    const [projects, setProjects] = React.useState<ProjectEntity[]>([]);

    useEffect(() => {
        fetch("http://localhost:8080/projects")
            .then(resp => resp.json())
            .then(json => setProjects(json))
    }, []);

    return (
        <Layout className="text-center">
            <SearchForm/>
            <Filters />
            <div className="flex flex-col max-w-[1200px] mx-auto gap-y-7 pb-7">
                {
                    projects.map((project: ProjectEntity) => (
                        <ProjectPreview key={project.id}
                                        title={project.name}
                                        link={`/projects/${project.id}`}
                                        img={`/projectsImgs/pr${project.id}.png`}
                                        text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
                    ))
                }
            </div>
        </Layout>
    );
};

export default Projects;