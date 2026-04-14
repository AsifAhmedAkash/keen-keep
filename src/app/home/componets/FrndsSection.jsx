"use client";

import { useFriends } from "@/context/FriendsContext";


// example:
// {
//         "id": 1,
//         "name": "John Doe",
//         "picture": "https://example.com/photos/john.jpg",
//         "email": "john@example.com",
//         "days_since_contact": 12,
//         "status": "overdue",
//         "tags": ["college", "close friend"],
//         "bio": "Met in university. Love hiking together.",
//         "goal": 14,
//         "next_due_date": "2025-07-20"
//     },


const FrndsSection = () => {
    const { friends } = useFriends();

    return (
        <div>
            <h2>Friends {friends.length}</h2>

            {friends.map((frnd) => (
                <div key={frnd.id}>
                    <p>{frnd.name}</p>
                    <p>{frnd.email}</p>
                </div>
            ))}
        </div>
    );
};

export default FrndsSection;