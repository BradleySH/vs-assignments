const express = require("express")
const app = express()
const { v4: uuidv4 } = require('uuid');

app.use(express.json())


app.use("/items", (req, res, next) => {
    console.log("Middleware has executed");
    next()
})

app.use("/items", (req, res, next) => {
    req.body = {
        name: "Brad", 
        age: 34
    }
    next()
})
app.get("/items", (req, res, next) => {
    res.send(req.body)
})

app.listen(9000, () => {
    console.log("server is on port 9000");
})