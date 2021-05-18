import React from 'react';
import BlogPost from "./blogListComponent/BlogPost"
import NavBar from './headerComponent/NavBar';
import Header from "./Header"
import Footer from "./Footer"
// import blogData from "./blogData"
import ReactDOM from "react-dom"

function BlogList(){
    return (
        <div className="blog">
            <NavBar />
            <Header />
            <BlogPost />
            <Footer />

        </div>
    )

}
ReactDOM.render(<BlogList />, document.getElementById("root"))

export default BlogList