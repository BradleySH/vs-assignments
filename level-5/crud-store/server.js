const express = require("express")
const app = express()
const morgan = require("morgan")
const mongoose = require("mongoose")
//import inventoryRouter from "./routes/inventoryRouter"

app.use(express.json())
app.use(morgan("dev"))

//connect to DB
mongoose.connect("mongodb://localhost:27017/crudstoredb", 
    {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useCreateIndex: true,
        useFindAndModify: false
    },
    () => console.log("Connected to the DB")
)

app.use("/items", require("./routes/inventoryRouter"))

app.listen(9000, () => {
    console.log("the server is running on port 9000");
})