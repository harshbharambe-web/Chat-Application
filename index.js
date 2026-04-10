const express = require("express");
const app = express();
const path = require("path");
const chat = require("./models/chat.js")
const methodOverride = require("method-override");

app.use(methodOverride("_method")); 


app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended : true}));



const mongoose = require('mongoose');

main()

.then(()=>{

    console.log("Connection Sucessfull");
    
})




.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chat');

}


app.get("/", (req,res) =>{

res.send("Welcome");

})

//home 

app.get("/chats", async (req,res)=>{

    let chats = await chat.find();

    console.log(chats);
    res.render("index.ejs", {chats});



})

//new chat

app.get("/chats/new", (req,res)=>{
    
    res.render("newChat.ejs");

})

app.post("/chats",async (req,res)=>{

    let {from,to,msg} = req.body;
    let newChat = new chat({
    from : from,
    to : to,
    msg: msg,
    createAt : new Date()});

    newChat.save().then((res)=>{

        console.log("Chat was saved");
        
    })
    .catch((err)=>{
        console.log(err);
    })
    res.redirect("/chats");
    

})


//edit
app.get("/chats/:id/edit", async (req, res) => {
    let { id } = req.params;

    let foundChat = await chat.findById(id);

    res.render("edit.ejs", { chat: foundChat }); 
});

//update
app.put("/chats/:id", async (req, res) => {

    let { id } = req.params;
    let { msg } = req.body;

    let updatedChat = await chat.findByIdAndUpdate(
        id,
        { msg },
        { runValidators: true, new: true }
    );

    console.log(updatedChat);

    res.redirect("/chats");
});



app.listen(8080, () => {

console.log("Server listening to 8080");



})



