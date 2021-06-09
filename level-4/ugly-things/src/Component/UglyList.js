import React from "react"
import UglyThing from "./UglyThing"
import {UglyContextConsumer} from "../UglyContext"

function UglyList(props) {
    return (
        <div className="posts">

        <UglyContextConsumer>
            {
                ({imgArr}) => {
                    const list = imgArr.map((item, index) => <UglyThing key={index}item={item} />)
                    return list

                }
            }
        </UglyContextConsumer>
        
        </div>
    )
}
export default UglyList