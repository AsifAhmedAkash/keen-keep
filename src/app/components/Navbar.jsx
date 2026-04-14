// import React from 'react';
'use client'
import { usePathname } from "next/navigation";
import { FaHome, FaClock, FaChartBar } from "react-icons/fa";
import Link from "next/link";

const Navbar = () => {
    const pathname = usePathname();

    const navLinks = [
        {
            name: "Home",
            path: "/home",
            icon: FaHome,
        },
        {
            name: "Timeline",
            path: "/timeline",
            icon: FaClock,
        },
        {
            name: "States",
            path: "/stats",
            icon: FaChartBar,
        },
    ];

    return (
        <div className=" bg-base-100 shadow-sm ">
            <div className="navbar max-w-360 mx-auto">
                <div className="flex-1">

                    <Link href="/home" className="btn btn-ghost text-[24px]">
                        Keen<span className="font-normal">Keeper</span>
                    </Link>
                </div>
                <div className="flex-none">
                    <ul className="menu menu-horizontal px-1">
                        {navLinks.map((link, index) => {
                            const Icon = link.icon;
                            const isActive = pathname === link.path;
                            return (
                                <li className={`btn ${!isActive ? "btn-ghost" : "btn-success"}`} key={index}>
                                    <Link
                                        href={link.path}
                                        className={`flex items-center gap-2 px-2 py-1 rounded-md ${isActive ? "text-white" : "text-[#64748B]"
                                            }`}
                                    >
                                        <Icon />
                                        {link.name}
                                    </Link>
                                </li>
                            );
                        })}

                    </ul>
                </div>
            </div>

        </div>
    );
};

export default Navbar;