// import React from 'react';
import { FaPlus } from "react-icons/fa";


const Banner = () => {

    const stats = [
        {
            title: "Total Friends",
            value: 10,
        },
        {
            title: "On Track",
            value: 3,
        },
        {
            title: "Need Attention",
            value: 4,
        },
        {
            title: "Interactions This Month",
            value: 12,
        },
    ];
    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="text-center">
                <div className="hero-content">
                    <div className="max-w-md">
                        <h1 className="text-5xl font-bold">Friends to keep close in your life</h1>
                        <p className="py-6">
                            Your personal shelf of meaningful connections. Browse, tend, and nurture the
                            relationships that matter most.
                        </p>
                        <button className="btn btn-success"><FaPlus />Add a Friend</button>
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

        </div>
    );
};

export default Banner;