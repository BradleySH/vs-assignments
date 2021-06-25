const express = require("express")
const tvshowRouter = express.Router()
const { v4: uuidv4 } = require('uuid');


const tvShows = [
    {title: "Rick and Morty", _id: uuidv4()},
    {title: "Watchmen", _id: uuidv4()},
    {title: "Westworld", _id: uuidv4()},
    {title: "Friends", _id: uuidv4()}
]

tvshowRouter.get("/", (request, response) => {
    response.send(tvShows)
})

tvshowRouter.post("/", (request, response) => {
    const newShow = request.body
    newShow._id = uuidv4()
    tvShows.push(newShow)
    response.send(`Successfully added ${newShow.title} to the database`)
})

module.exports = tvshowRouter