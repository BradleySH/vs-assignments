import React from "react"
import {ThemeConsumer} from "./ThemeProvider"

function Header(props) {
    return (
    <ThemeConsumer>
        {context => (
            <header className={`${context.theme}-theme`}>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </header>
        )}
    </ThemeConsumer>
    )

}
export default Header