const express = require("express");
const app = express();
const path = require("path");
const chat = require("./models/chat.js");
const methodOverride = require("method-override");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

// 1. Parse body FIRST so req.body is available for methodOverride
app.use(express.urlencoded({ extended: true }));

// 2. Now methodOverride can read _method from the parsed body
app.use(methodOverride(function (req, res) {
  if (req.body && typeof req.body === "object" && "_method" in req.body) {
    const method = req.body._method;
    delete req.body._method;
    return method;
  }
}));
app.use(methodOverride("_method")); // fallback: ?_method=DELETE in query string

const mongoose = require("mongoose");

main()
  .then(() => { console.log("Connection Successful"); })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/chat");
}

// HOME PAGE
app.get("/", (req, res) => {
  res.render("home.ejs");
});

// ALL CHATS
app.get("/chats", async (req, res) => {
  let chats = await chat.find().sort({ createAt: -1 });
  res.render("index.ejs", { chats });
});

// NEW CHAT FORM
app.get("/chats/new", (req, res) => {
  res.render("newChat.ejs");
});

// CREATE CHAT
app.post("/chats", async (req, res) => {
  let { from, to, msg } = req.body;
  let newChat = new chat({
    from: from,
    to: to,
    msg: msg,
    createAt: new Date(),
  });
  await newChat.save();
  res.redirect("/chats");
});

// EDIT FORM
app.get("/chats/:id/edit", async (req, res) => {
  let { id } = req.params;
  let foundChat = await chat.findById(id);
  res.render("edit.ejs", { chat: foundChat });
});

// UPDATE CHAT
app.put("/chats/:id", async (req, res) => {
  let { id } = req.params;
  let { msg } = req.body;
  let updatedChat = await chat.findByIdAndUpdate(
    id,
    { msg, updatedAt: new Date() },
    { runValidators: true, new: true }
  );
  console.log("Updated:", updatedChat);
  res.redirect("/chats?saved=1");
});

// DELETE CHAT
app.delete("/chats/:id", async (req, res) => {
  let { id } = req.params;
  await chat.findByIdAndDelete(id);
  console.log("Deleted chat:", id);
  res.redirect("/chats?deleted=1");
});

app.listen(8080, () => {
  console.log("Server listening on port 8080");
});
