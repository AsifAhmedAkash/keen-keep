// import React from 'react';

import Image from "next/image";
import Link from "next/link";
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


const KeenCard = ({ frnd }) => {


    const { id, name, picture, days_since_contact, tags, status } = frnd;
    return (
        <Link href={`/card/${id}`}>
            <div className="cursor-pointer">
                <div className="card bg-base-100 shadow-sm flex flex-col items-center justify-center text-center p-6">
                    <figure>

                        <div className="w-[100px] h-[100px] rounded-full overflow-hidden">
                            <Image
                                src={picture}
                                alt={name}
                                width={80}
                                height={80}
                                className="w-full h-full object-cover"
                            />
                        </div>

                    </figure>
                    <div className="card-body flex flex-col items-center justify-center text-center">
                        <h2 className="card-title">
                            {name}

                        </h2>
                        <p>{days_since_contact}d ago</p>
                        <div className="flex gap-2">
                            {tags.map((tag, index) => (
                                <div key={index} className="badge badge-success badge-soft">
                                    {tag}
                                </div>
                            ))}
                        </div>

                        <Badge status={status} />


                    </div>
                </div>
            </div>
        </Link>


    );
};

function Badge({ status }) {
    let badgeClass = "badge";
    let label = status;

    switch (status.toLowerCase()) {
        case "on track":
            badgeClass += " badge-success";
            label = "on track";
            break;
        case "almost due":
            badgeClass += " badge-warning";
            label = "almost due";
            break;
        case "overdue":
            badgeClass += " badge-error";
            label = "overdue";
            break;
        default:
            badgeClass += " badge-outline";
            break;
    }

    return <div className={badgeClass}>{label}</div>;
}


export default KeenCard;