import React from "react"
import vacationSpots from "./vacationSpots"

function Card(props){
    return (
        <div className="card">
        <div className="header">
            <h3>Destination:  {props.place}</h3>
        </div>
        <div className="main">
           <img src={props.img} className="image"></img>
        </div>
        <div className="footer">
            <h2>${props.price}</h2>
            <p>Best time to travel -{props.timeToGo}</p>
        </div>
    </div>
   
    )

}
export default Card