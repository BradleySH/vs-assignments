import React from "react"


function UglyThing(props){
    console.log(props);
    return (
        <div>
            <h2>Title: {props.title}</h2>
            <img src={props.imgUrl} />
            <h2>Description: {props.desc}</h2>
        </div>

    )
}
export default UglyThing