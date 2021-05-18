import React from "react"
import ReactDOM from "react-dom"
import Card from "./Card"
import vacationSpots from "./vacationSpots"
import "./component/style.css"

function App(){
    const travelSpot = vacationSpots.map(spot => <Card place={spot.place} price={spot.price} timeToGo={spot.timeToGo} img={spot.img} />)
    return (
        <div>
            {travelSpot}
        </div>
        
    )

}



ReactDOM.render(<App />, document.getElementById("root"))
export default App