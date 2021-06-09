import React from "react"
import {UglyContextConsumer} from "../UglyContext"

function Form() {
    return (
      <div className="ugly-form">
        <h1 className="header" >Ugly Things</h1>
        <UglyContextConsumer>
        {context =>  {
          return (
          <form onSubmit={context.handleSubmit}>
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
    )
 }

 export default Form
