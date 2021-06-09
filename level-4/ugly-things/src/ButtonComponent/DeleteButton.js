import React from "react";
import { UglyContextConsumer } from "../UglyContext";

function DeleteButton() {
    return (
        <div className="delete-button" >
            <UglyContextConsumer>
                {context => (
                    <button onClick={context.handleDelete}>Delete</button>
                )}
            </UglyContextConsumer>
        </div>
    )
    
}

export default DeleteButton

