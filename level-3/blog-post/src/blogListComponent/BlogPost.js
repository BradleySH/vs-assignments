import React from "react"
//import ReactDom from "react-dom"
import blogData from "../blogData"
//import BlogList from "../BlogList"


function BlogPost() {
    const postBlog = blogData.map(post => <div className="post-container">
         <h1><span className="title">{post.title}<br></br></span>{post.subTitle}</h1>
         <br></br>
         <p>Posted by <span className="author">{post.author}</span> on {post.date}</p>
         
    
     </div>)
    //console.log();
    return (
          <div>{postBlog}</div>
    //       <div className="button">
    //      <button className="btn" type="button">Older Posts</button>
    //  </div>
        // <div className="post-container">
        //     <h1><span className="title">{props.title}</span>{props.subTitle}</h1>
        //     <p>Posted by <span className="author">{props.author}</span> on {props.date}</p>
        
        // </div>
        
        
        
    )
   
}


export default BlogPost