import React from "react";
import User from "./User";
import UserClass from "./UserClass";
const About = () => {
    return(
        <div className="about">
           <h1 >ABout</h1>
           <h2>This is namaste react web series</h2>
           <User name={"Khushi (functional)"}/>
           <UserClass name={"Khushi (class)"} location={"Neemuch"}/>
        </div>
    );
};

export default About;