"use client";

import { useFriends } from "@/context/FriendsContext";
import HistoryCard from "./components/HistoryCard";
import { useTimeline } from "@/context/TimeLineContext";

const TimeLinePage = () => {
    const { timeline } = useTimeline();
    const { friends } = useFriends();

    const allhistory = [...timeline];
    // console.log("all history ", allhistory);


    return (
        <div className="mx-auto max-w-277.5  w-[60%]">
            <h2 className="mt-20 text-4xl font-bold mb-6">Timeline</h2>
            <div className="grid gap-5 mb-20">
                {allhistory.map((entry, index) => (
                    <HistoryCard key={index} data={entry} />
                ))}
            </div>
        </div>

    );
};

export default TimeLinePage;