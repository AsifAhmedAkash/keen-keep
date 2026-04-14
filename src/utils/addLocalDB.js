
const INTERACTION_DB = "interactionDB";


const getAllInteractionsFromLocalDB = () => {
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

const addInteractionToLocalDB = (interaction) => {


    const allInteractions = getAllInteractionsFromLocalDB();

    const alreadyExists = allInteractions.find(
        item => item.id === interaction.id
    );

    if (alreadyExists) {
        console.log("interaction already exists");
        return;
    }

    allInteractions.push(interaction);

    localStorage.setItem(INTERACTION_DB, JSON.stringify(allInteractions));
};


const clearInteractionDB = () => {
    localStorage.removeItem(INTERACTION_DB);
};

export {
    getAllInteractionsFromLocalDB,
    addInteractionToLocalDB,
    clearInteractionDB
};