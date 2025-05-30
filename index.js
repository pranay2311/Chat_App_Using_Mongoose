const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const Chat = require("./models/chat.js")
const methodOverride = require("method-override")

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")))
app.use(express.urlencoded({ extended: true }))
app.use(methodOverride("_method"))

main().then(() => {
    console.log("Connection Successful")
})
    .catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://127.0.0.1:27017/whatsapp');

}


//Index Route

app.get("/chats/new", (req, res) => {
    res.render("new.ejs")
})


app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;
    let chat = await Chat.findById(id);
    res.render("edit.ejs", { chat })
})

app.put("/chats/:id", async (req, res) => {
    let { id } = req.params;
    let { msg: newMsg } = req.body;
    let updatedChat = await Chat.findByIdAndUpdate(id, { msg: newMsg }, { runValidators: true })
    console.log(updatedChat)
    res.redirect("/chats")
})



app.get("/chats", async (req, res) => {
    let chats = await Chat.find()

    res.render("index.ejs", { chats })
})

app.post("/chats", (req, res) => {
    let { from, to, msg } = req.body
    let newChat = new Chat({
        from: from,
        to: to,
        msg: msg,
        created_at: new Date()
    });

    console.log(newChat)
    newChat.save().then((res) => {
        console.log(res);
    }).catch((e) => {
        console.log(e);
    })

    res.redirect("/chats")

})

app.delete("/chats/:id", async (req, res) => {
    let {id} = req.params;
    await Chat.findByIdAndDelete(id)
    res.redirect("/chats")
})


app.get("/", (req, res) => {
    res.send("root is working");
});


app.listen(8080, () => {
    console.log("Server us listening on Post 8080");
})