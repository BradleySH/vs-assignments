import React from "react"
import "./Badges.css"

function Badges(props){
    return (
        <div className="badge-container">
        <div className="header">
            <h2>Badge:</h2>
        </div>
        <div className="main-content">
            <h4 className="name">Name: {props.firstName} {props.lastName}</h4>
            <br />
            <h4 className="birthLocation">Place of birth: {props.birthLocation}</h4>
            <br />
            <h4 className="email">Email: {props.email}</h4>
            <br />
            <h4 className="phone">Phone: {props.phone}</h4>
            <br />
            <h4 className="favFood">Favorite food: {props.favFood}</h4>
            <p className="textarea">{props.textarea}</p>
        </div>
        </div>

    )
}
export default Badges