import React, {useContext} from "react"
import {UglyThingsContext} from "./UglyContext"
import UglyThing from "./UglyThing"


function UglyThingsList() {
    const context = useContext(UglyThingsContext)
    const list = context.uglyThingsList.map((item, index) => <UglyThing key={index} item={item}/>)
    return (
        <div>
            {list}

        </div>
    )
}
export default UglyThingsList