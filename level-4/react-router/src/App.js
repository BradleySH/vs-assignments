import React from "react"
import './App.css';
import Home from "./Home"
import About from "./About"
import {Link, Switch, Route} from "react-router-dom"

function App() {
  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>

      <Switch>
        <Route exact path="/"><Home /></Route>
        <Route path="/about"><About /></Route>
      </Switch>
      
    </div>
  );
}

export default App;
