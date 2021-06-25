import React from 'react'
// import DeleteButton from '../ButtonComponent/DeleteButton'
// import EditButton from "../ButtonComponent/EditButton"
import {UglyContextConsumer} from "../UglyContext"

function UglyThing(props){
    //const [editForm, setEditForm] = {title: "", imgUrl: "", description: ""}
    console.log(props.item.isEditing)
    return (
        props.item.isEditing === true ?
        <div>
            <UglyContextConsumer>
        {context =>  {
          return (
          <form onSubmit={(e) => context.submitEdit(e, props.item._id, {title: context.editTitle, imgUrl: context.editImgUrl, description: context.editDescription})}>
            <div className="inputs">
            <input 
                type="text"
                name="editTitle"
                placeholder="Title"
                value={context.editTitle}
                onChange={context.handleChange}
              />
            <input 
                type="imgUrl"
                name="editImgUrl"
                placeholder="Image"
                value={context.editImgUrl}
                onChange={context.handleChange}
              />
            <input 
                type="text"
                name="editDescription"
                placeholder="Description"
                value={context.editDescription}
                onChange={context.handleChange}
              />
        </div>
        <div className="btn">
            <button type="submit">Update Edit</button>
        </div>  
          </form>)}}
    </UglyContextConsumer>
        </div>
        :
        <div>
            <h3 className="image-title" >{props.item.title}</h3>
            <img src={props.item.imgUrl} className="image"/>
            <p className="desc" >Description: {props.item.description}</p>
            {/* <DeleteButton />
            <EditButton /> */}
            <UglyContextConsumer>
                {context => (
                    <div>
                        <button onClick={() => context.handleDelete(props.item._id)}>Delete</button>
                        <button onClick={() => context.takeToEdit(props.item._id)}>Edit</button>
                    </div>
                    
                )}
            </UglyContextConsumer>
            

        </div>
    )
}

export default UglyThing