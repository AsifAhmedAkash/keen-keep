"use client";

import { useFriends } from "@/context/FriendsContext";
import HistoryCard from "./components/HistoryCard";
import { useTimeline } from "@/context/TimeLineContext";
import { useState } from "react";

const TimeLinePage = () => {
    const { timeline } = useTimeline();
    const { friends } = useFriends();

    const [sortOrder, setSortOrder] = useState("desc"); // desc = newest first
    const [filterFriend, setFilterFriend] = useState("all");
    const [filterType, setFilterType] = useState("all");

    const filtered = [...timeline]
        .filter(e => filterFriend === "all" || e.friendId === Number(filterFriend))
        .filter(e => filterType === "all" || e.type === filterType)
        .sort((a, b) => sortOrder === "desc"
            ? new Date(b.createdAt) - new Date(a.createdAt)
            : new Date(a.createdAt) - new Date(b.createdAt)
        );

    return (
        <div className="mx-auto max-w-277.5 w-[60%]">
            <h2 className="mt-20 text-4xl font-bold mb-6">Timeline</h2>

            <div className="flex gap-3 mb-6">
                <select
                    className="select select-bordered select-sm"
                    value={sortOrder}
                    onChange={e => setSortOrder(e.target.value)}
                >
                    <option value="desc">Newest First</option>
                    <option value="asc">Oldest First</option>
                </select>

                <select
                    className="select select-bordered select-sm"
                    value={filterFriend}
                    onChange={e => setFilterFriend(e.target.value)}
                >
                    <option value="all">All Friends</option>
                    {friends.map(f => (
                        <option key={f.id} value={f.id}>{f.name}</option>
                    ))}
                </select>

                <select
                    className="select select-bordered select-sm"
                    value={filterType}
                    onChange={e => setFilterType(e.target.value)}
                >
                    <option value="all">All Types</option>
                    <option value="call">Call</option>
                    <option value="text">Text</option>
                    <option value="video">Video</option>
                </select>
            </div>

            <div className="grid gap-5 mb-20">
                {filtered.map((entry, index) => (
                    <HistoryCard
                        key={index}
                        data={entry}
                        friend={friends.find(f => f.id === entry.friendId)}
                    />
                ))}
            </div>
        </div>
    );
};

export default TimeLinePage;