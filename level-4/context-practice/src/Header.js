import React from "react"
import {UserContextConsumer} from "./UserContext"

function Header() {
        return (
            <UserContextConsumer>
                {({username}) => (
                    <header>
                    <p>Welcome, {username}!</p>
                </header>
                )}
            </UserContextConsumer>

        )    
}
export default Header