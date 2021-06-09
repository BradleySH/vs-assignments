import React from "react"
import {ThemeConsumer} from "./ThemeProvider"

function Footer() {
    return (
        <ThemeConsumer>
            {context =>(
                <footer className={`${context.theme}-theme`}>
                    <p>The amazing Footer</p>
                </footer>
            )}
        </ThemeConsumer>
    )
    
}
export default Footer