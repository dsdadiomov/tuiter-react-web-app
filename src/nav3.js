import React from "react";
import { Link, useLocation } from "react-router-dom";


function Nav() {
    const location = useLocation();
    console.log(location.pathname);
    const pathname = location.pathname;
    const links = [
        {path : '/labs/a3', label: "A3"},
        {path : '/labs/a3/hello-world', label: "Hello World"},
        {path : '/tuiter', label: "Tuiter"},
        {path : '/labs/a4', label: "A4"},
    ];
    return (
        <div className="nav nav-pills mt-2 mb-2">
            {links.map(({path, label}) => (
                <Link
                    className={`nav-link ${pathname === path ? "active" : ""}`}
                    to={path}
                >
                    {label}
                </Link>
            ))}
        </div>
    );
}

export default Nav; 
