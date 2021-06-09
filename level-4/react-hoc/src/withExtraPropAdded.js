import React from "react"

export function withExtraPropAdded(component) {
    const Component =component
    return function(props) {
        return (
            <Component anotherProps="Blah blah blah" {...props} />
        )
    }
}