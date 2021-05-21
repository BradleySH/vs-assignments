import React from "react"

function Conditional(props){
   if(props.isLoading === true){
       return (
           <h1>Loading...</h1>
       )
   } else {
       return (
           <h1>Some Cool stuff</h1>
       )
   }
    
}

export default Conditional


// turnary 
// condition ? statement if true : statement if false 
// props.isloading === true ? <h1>Loading...</h1> : <h1>Some Cool Stuff</h1>