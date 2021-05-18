import React from "react"
import ReactDOM from "react-dom"

function MyInfo(){
    return (
        <div>
            <h1>Bradley</h1>
            <p>Just moved to NYC</p>
            <ul>
                <li>Russia</li>
                <li>Austrailia</li>
                <li>Vietnam</li>
            </ul>
        </div>
    )
}
ReactDOM.render(<MyInfo/>, document.getElementById("root"))

export default MyInfo