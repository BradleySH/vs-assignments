import React from "react"

function HitList(props){
    console.log("Props " + props.image)
    return (
        <div>
            <img src={`${props.image}`}/>
            <div>Name: {props.name}</div>
        </div>
       
    )
}

export default HitList