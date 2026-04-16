
const INTERACTION_DB = "interactionDB";
const FRIENDS_DB = "friendsDB";


const getAllInteractionsFromLocalDB = () => {
    if (typeof window === "undefined") return [];
    const data = localStorage.getItem(INTERACTION_DB);

    if (data) return JSON.parse(data);

    return [];
};
/**
     interaction object format:
     {
        id: string (unique),
        person: string,
        mode: string (e.g. "chat", "call", "meet"),
        time: number (timestamp)
     }
    */

// const getInteractionsThisMonth = () => {
//     const all = getAllInteractionsFromLocalDB();

//     const now = new Date();
//     const currentMonth = now.getMonth();
//     const currentYear = now.getFullYear();

//     return all.filter(item => {
//         const date = new Date(item.createdAt);

//         return (
//             date.getMonth() === currentMonth &&
//             date.getFullYear() === currentYear
//         );
//     });
// };

const addInteractionToLocalDB = (interaction) => {
    const { friendId, goal } = interaction;

    const allInteractions = getAllInteractionsFromLocalDB();
    const alreadyExists = allInteractions.find(item => item.id === interaction.id);
    if (alreadyExists) {
        console.log("interaction already exists");
        return;
    }

    allInteractions.push(interaction);
    localStorage.setItem(INTERACTION_DB, JSON.stringify(allInteractions));

    // Update friend
    const data = localStorage.getItem(FRIENDS_DB);
    if (!data) return;

    const today = new Date();
    const nextDue = new Date(today);
    nextDue.setDate(today.getDate() + goal);

    const friends = JSON.parse(data);
    const updated = friends.map(f =>
        f.id === friendId ? {
            ...f,
            days_since_contact: 0,
            next_due_date: nextDue.toISOString().split("T")[0],
            status: "on track",
        } : f
    );

    localStorage.setItem(FRIENDS_DB, JSON.stringify(updated));
};


const clearInteractionDB = () => {
    localStorage.removeItem(INTERACTION_DB);
};


export {
    getAllInteractionsFromLocalDB,
    addInteractionToLocalDB,
    clearInteractionDB,
    // getInteractionsThisMonth
};