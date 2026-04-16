'use client'
// import React from 'react';
import { FaPlus } from "react-icons/fa";
import { useFriends } from "@/context/FriendsContext";
import { getAllInteractionsFromLocalDB } from "@/utils/addLocalDB"

const getInteractionsThisMonth = () => {
    const all = getAllInteractionsFromLocalDB();

    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();

    return all.filter(item => {
        const date = new Date(item.createdAt);

        return (
            date.getMonth() === currentMonth &&
            date.getFullYear() === currentYear
        );
    });
};

const Banner = () => {
    const { friends } = useFriends();

    // const interactionsThisMonth = getInteractionsThisMonth().length;

    const interactionsThisMonth = getInteractionsThisMonth().length;

    const stats = [
        {
            title: "Total Friends",
            value: friends.length,
        },
        {
            title: "On Track",
            value: friends.filter(f => f.status === "on track").length,
        },
        {
            title: "Need Attention",
            value: friends.filter(
                f => f.status === "overdue" || f.status === "almost due"
            ).length,
        },
        {
            title: "Interactions This Month",
            value: interactionsThisMonth,
        },
    ];



    //for debuging
    const showDB = () => {
        console.log(friends);
    }

    return (
        <div className="hero bg-base-200 pt-20 pb-10">
            <div className="text-center">
                <div className="hero-content">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                        <p className="py-6">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the
                            relationships that matter most.
                        </p>
                        <button onClick={showDB} className="btn bg-[#244D3F]" ><FaPlus />Add a Friend</button>
                    </div>
                </div>
                <div className="stats shadow">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        {stats.map((item, index) => (
                            <div key={index} className="stat place-items-center bg-base-200 rounded-lg">

                                <div className="stat-value">{item.value}</div>
                                <div className="stat-title">{item.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <hr className="border-t border-[#E9E9E9]" />

        </div>
    );
};

export default Banner;