import React, {useContext} from "react"
import {UglyThingsContext} from "./UglyContext"

function Form() {
    const uglyThingsContext = useContext(UglyThingsContext)
    console.log(uglyThingsContext);
    return (
        <div>
            <h1>Ugly Things</h1>
            
            <form onSubmit={uglyThingsContext.handleSubmit}>
                <input 
                    name="title"
                    type="text"
                    value={uglyThingsContext.title}
                    onChange={uglyThingsContext.handlChange}
                    placeholder="Title"
                />
                <input 
                    name="imgUrl"
                    type="imgUrl"
                    value={uglyThingsContext.imgUrl}
                    onChange={uglyThingsContext.handlChange}
                    placeholder="Image"
                    
                />
                <input
                    name="desc"
                    type="text"
                    value={uglyThingsContext.desc}
                    onChange={uglyThingsContext.handlChange}
                    placeholder="Description"
                />
                
                <button>Submit</button>
                </form>
                                
                            
        </div>
        
    )
    
}


export default Form