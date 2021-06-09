import {Switch, Route} from "react-router-dom"
import React from "react"
import Services from "./Components/Services"
import Home from "./Components/Home"
import About from "./Components/About"

function Main(){
    return (
        <Switch>
            <Route exact path="/"><Home /></Route>
            <Route path="/about"><About /></Route>
            <Route path="/services"><Services /></Route>
        </Switch>
    )
}
export default Main