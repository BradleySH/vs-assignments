import React from "react"
import friends from "../FriendsData"
import Friends from "./Friends"
// import friends from "./Friends"
import Pets from "./Pets"


function FriendsList() {
    //const friendComp = friends.map(friend => <FriendsList name={friend.name} age={friend.age} />)
     const friendComp = friends.map(friend => <Friends name={friend.name} age={friend.age} pets={friend.pets} />)
    return (
        <div>
            {friendComp}
        </div>

    )
}

export default FriendsList