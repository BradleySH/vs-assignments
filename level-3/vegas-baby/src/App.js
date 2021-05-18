import React from 'react'
import ReactDice from 'react-dice-complete'
import 'react-dice-complete/dist/react-dice-complete.css'
import DiceBox from './DiceBox'
import Die from "./Die"
 

function App(props) {
  return (
    <div>
      <Die class={props.class}/>
      <DiceBox />
    </div>
  )
  
}
export default App