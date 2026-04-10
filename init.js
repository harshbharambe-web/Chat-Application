const mongoose = require('mongoose');
const chat = require("./models/chat.js")

main()

.then(()=>{

    console.log("Connection Sucessfull");
    
})




.catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/chat');

}

let allChats = [

    {
         from : "vir",
        to : "bob",
        msg : "give me js notes",
        createAt : new Date(),
    },

     {
         from : "viren",
        to : "boblu",
        msg : "give me js notes and node js ",
        createAt : new Date(),
    },

     {
         from : "niki",
        to : "riely",
        msg : "Are you coming tommowrow?",
        createAt : new Date(),
    },

     {
         from : "virat",
        to : "dhoni",
        msg : "Teach me helicopter shot",
        createAt : new Date(),
    }




] 

 chat.insertMany(allChats).then((res)=>{
    console.log(res);
    
 }).catch((err)=>{
    console.log(err);
    
 })