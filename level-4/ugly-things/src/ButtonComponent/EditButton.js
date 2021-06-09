import React from "react"
import {UglyContextConsumer} from "../UglyContext"

function EditButton() {
    return (
        <div className="edit-button" >
            <UglyContextConsumer>
                {context => (
                    <button onClick={context.handleEdit}>Edit</button>
                )}
            </UglyContextConsumer>
        </div>
    )
    
}
export default EditButton