"use client";

import { useFriends } from "@/context/FriendsContext";
import KeenCard from "./KeenCard";
import Link from "next/link";


const FrndsSection = () => {
    const { friends, loading } = useFriends();

    if (loading) {
        return (
            <div className="flex items-center justify-center min-h-[200px]">
                <span className="loading loading-spinner loading-xl"></span>
            </div>
        );
    }

    return (
        <div className="mx-auto max-w-277.5 mt-10 mb-20">
            <h2 className="font-semibold text-3xl ">Your Friends</h2>
            <div className=" pt-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-2 items-stretch">
                {friends.map((frnd, index) => (

                    <KeenCard key={index} frnd={frnd}></KeenCard>

                ))}
            </div>

        </div>
    );
};

export default FrndsSection;