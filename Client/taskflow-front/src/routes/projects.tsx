import React from 'react';
import Layout from "../components/Layout/Layout";
import SearchForm from "../components/SearchForm/SearchForm";
import ProjectPreview from "../components/ProjectPreview/ProjectPreview";
import Filters from "../components/Filters/Filters";

const Projects = () => {
    return (
        <Layout className="text-center">
            <SearchForm/>
            <Filters />
            <div className="flex flex-col max-w-[1200px] mx-auto gap-y-7 pb-7">
                <ProjectPreview title="Lorem ipsum dolor sit amet"
                                link="/projects"
                                img="/projectsImgs/pr1.png"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
                <ProjectPreview title="Lorem ipsum dolor sit amet"
                                link="/projects"
                                img="/projectsImgs/pr2.png"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>
                <ProjectPreview title="Lorem ipsum dolor sit amet"
                                link="/projects"
                                img="/projectsImgs/pr1.png"
                                text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."/>

            </div>
        </Layout>
    );
};

export default Projects;