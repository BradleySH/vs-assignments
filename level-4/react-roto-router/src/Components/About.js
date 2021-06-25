import React from "react"
import {LoremIpsum} from "react-lorem-ipsum"

function About() {
    return (
        <div className="about-container">
            <h1 className="about-header">About Us</h1>
            <div className="about1">
                <p>
                    <LoremIpsum p={3}/>
                </p>
            </div>
            <div className="about2">
                <LoremIpsum p={1}/>
            </div>
            <img 
           className="mario" src="https://images.unsplash.com/photo-1595429035839-c99c298ffdde?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"/>
        </div>
    )
}
export default About