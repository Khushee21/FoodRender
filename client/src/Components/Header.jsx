import React from "react";
import ReactDOM from "react-dom/client";
import { useState , useEffect } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useContext } from "react";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";


const Header = () => {
    const [btnNameReact , setBtnName ]=useState("Login");

    const onlineStatus= useOnlineStatus();

    const {loggedInUser} =useContext(UserContext);
    // console.log(data);

    // subscribing to store using Selector
     
    const cartItem = useSelector((store) => store.cart.items);


    return (
        <div className="header">
            <div className="logo-container">
                {/* Reference the image using the correct path */}
                <img className="logo" src="https://i.pinimg.com/736x/26/30/d7/2630d7c4e12d206645cbd7b4e6ef7254.jpg" alt="Tasty Trails Logo" />
            </div>
            <div className="nav-items">
                <ul>
                    <li>
                        Online Statu:{onlineStatus ? "✅" : "❌"}
                    </li>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">
                        About Us</Link></li>
                    <li>
                        <Link to="/contact">Contact Us</Link>
                    </li>
                    <li>
                        <Link to="/grocery">Grocery</Link>
                    </li>
                    <li >
                        <Link to="/cart">Cart : ({cartItem.length} items)</Link>
                    </li>
                    <button 
                    className="login"
                    onClick={()=>{
                        btnNameReact=== "Login" ? setBtnName("Logout") : setBtnName("Login");
                    }} 
                    >
                      {btnNameReact}
                    </button>
                    <li className="nav-items">{loggedInUser}</li>
                </ul>
            </div>
        </div>
    );
};

export default Header;
