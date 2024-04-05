import React, {useEffect} from 'react';
import Header from "../Header/Header";
import {useLocation} from "react-router-dom";

const Layout: React.FC<{children: React.ReactNode; className?: string}> = ({children, className}) => {
    const pathname = useLocation();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname])

    return (
        <>
            <Header></Header>
            <main className={"bg-[#EFF1F9] text-text-black" + (className ? (" " + className) : '')}>
                {children}
            </main>
        </>
    );
};

export default Layout;