import React from "react"

function MyJokes(props){
    return (
        <div className="joke-list">
            <p>Question: {props.question}</p>
            <p>Punch: {props.punchline}</p>
        </div>

    )
}

export default MyJokes