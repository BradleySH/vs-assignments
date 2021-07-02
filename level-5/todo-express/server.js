const express = require("express")
const app = express()

app.use(express.json())

app.use("/todos", require("./Routes/todoRoute"))


app.listen(9000, () => {
    console.log("server is running on port 9000");
})