const mongoose = require("mongoose");
const Chat = require("./models/chat.js")
main().then(() => {
    console.log("Connection Successful")
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}

let chats = [
    {
        from: "Prany",
        to: "Yash",
        msg: "Hello",
        created_at: new Date()
    },
    {
        from: "Yash",
        to: "Prany",
        msg: "Hey, how are you?",
        created_at: new Date()
    },
    {
        from: "Prany",
        to: "Yash",
        msg: "I'm good. What about you?",
        created_at: new Date()
    },
    {
        from: "Yash",
        to: "Prany",
        msg: "Doing great! What are you up to?",
        created_at: new Date()
    },
    {
        from: "Prany",
        to: "Yash",
        msg: "Just learning some coding stuff.",
        created_at: new Date()
    },
    {
        from: "Yash",
        to: "Prany",
        msg: "That's awesome! What are you working on?",
        created_at: new Date()
    },
    {
        from: "Prany",
        to: "Yash",
        msg: "I'm building a chat app using Node.js and MongoDB.",
        created_at: new Date()
    },
    {
        from: "Yash",
        to: "Prany",
        msg: "Sounds interesting! Need any help?",
        created_at: new Date()
    },
    {
        from: "Prany",
        to: "Yash",
        msg: "Sure! I might need help with real-time messaging.",
        created_at: new Date()
    },
    {
        from: "Yash",
        to: "Prany",
        msg: "You can use WebSockets for that. Socket.io is a great library!",
        created_at: new Date()
    },
    {
        from: "Prany",
        to: "Yash",
        msg: "Thanks for the suggestion! I'll check it out.",
        created_at: new Date()
    }
];

Chat.insertMany(chats)
