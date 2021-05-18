import React from 'react';
import NavBar from "./headerComponent/NavBar"

function Header() {
    return (
        <div>{NavBar}</div>,
        <div className="header">
            <h1>Clean Blog</h1>
        
            <h4>A Blog Theme by Start Bootstrap</h4>
        </div>
    )
}

export default Header