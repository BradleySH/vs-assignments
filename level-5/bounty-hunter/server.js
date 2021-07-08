const express = require("express")
const app = express()
const mongoose = require("mongoose")


//  Middleware

app.use(express.json())
//  Coonect to DB
mongoose.connect("mongodb://localhost:27017/bountyhunterdb", 
    {
        useNewUrlParser: true, 
        useUnifiedTopology:true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the DB")
    )


app.use("/bounties", require("./Routes/bountyRoute"))

// error handling last piece of middleware before app.listen
app.use((err, req, res, next) => {
    console.log(err);
    return res.send({errMsg: err.message})

})


app.listen(9000, () => {
    console.log("server is running on Port 9000");
})