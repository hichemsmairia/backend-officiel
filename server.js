const express = require("express");
const bodyParser = require("body-parser");


const server = express();
const mongoose = require("mongoose");

const studentRouter = require("./routes/studentRoute");

server.use(bodyParser.urlencoded({ extended: false }));

server.use(bodyParser.json());


mongoose.connect(
  "mongodb+srv://hichem:hichem@cluster0.1jgwb.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
)
.then(function(){
    console.log('base de donnes connecté ! ')
})

server.use("/student", studentRouter);

// /add_student   
const PORT = process.env.PORT || 5000
server.listen(PORT, () => console.log("serveur en marche !!! "));
