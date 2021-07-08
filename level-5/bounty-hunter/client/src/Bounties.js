import React, {useState} from "react"
import "./App.css"
import BountyForm from "./BountyForm"


export default function Bounties(props) {
    const {firstName, lastName, isLiving, bounty, type, _id} = props
    const [editToggle, setEditToggle] = useState(false)
    //console.log(props);

    return (
        
         <div className="bounty">
            { !editToggle ?
            <>
             <h3>{firstName}</h3>
             <h3>{lastName}</h3>
             <p>{isLiving}</p>
             <h4>Bounty: ${bounty}</h4>
             <p>{type}</p>
             <button className="deleteBtn" onClick={() => props.deleteBounty(_id)}>Delete</button>
             <button className="editBtn" onClick={() => setEditToggle(prevToggle => !prevToggle)}>Edit Bounty</button>
             </>
            :
            <>
             <BountyForm
                firstName={firstName}
                lastName={lastName}
                bounty={bounty}
                type={type}
                _id={_id}
                btnText="Update Bounty" 
                submit={props.editBounty}
             />
             <button onClick={() => setEditToggle(prevToggle => !prevToggle)}>Close</button>
             </>
             }
         </div>

    )
}