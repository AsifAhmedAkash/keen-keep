"use client";

import { createContext, useContext, useState } from "react";
import friendsData from "@/data/friends";

const FRIENDS_DB = "friendsDB";
const FriendsContext = createContext();

export const FriendsProvider = ({ children }) => {
    const [friends, setFriends] = useState(() => {
        if (typeof window === "undefined") return friendsData;
        const stored = localStorage.getItem(FRIENDS_DB);
        if (stored) return JSON.parse(stored);

        // duplicating from the main db
        localStorage.setItem(FRIENDS_DB, JSON.stringify(friendsData));
        return friendsData;
    });

    const updateFriend = (updatedFriend) => {
        setFriends(prev => {
            const updated = prev.map(f =>
                f.id === updatedFriend.id ? updatedFriend : f
            );
            localStorage.setItem(FRIENDS_DB, JSON.stringify(updated));
            return updated;
        });
    };

    return (
        <FriendsContext.Provider value={{ friends, setFriends, updateFriend }}>
            {children}
        </FriendsContext.Provider>
    );
};

export const useFriends = () => {
    return useContext(FriendsContext);
};