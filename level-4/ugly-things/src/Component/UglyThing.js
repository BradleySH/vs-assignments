import React from 'react'
import DeleteButton from '../ButtonComponent/DeleteButton'
import EditButton from "../ButtonComponent/EditButton"
import {UglyContextConsumer} from "../UglyContext"

function UglyThing(props){
    const isEditing = false
    return (
        isEditing === true ?
        <div>
            <UglyContextConsumer>
        {context =>  {
          return (
          <form onSubmit={context.handleEdit}>
            <div className="inputs">
            <input 
                type="text"
                name="title"
                placeholder="Title"
                value={context.title}
                onChange={context.handleChange}
              />
            <input 
                type="imgUrl"
                name="imgUrl"
                placeholder="Image"
                value={context.imgUrl}
                onChange={context.handleChange}
              />
            <input 
                type="text"
                name="description"
                placeholder="Description"
                value={context.description}
                onChange={context.handleChange}
              />
        </div>
        <div className="btn">
            <button type="submit">Submit</button>
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
                        <button onClick={() => context.handleEdit(props.item._id)} value={{isEditing: true}}>Edit</button>
                    </div>
                    
                )}
            </UglyContextConsumer>
            

        </div>
    )
}

export default UglyThing