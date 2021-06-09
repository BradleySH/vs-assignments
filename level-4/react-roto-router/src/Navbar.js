import React from "react"
import {Link, Switch, Route} from "react-router-dom"

function Navbar() {
    return (
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/services">Services</Link>
            </nav>
        </div>
    )
}
export default Navbar