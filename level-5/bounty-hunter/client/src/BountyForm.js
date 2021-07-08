import React, {useState} from "react"

export default function BountyForm(props) {
    const initInputs = { firstName: props.firstName || "", lastName: props.lastName || "", isLiving: props.isLiving || "", bounty: props.bounty || "", type: props.type ||  "" }
    const [inputs, setInputs] = useState(initInputs)

    function handleChange(e) {
        const { name, value } = e.target
        setInputs(prevInputs => ({...prevInputs, [name]: value}))
    }

    // posty request look for server endpoints
    function handleSubmit(e){
        e.preventDefault()
        //post request
        props.submit(inputs, props._id)
        setInputs(initInputs)
    }


    return (
        <form onSubmit={handleSubmit}>
            First Name:
            <input type="text" name="firstName" value={inputs.firstName} onChange={handleChange} placeholder="First Name" />
            Last Name:
            <input type="text" name="lastName" value={inputs.lastName} onChange={handleChange} placeholder="Last Name" />
            Bounty:
            <input type="number" name="bounty" value={inputs.bounty} onChange={handleChange} placeholder="Bounty" />
            Type:
            <input type="text" name="type" value={inputs.type} onChange={handleChange} placeholder="Type of Being" />
            <button className="formBtn">{props.btnText}</button>

        </form>
    )
}

