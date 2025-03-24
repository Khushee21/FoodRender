import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";
import { FiShoppingCart, FiUser, FiHome, FiInfo, FiPhone, FiShoppingBag, FiWifi, FiWifiOff } from "react-icons/fi";
import { HiOutlineLogin, HiOutlineLogout } from "react-icons/hi";

const Header = () => {
    const [btnNameReact, setBtnName] = useState("Login");
    const onlineStatus = useOnlineStatus();
    const { loggedInUser } = useContext(UserContext);
    const cartItem = useSelector((store) => store.cart.items);

    const toggleLogin = () => {
        setBtnName(btnNameReact === "Login" ? "Logout" : "Login");
    };

    return (
        <header className="header-container">
            <div className="header-content">
                {/* Logo Section */}
                <div className="logo-section">
                    <Link to="/" className="logo-link">
                        <img 
                            className="logo" 
                            src="https://i.pinimg.com/236x/55/ab/14/55ab1492fdaea7fd22464412f2c51f0c.jpg" 
                            alt="FoodRender Logo" 
                        />
                        <span className="brand-name">FoodRender</span>
                    </Link>
                </div>

                {/* Navigation Section */}
                <nav className="nav-section">
                    <ul className="nav-list">
                        <li className="nav-item status">
                            {onlineStatus ? (
                                <FiWifi className="online-icon" title="Online" />
                            ) : (
                                <FiWifiOff className="offline-icon" title="Offline" />
                            )}
                        </li>
                        <li className="nav-item">
                            <Link to="/" className="nav-link">
                                <FiHome className="nav-icon" />
                                <span>Home</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/about" className="nav-link">
                                <FiInfo className="nav-icon" />
                                <span>About</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/contact" className="nav-link">
                                <FiPhone className="nav-icon" />
                                <span>Contact</span>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/grocery" className="nav-link">
                                <FiShoppingBag className="nav-icon" />
                                <span>Grocery</span>
                            </Link>
                        </li>
                        <li className="nav-item cart">
                            <Link to="/cart" className="nav-link cart-link">
                                <FiShoppingCart className="cart-icon" />
                                <span className="cart-count">{cartItem.length}</span>
                                <span className="cart-text">Cart</span>
                            </Link>
                        </li>
                        <li className="nav-item user">
                            <div className="user-info">
                                <FiUser className="user-icon" />
                                <span className="username">{loggedInUser || 'Guest'}</span>
                            </div>
                        </li>
                        <li className="nav-item">
                            <button 
                                className="login-btn"
                                onClick={toggleLogin}
                            >
                                {btnNameReact === "Login" ? (
                                    <HiOutlineLogin className="login-icon" />
                                ) : (
                                    <HiOutlineLogout className="logout-icon" />
                                )}
                                <span>{btnNameReact}</span>
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;