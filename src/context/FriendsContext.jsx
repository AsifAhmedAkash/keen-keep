"use client";

import { createContext, useContext, useState } from "react";
import friendsData from "@/data/friends";

const FriendsContext = createContext();

export const FriendsProvider = ({ children }) => {
    const [friends, setFriends] = useState(friendsData);

    return (
        <FriendsContext.Provider value={{ friends, setFriends }}>
            {children}
        </FriendsContext.Provider>
    );
};

export const useFriends = () => {
    return useContext(FriendsContext);
};