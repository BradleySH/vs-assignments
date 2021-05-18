import React from "react"
import friends from "../FriendsData"
//import FriendsList from "./FriendsList"
import Pets from "./Pets"

function Friends(props) {
    console.log(props.pets);
    const petInfo = props.pets.map(pet => <Pets name={pet.name} breed={pet.breed} />)
    //const friendInfo = friends.map(friend => friend.friends.map(friends => <FriendsList name={friends.name} age={friends.age} />))
    return (
        <div className="friend-name">
            <h1>Name: {props.name} </h1>
            <h2>Age: {props.age}</h2>
             
        

        </div>
    )
}

export default Friends