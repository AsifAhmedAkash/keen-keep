"use client";

import { useFriends } from "@/context/FriendsContext";
import KeenCard from "./KeenCard";
import { useEffect, useState } from "react";

const FrndsSection = () => {
    const { friends, syncFriends } = useFriends();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const load = async () => {
            setLoading(true);
            await syncFriends();
            setLoading(false);
        };

        load();
    }, [syncFriends]);

    return (
        <div className="mx-auto max-w-277.5 mt-10 mb-20">
            <h2 className="font-semibold text-3xl">Your Friends</h2>

            {loading ? (
                <div className="flex justify-center items-center py-10">
                    <span className="loading loading-spinner loading-xl"></span>
                </div>
            ) : (
                <div className="pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 items-stretch">
                    {friends.map((frnd, index) => (
                        <KeenCard key={index} frnd={frnd} />
                    ))}
                </div>
            )}
        </div>
    );
};

export default FrndsSection;