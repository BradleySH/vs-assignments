import { func } from "prop-types"
import React from "react"

import Jokes from "./Jokes"
import jokesData from "./jokesData"

function MyApp(){
    const jokesCompomnent = jokesData.map((jokes) => {
        return (
            <Jokes key={jokes.id} question={jokes.question} punchline={jokes.punchline} />)

    })
    return (
        <div className="joke-container">
            <Jokes 
                question={"What do you call a bear with no teeth?"}
                punchline={"A Gummy Bear"}
            />
            <Jokes 
                question={"Why did David Hasselhoff change his name to 'The Hoff'?"}
                punchline={"It's less hassle"}
            />
            <Jokes 
                question={"Why do ducks have feathers?"}
                punchline={"To cover their butt quacks"}
            />
            <Jokes 
                question={"Why dont chickens wear underwear?"}
                punchline={"Because their pecker is on their face"}
            />
            <Jokes 
                question={"What was E.T. short for?"}
                punchline={"Because he had little legs"}
            />
        </div>
    )
}

export default MyApp