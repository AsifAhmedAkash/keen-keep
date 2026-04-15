const friends = [
    {
        "id": 1,
        "name": "Ali Khamenei",
        "picture": "https://i.ibb.co.com/352j7DgQ/khameni.jpg",
        "email": "khamenei@example.com",
        "days_since_contact": 45,
        "status": "overdue",
        "tags": ["Iran", "oil"],
        "bio": "Met him while crossing the Strait of Hormuz LOL",
        "goal": 60,
        "next_due_date": "2025-08-10"
    },
    {
        "id": 2,
        "name": "Donald Trump",
        "picture": "https://i.ibb.co.com/k61jm47t/trump.jpg",
        "email": "trump@example.com",
        "days_since_contact": 7,
        "status": "on track",
        "tags": ["USA", "biz"],
        "bio": "Met him on Epstein’s island — don’t ask",
        "goal": 14,
        "next_due_date": "2025-07-22"
    },
    {
        "id": 3,
        "name": "Vladimir Putin",
        "picture": "https://i.ibb.co.com/ZR5fGk7D/putin.jpg",
        "email": "putin@example.com",
        "days_since_contact": 30,
        "status": "on track",
        "tags": ["Russia", "biz"],
        "bio": "Ran into him while ice‑fishing in Siberia",
        "goal": 40,
        "next_due_date": "2025-08-01"
    },
    {
        "id": 4,
        "name": "Kim Jong‑un",
        "picture": "https://i.ibb.co.com/35f3khpc/kim.png",
        "email": "kim@example.com",
        "days_since_contact": 90,
        "status": "ghosted",
        "tags": ["NKorea", "penfrnd"],
        "bio": "Met him at a karaoke bar in Pyongyang — he nailed ‘Gangnam Style’",
        "goal": 100,
        "next_due_date": "2025-09-15"
    },
    {
        "id": 5,
        "name": "Xi Jinping",
        "picture": "https://i.ibb.co.com/zTxp3mD4/Xi-Jinping.jpg",
        "email": "xi@example.com",
        "days_since_contact": 20,
        "status": "almost due",
        "tags": ["China", "biz"],
        "bio": "Shared dim sum with him in a random Beijing alley",
        "goal": 25,
        "next_due_date": "2025-07-30"
    },
    {
        "id": 6,
        "name": "Emmanuel Macron",
        "picture": "https://i.ibb.co.com/cSk49JPN/macron.jpg",
        "email": "macron@example.com",
        "days_since_contact": 12,
        "status": "overdue",
        "tags": ["France", "cheese"],
        "bio": "Met him at a cheese‑rolling contest in Normandy",
        "goal": 20,
        "next_due_date": "2025-07-25"
    },
    {
        "id": 7,
        "name": "Volodymyr Zelenskyy",
        "picture": "https://i.ibb.co.com/spW20mn7/zelenesky.jpg",
        "email": "zelenskyy@example.com",
        "days_since_contact": 5,
        "status": "almost due",
        "tags": ["Ukraine", "gaming"],
        "bio": "Ran into him in a Fortnite lobby — he carried the squad",
        "goal": 10,
        "next_due_date": "2025-07-18"
    },
    {
        "id": 8,
        "name": "Angela Merkel",
        "picture": "https://i.ibb.co.com/prJkZs84/angela.png",
        "email": "merkel@example.com",
        "days_since_contact": 60,
        "status": "on track",
        "tags": ["Germany", "mentor"],
        "bio": "Met her at Oktoberfest — she out‑drank everyone at the table",
        "goal": 70,
        "next_due_date": "2025-08-20"
    },
    {
        "id": 9,
        "name": "Justin Trudeau",
        "picture": "https://i.ibb.co.com/fsVHbW0/trudo.png",
        "email": "trudeau@example.com",
        "days_since_contact": 15,
        "status": "almost due",
        "tags": ["Canada", "snowball"],
        "bio": "Met him during a snowball fight in Montreal — he cheats",
        "goal": 25,
        "next_due_date": "2025-07-28"
    },
    {
        "id": 10,
        "name": "Rishi Sunak",
        "picture": "https://i.ibb.co.com/n86YSbc0/rishi-sunak.jpg",
        "email": "sunak@example.com",
        "days_since_contact": 3,
        "status": "almost due",
        "tags": ["UK", "finance"],
        "bio": "Met him while queueing for fish & chips in London",
        "goal": 7,
        "next_due_date": "2025-07-17"
    }, {
        "id": 11,
        "name": "Narendra Modi",
        "picture": "https://i.ibb.co.com/yF9qFV7f/modi.jpg",
        "email": "modi@example.com",
        "days_since_contact": 18,
        "status": "almost due",
        "tags": ["India", "tea"],
        "bio": "Met him while sipping masala chai at a roadside stall in Gujarat",
        "goal": 25,
        "next_due_date": "2025-07-27"
    },
    {
        "id": 12,
        "name": "Fumio Kishida",
        "picture": "https://i.ibb.co.com/LX3sC9sP/fumio.png",
        "email": "kishida@example.com",
        "days_since_contact": 40,
        "status": "overdue",
        "tags": ["Japan", "sushi"],
        "bio": "Met him at a Tokyo sushi bar — he insisted on ordering 50 rolls",
        "goal": 50,
        "next_due_date": "2025-08-05"
    },
    {
        "id": 13,
        "name": "Recep Tayyip Erdoğan",
        "picture": "https://i.ibb.co.com/CpJSt4V3/erdogan.jpg",
        "email": "erdogan@example.com",
        "days_since_contact": 22,
        "status": "overdue",
        "tags": ["Turkey", "football"],
        "bio": "Met him while playing pickup soccer in Istanbul — he red‑carded me himself",
        "goal": 30,
        "next_due_date": "2025-07-29"
    },
    {
        "id": 14,
        "name": "Nicolás Maduro",
        "picture": "https://i.ibb.co.com/6RpGW6k0/maduro.png",
        "email": "maduro@example.com",
        "days_since_contact": 75,
        "status": "overdue",
        "tags": ["Venezuela", "oil"],
        "bio": "Met him at a gas station in Caracas — he tried to sell me crude oil",
        "goal": 90,
        "next_due_date": "2025-09-01"
    }
]


export default friends;