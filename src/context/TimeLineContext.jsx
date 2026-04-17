"use client";

import { createContext, useContext, useState } from "react";
import { getAllInteractionsFromLocalDB } from "@/utils/addLocalDB";

const TIMELINE_DB = "interactionDB";
const TimelineContext = createContext();

export const TimelineProvider = ({ children }) => {
    const [timeline, setTimeline] = useState(() => {
        if (typeof window === "undefined") return [];
        return getAllInteractionsFromLocalDB();
    });

    const syncTimeline = () => {
        const data = getAllInteractionsFromLocalDB();
        setTimeline(data);
    };

    const addToTimeline = (entry) => {
        setTimeline(prev => {
            const updated = [...prev, entry];
            localStorage.setItem(TIMELINE_DB, JSON.stringify(updated));
            return updated;
        });
    };

    return (
        <TimelineContext.Provider value={{ timeline, addToTimeline, syncTimeline }}>
            {children}
        </TimelineContext.Provider>
    );
};

export const useTimeline = () => useContext(TimelineContext);