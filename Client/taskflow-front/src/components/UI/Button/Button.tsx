import React from 'react';
import {Link} from "react-router-dom";

const Button: React.FC<{link: string; children: React.ReactNode; className?: string}> = ({ link, children, className }) => {
    return (
        <Link to={link} className={className ? className : ""}>
            {children}
        </Link>
    );
};

export default Button;