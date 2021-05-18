import React from "react"
import ReactDOM from "react-dom"
import Friends from "./components/Friends"
import FriendsList from "./components/FriendsList"
import Pets from "./components/Pets"
import friends from "./FriendsData"


function App(){
    return(
    <div>
        <FriendsList />
        {/* <Friends /> */}
        {/* <Pets /> */}

    </div>
    )
}




export default App

ReactDOM.render(<App />, document.getElementById("root"))