import React from 'react';
import {Link} from "react-router-dom";

const Button: React.FC<{link: string; children: React.ReactNode; className?: string}> = ({ link, children, className }) => {
    return (
        <Link to={link} className="block w-fit">
            <button className={"flex justify-center bg-accent font-medium text-xl text-[#FFF] p-3 rounded-2xl" + (className ? ` ${className}` : "")}>
                {children}
            </button>
        </Link>
    );
};

export default Button;