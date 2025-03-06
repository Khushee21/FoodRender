import React, { useEffect } from "react";
import { useState } from "react";

const User=({name})=>{

    const [count ]=useState(0);
// useEffect(()=>{
//     setInterval(()=>{
//         // console.log("NAMASTE REACT OP");
//     },1000)
// },[])


    return(

        <div className="user-card">
            <h1>Count = {count}</h1>
            <h2>Nmae: {name}</h2>
            <h3>Location: Neemuch</h3>
            <h4>Contact: @khushi</h4>
        </div>
    );
};

export default User;

//function user