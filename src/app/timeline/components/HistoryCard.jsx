"use client";
import React from "react";
import { IoIosText, IoIosCall } from "react-icons/io";
import { MdVideoCall } from "react-icons/md";

import { useFriends } from "@/context/FriendsContext";

const HistoryCard = ({ data }) => {
    const { friends } = useFriends();
    const { type, createdAt, friendId } = data;

    const friend = friends.find(f => f.id === friendId);

    // console.log(friend.name, "frind from historycard");

    let icon;
    switch (type) {
        case "text":
            icon = <IoIosText size={24}
                className="" />;
            break;
        case "video":
            icon = <MdVideoCall size={24}
                className="" />;
            break;
        case "call":
            icon = <IoIosCall size={24}
                className="" />;
            break;
        default:
            icon = null;
    }

    return (
        <div className="flex items-center gap-3 py-3 px-1   border-gray-50  border  shadow-sm rounded-2xl">
            <div>{icon}</div>
            <div>
                <p className="text-sm font-semibold  capitalize">
                    {type} with {friend.name}
                    {/* {friend && <span className="font-normal text-gray-600"> with {friend.name}</span>} */}
                </p>
                <p className="text-xs ">
                    {new Date(createdAt).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
                </p>
            </div>
        </div>
    );
};

export default HistoryCard;