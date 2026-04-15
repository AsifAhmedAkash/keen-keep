'use client'
import { useFriends } from "@/context/FriendsContext";
import { addInteractionToLocalDB } from "@/utils/addLocalDB";


import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { useState, useCallback } from "react";
import {
    LuBellOff,
    LuArchive,
    LuTrash2,
    LuPencil,
    LuPhone,
    LuMessageSquare,
    LuVideo,
    LuArrowLeft,
} from "react-icons/lu";

const formatDate = (dateStr) => {
    if (!dateStr) return "—";
    const date = new Date(dateStr);
    return date.toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" });
};

const StatusBadge = ({ status }) => {
    const isOverdue = status?.toLowerCase() === "overdue";
    return (
        <span
            className={`inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold tracking-wide ${isOverdue
                ? "bg-red-500 text-white"
                : "bg-green-100 text-green-700"
                }`}
        >
            {status?.charAt(0).toUpperCase() + status?.slice(1)}
        </span>
    );
};

const TagBadge = ({ tag }) => (
    <span className="inline-flex items-center px-3 py-0.5 rounded-full text-xs font-semibold bg-green-100 text-green-700 tracking-widest uppercase">
        {tag}
    </span>
);

const StatCard = ({ value, label, large }) => (
    <div className="bg-white rounded-2xl border border-gray-100 flex flex-col items-center justify-center py-6 px-4 gap-1 shadow-sm">
        <span className={`font-bold text-[#2D6A5A] ${large ? "text-3xl" : "text-4xl"}`}>{value}</span>
        <span className="text-sm text-gray-400 font-medium">{label}</span>
    </div>
);

const ActionButton = ({ icon: Icon, label, danger, onClick }) => (
    <button
        onClick={onClick}
        className={`w-full flex items-center justify-center gap-2 py-3.5 px-4 bg-white rounded-2xl border border-gray-100 shadow-sm text-sm font-medium transition hover:bg-gray-50 active:scale-[0.98] ${danger ? "text-red-500" : "text-gray-700"
            }`}
    >
        <Icon size={16} />
        {label}
    </button>
);

const QuickCheckInButton = ({ icon: Icon, label, onClick }) => (
    <button onClick={onClick} className="flex-1 flex flex-col items-center justify-center gap-2 py-5 bg-white rounded-2xl border border-gray-100 shadow-sm text-sm font-medium text-gray-700 transition hover:bg-gray-50 active:scale-[0.98]">
        <Icon size={22} />
        {label}
    </button>
);

const CardDetailsPage = () => {
    const { id } = useParams();
    const { friends, updateFriend } = useFriends();
    const router = useRouter();
    const [editingGoal, setEditingGoal] = useState(false);

    const friend = friends?.find((f) => f.id === Number(id));

    if (!friend) {
        return (
            <div className="min-h-screen bg-[#F0F4F2] flex items-center justify-center">
                <p className="text-gray-400 text-lg">Friend not found</p>
            </div>
        );
    }

    const { name, picture, email, days_since_contact, status, tags, goal, next_due_date, bio } = friend;

    const computeStatus = (daysSince, goalDays) => {
        if (daysSince >= goalDays) return "overdue";
        if (daysSince >= goalDays * 0.8) return "almost due";
        return "on track";
    };

    const handleCheckIn = (mode) => {

        const today = new Date();

        addInteractionToLocalDB({
            id: crypto.randomUUID(),
            friendId: friend.id,
            type: mode,
            createdAt: today,
            goal: friend.goal,
        });


        // const today = new Date();
        const nextDue = new Date(today);
        nextDue.setDate(today.getDate() + friend.goal);

        updateFriend({
            ...friend,
            days_since_contact: 0,
            next_due_date: nextDue.toISOString().split("T")[0],
            status: computeStatus(0, friend.goal),
        });
    };

    return (
        <div className="min-h-screen bg-[#F0F4F2] p-6 md:p-10">



            <div className="grid grid-cols-1 md:grid-cols-[280px_1fr] gap-4 max-w-5xl mx-auto">


                <div className="flex flex-col gap-4">

                    {/* Profile*/}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm flex flex-col items-center text-center py-8 px-6 gap-3">
                        <div className="relative w-20 h-20 rounded-full overflow-hidden ring-2 ring-gray-100">
                            {<Image
                                src={picture}
                                alt={name}
                                fill
                                className="object-cover"
                            />}
                        </div>

                        <h1 className="text-xl font-bold text-gray-900">{name}</h1>

                        <div className="flex flex-col items-center gap-1.5">
                            <StatusBadge status={status} />
                            {tags.map((tag, i) => (
                                <TagBadge key={i} tag={tag} />
                            ))}
                        </div>

                        {bio && (
                            <p className="text-sm text-gray-400 italic mt-1">{bio}</p>
                        )}
                        {email && (
                            <p className="text-xs text-gray-400">Preferred: email</p>
                        )}
                    </div>


                    <div className="flex flex-col gap-2">
                        <ActionButton icon={LuBellOff} label="Snooze 2 Weeks" />
                        <ActionButton icon={LuArchive} label="Archive" />
                        <ActionButton icon={LuTrash2} label="Delete" danger />
                    </div>
                </div>


                <div className="flex flex-col gap-4">


                    <div className="grid grid-cols-3 gap-4">
                        <StatCard value={days_since_contact ?? "—"} label="Days Since Contact" />
                        <StatCard value={goal ?? "—"} label="Goal (Days)" />
                        <StatCard value={formatDate(next_due_date)} label="Next Due" large />
                    </div>

                    {/* relgoals */}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-5">
                        <div className="flex items-center justify-between mb-2">
                            <h2 className="text-base font-semibold text-gray-800">Relationship Goal</h2>
                            <button
                                onClick={() => setEditingGoal((v) => !v)}
                                className="text-xs border border-gray-200 rounded-lg px-3 py-1.5 text-gray-600 hover:bg-gray-50 transition flex items-center gap-1"
                            >
                                <LuPencil size={12} />
                                Edit
                            </button>
                        </div>
                        <p className="text-sm text-gray-500">
                            Connect every{" "}
                            <span className="font-bold text-gray-800">{goal} days</span>
                        </p>
                    </div>

                    {/* Quick CheckIn*/}
                    <div className="bg-white rounded-2xl border border-gray-100 shadow-sm px-6 py-5">
                        <h2 className="text-base font-semibold text-gray-800 mb-4">Quick Check-In</h2>
                        <div className="flex gap-3">
                            <QuickCheckInButton icon={LuPhone} label="Call" onClick={() => handleCheckIn("call")} />
                            <QuickCheckInButton icon={LuMessageSquare} label="Text" onClick={() => handleCheckIn("text")} />
                            <QuickCheckInButton icon={LuVideo} label="Video" onClick={() => handleCheckIn("video")} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardDetailsPage;