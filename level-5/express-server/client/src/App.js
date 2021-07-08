import React, {useState, useEffect} from "react"
import './App.css';
import axios from "axios"
import Movies from "./component/Movies"
import AddMovieForm from "./component/AddMovieForm"

function App() {

  const [movies, setMovies] = useState([])

  function getMovies() {
    axios.get("/movies")
      .then(response => setMovies(response.data))
      .catch(err => console.log(err))
  }

  function addMovie(newMovie){
    axios.post("/movies", newMovie)
    .then(response => {
      setMovies(prevMovies => [...prevMovies, response.data])

    })
  }

  function deleteMovie(movieId){
    axios.delete(`/movies/${movieId}`)
    .then(response => {
      setMovies(prevMovies => prevMovies.filter(movie => movie._id !== movieId))
    })
    .catch(err => console.log(err))
  }
  
  function editMovie(updates, movieId){
    axios.put(`/movies/${movieId}`, updates)
    .then(response => {
      setMovies(prevMovies => prevMovies.map(movie => movieId !== movieId ? movie : response.data))
    })
    .catch(err => console.log(err))
  }


  useEffect(() => {
    getMovies()
  }, [])

  return (
    <div className="movie-container">
      <AddMovieForm 
        submit={addMovie}
        btnText="Add Movie" 
      />
      { 
        movies.map(movie => 
          <Movies 
          {...movie} 
          key={movie.title}
          deleteMovie={deleteMovie}
          editMovie={editMovie} 
          />) }
    </div>
  );
}

export default App;
