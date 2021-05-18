import React, { Component } from "react"
import DiceBox from "./DiceBox"
import "./Die.css"

class Die extends Component {

    render(props) { 
        return (  
        <div className="dice-container">
            <div className={`dice diceface1 ${this.props.class}`}>
                <span className="dot"></span>
            </div>

            <div className={`dice ${this.props.class}`}>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>

            <div className={`dice ${this.props.class}`}>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>

            <div className={`dice ${this.props.class}`}>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
            </div>
                <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
            </div>
            </div>
            <div className={`dice ${this.props.class}`}>
            <div className="column">
                    <span className="dot"></span>
                    <span className="dot"></span>
            </div>
  
            <div className="column">
                    <span className="dot"></span>
            </div>
  
            <div className="column">
                <span className="dot"></span>
                <span className="dot"></span>
            </div>

            </div>
            <div className={`dice ${this.props.class}`}>
            <div className="column">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div>
            <div className="column">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
            </div> 

     </div>
</div> 
        );
    }
}
 
export default Die

