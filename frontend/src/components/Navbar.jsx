import React from "react";
import { useNavigate } from "react-router-dom";
import "./index.css";

const Navbar = () => {
    const navigate = useNavigate();  // Hook for navigation

    return (
        <div className="navbar">
            <div className="navContainer">
                <div className="logoContainer">
                    <img src="/img/logo/SkyLynx_icon.jpg" alt="SkyLynx" className="logo" />
                    <h2 className="logoText">SkyLynx</h2>
                </div>
                <div className="navButtons">
                    <button 
                        className="navButton" 
                        onClick={() => navigate("/signup")}
                    >
                        Register
                    </button>
                    <button 
                        className="navButton" 
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
