const express = require("express")
const app = express()


//  Middleware

app.use(express.json())

app.use("/bounties", require("./Routes/bountyRoute"))


app.listen(9000, () => {
    console.log("server is running on Port 9000");
})