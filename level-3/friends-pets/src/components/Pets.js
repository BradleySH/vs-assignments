import React from "react"
//import FriendsData from "../FriendsData"

function Pets(props) {
    return(
        <div>
            <h4>Pet Name: {props.name}</h4>
            <p>Breed: {props.breed}</p>
        </div>
    )
    
}



export default Pets