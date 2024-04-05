import React from 'react';
import {Link} from "react-router-dom";

const ProjectPreview: React.FC<{title: string; text: string; img: string; link: string}> = ({title, text, img, link}) => {
    return (
        <Link to={link}>
            <article
                className="flex items-start gap-x-10 p-7 text-left bg-[#FFF] rounded-[32px] border-2 border-[#C9C6C3]">
                <img src={img} alt={title} className="w-60 h-60 rounded-3xl flex-shrink-0 object-cover"/>
                <div>
                    <h2 className="text-3xl font-bold pb-4">{title}</h2>
                    <p>{text}</p>
                </div>
            </article>
        </Link>
    );
};

export default ProjectPreview;