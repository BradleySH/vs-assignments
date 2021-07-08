// First Express server 

const { request, response } = require("express");
const express = require("express")
const app = express()
const morgan = require("morgan")
const { v4: uuidv4 } = require('uuid');
const mongoose =require("mongoose")



// Middleware (for every request)
app.use(express.json()) //looks for a request body and turns it into a req.body
app.use(morgan("dev"))



// Connect to database
mongoose.connect("mongodb://localhost:27017/moviesdb", 
    {
        useNewUrlParser: true, 
        useUnifiedTopology:true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the DB")
)


    //1. Endpoint (mount path)
    //2. Callback function

app.use("/movies", require("./routes/movieRouter"))
app.use("/tvshows", require("./routes/tvshowRouter"))



        // 1: PORT   2: Callback
app.listen(9000, () => {
    console.log("Server is running on Port 9000");
})