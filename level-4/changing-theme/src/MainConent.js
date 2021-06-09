import React from "react"
import {ThemeConsumer} from "./ThemeProvider"

function MainContent() {
    return (
        <ThemeConsumer>
            {context => (
                <main className={`${context.theme}-theme`}>
                <h1>Click the Button to toggle the {context.theme === "light" ? "Light" : "Dark"} Theme!</h1>
                <br />
                <button className={`${context.theme}-theme`} onClick={context.toggleTheme}>Toggle Theme</button>
                </main>
            )}
        </ThemeConsumer>
    )
}
export default MainContent