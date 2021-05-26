
import React from 'react';


const HitList = (props) => {
    console.log(props);
    return ( 
        <div className="cards">
            <img src={`${props.image}`} />
            <button className="btn">{props.name}</button>
        </div>

     );
}
 
export default HitList;