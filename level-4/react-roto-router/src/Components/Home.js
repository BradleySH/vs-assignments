import React from "react"
import {LoremIpsum} from "react-lorem-ipsum"

function Home() {
    return (
        <div className="wrapper-home">
            <h1 className="header">Thomas Crapper Plumbing</h1>

            <div className="textarea-wrapper">
                <LoremIpsum p={1} />
            </div>
            <div className="image">
                <img src="https://images.unsplash.com/photo-1542013936693-884638332954?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80"  />
            </div>


        </div>
    )
}
export default Home