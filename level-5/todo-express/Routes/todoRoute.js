const express= require("express")
const todoRoute = express.Router()
const { v4: uuidv4 } = require('uuid');

const todos = [
    {
        name: "bananas",
        description: "ripe bananas",
        imgUrl: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
        completed: false,
        _id: uuidv4()
    },
    {
        name: "coffee",
        description: "Coffee from the mountains of Colombia",
        imgUrl: "https://images.unsplash.com/photo-1447933601403-0c6688de566e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=956&q=80",
        completed: false,
        _id: uuidv4()
    }
]


todoRoute.route("/")
.get((req, res) => {
    res.send(todos)
})

todoRoute.get("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const foundTodo = todos.find(todo => todo._id === todoId)
    res.send(foundTodo)
})

todoRoute.post("/", (req, res) => {
    const newTodo = req.body
    newTodo._id = uuidv4()
    todos.push(newTodo)
    res.send(`Successsfully added ${newTodo.name} to the list`)
})

todoRoute.delete("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    todos.splice(todoIndex, 1)
    res.send("Successfully deleted item")
})

todoRoute.put("/:todoId", (req, res) => {
    const todoId = req.params.todoId
    const todoIndex = todos.findIndex(todo => todo._id === todoId)
    const updatedTodo = Object.assign(todos[todoIndex], req.body)
    res.send(updatedTodo)
})

module.exports = todoRoute