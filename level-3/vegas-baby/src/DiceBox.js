import React, { Component } from "react"
import Die from "./Die"
import "./DiceBox.css"

class DiceBox extends Component {
    state = { 
            diceArray: ["diceface1", "diceface2", "diceface3", "diceface4", "diceface5", "diceface6"],
            dice1: ""
     }
     randomNum = () => {
     return (
         Math.floor(Math.random() *6)
         )
        }
     handleClick = (e) => {
         console.log(this.randomNum());
         e.preventDefault()
         //console.log(this.state.diceArray[this.randomNum()]);
        //  this.setState({
              
        //             //dice1: prevState.dice1(Math.floor(Math.random) * 6),
        //             dice1: this.state.diceArray[this.randomNum() ]
                
        //     })
     }
     
    render() { 
        
        return ( 
            <div class={this.state.class}>

            <button className="roll-dice" onClick={this.handleClick}>Roll Dice</button>
            </div>
         )
    }
}
 
export default DiceBox;
 
