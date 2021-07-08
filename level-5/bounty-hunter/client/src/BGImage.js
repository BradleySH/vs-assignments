import React from 'react';
import "./App.css"


export default function BGImage(){
    return (
        <>
            <video className="video-background" autoPlay loop muted>
                <source src={process.env.PUBLIC_URL + "/video/bounty-video.mp4"} type="video/mp4" />
            </video>
        </>
    )
}