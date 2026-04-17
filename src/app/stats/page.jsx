// import React from 'react';
"use client";
import { useTimeline } from "@/context/TimeLineContext";
import { PieChart, Pie, Cell, Legend, Tooltip } from "recharts";
import { useEffect } from "react";

const COLORS = {
    text: "#a855f7",
    call: "#1a3a2a",
    video: "#22c55e",
};

const StatsPage = () => {
    const { timeline, syncTimeline } = useTimeline();

    // Sync data when component mounts
    useEffect(() => {
        syncTimeline();
    }, [syncTimeline]);

    const allhistory = [...timeline];
    // console.log(allhistory);

    const counts = timeline.reduce((acc, entry) => {
        acc[entry.type] = (acc[entry.type] || 0) + 1;
        return acc;
    }, {});

    const data = Object.entries(counts).map(([type, value]) => ({
        name: type.charAt(0).toUpperCase() + type.slice(1),
        value,
        color: COLORS[type] ?? "#888",
    }));

    return (
        <div className="p-6 mx-auto max-w-277.5  w-[60%]">
            <h1 className="text-3xl font-bold mb-6">Friendship Analytics</h1>

            <div className=" rounded-2xl  shadow-sm p-6">
                <p className="text-sm mb-4">By Interaction Type</p>

                <PieChart className="mx-auto" width={400} height={300}>
                    <Pie
                        data={data}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={120}
                        paddingAngle={4}
                        dataKey="value"
                    >
                        {data.map((entry, index) => (
                            <Cell key={index} fill={entry.color} />
                        ))}
                    </Pie>
                    <Tooltip />
                    <Legend />
                </PieChart>
            </div>
        </div>
    );
};

export default StatsPage;