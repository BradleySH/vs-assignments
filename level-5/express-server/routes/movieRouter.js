const { request, response } = require("express");
const express = require("express")
const movieRouter = express.Router()
const { v4: uuidv4 } = require('uuid');

const movies = [
    { title: "die hard", genre: "action", _id: uuidv4() },
    { title: "star wars IV", genre: "fantasy", _id: uuidv4() },
    { title: "lion king", genre: "fantasy",_id: uuidv4() },
    { title: "friday the 13th", genre: "horror", _id: uuidv4()}  
]


// Get All
movieRouter.get("/", (request, response) => {
    response.send(movies)
})
// Get One
movieRouter.get("/:movieId", (request, response) => {
    const movieId = request.params.movieId
    const foundMovie = movies.find(movie => movie._id === movieId)
    response.send(foundMovie)
})

//Get by Genre
movieRouter.get("/search/genre", (request, response) => {
    const genre = request.query.genre
    const filteredMovies = movies.filter(movie => movie.genre === genre)
    response.send(filteredMovies)
})


movieRouter.post("/", (request, response) => {
    const newMovie = request.body
    newMovie._id = uuidv4()
    movies.push(newMovie)
    response.send(`Successfully added ${newMovie.title} to the database`)

})








// movieRouter.route("/")
// .get((request, response) => {
//     response.send(movies)
// })
// .post((request, response) => {
//     const newMovie = request.body
//     newMovie._id = uuidv4()
//     movies.push(newMovie)
//     response.send(`Successfully added ${newMovie.title} to the database`)
// })







module.exports = movieRouter