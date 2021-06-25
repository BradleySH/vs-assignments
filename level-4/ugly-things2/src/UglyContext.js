import React, {useState, useContext} from "react"
const UglyThingsContext = React.createContext()



function UglyThingsContextProvider(props) {

    const initUglyItem = {
        title: "",
        desc: "",
        imgUrl: ""
    }

    const [uglyThing, setUglyThing] = useState(initUglyItem)
    const [uglyThingsList, setUglyThingsList] = useState([])

    const handleChange = (e) => {
        const {name, value} = e.target
        setUglyThing(prevUglyThing => ({
            ...prevUglyThing,
            [name]: value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setUglyThingsList(prevList => ([
            {   title: uglyThing.title,
                imgUrl: uglyThing.imgUrl,
                desc: uglyThing.desc
            }, ...prevList
        ]))
        setUglyThing(initUglyItem)


    }

    return (
        <UglyThingsContext.Provider value={{
            uglyThing,
            handleChange,
            handleSubmit,
            uglyThingsList
        }}>
            {props.children}
        </UglyThingsContext.Provider>
    )




}
export {UglyThingsContextProvider, UglyThingsContext}