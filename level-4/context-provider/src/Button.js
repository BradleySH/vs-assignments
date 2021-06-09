import React from "react"
import ThemeContext, { ThemeContextConsumer, ThemeContextProvider } from "./ThemeContext"

function Button(props) {
        return (
            <ThemeContextConsumer>
                {context => (
                    <button className={`${context.theme}-theme`} onClick={context.toggleTheme}>Switch Theme</button>
                )}
            </ThemeContextConsumer>
  
            
        )
}


export default Button