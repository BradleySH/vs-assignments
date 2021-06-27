const express = require("express")
const thingRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

const inventoryItems = [
    {
        name: "banana",
        type: "food",
        price: 200,
        _id: uuidv4()
    },{
        name: "pants",
        type: "clothing",
        price: 2500,
        _id: uuidv4()
    },{
        name: "basket ball",
        type: "toy",
        price: 1000,
        _id: uuidv4()
    },{
        name: "rockem sockem robots",
        type: "toy",
        price: 1500,
        _id: uuidv4()
    },{
        name: "shirt",
        type: "clothing",
        price: 800,
        _id: uuidv4()
    },{
        name: "soup",
        type: "food",
        price: 300,
        _id: uuidv4()
    },{
        name: "flour",
        type: "food",
        price: 100,
        _id: uuidv4()
    }
]

// Get All

thingRouter.get("/", (req, res) => {
    res.send(inventoryItems)
})


// Get One
thingRouter.get("/:inventoryItemId", (req, res) => {
    const inventoryItemId = req.params.inventoryItemId
    const pickedItem = inventoryItems.find(item => item._id === inventoryItemId)
    res.send(pickedItem)
})


// Get Type
thingRouter.get("/search/type", (req, res) => {
    console.log(req, "this is the type");
    const type = req.params.type
    const filteredItems = inventoryItems.filter(item => item.type === type)
    res.send(filteredItems)
})

// Get Price


module.exports = thingRouter