import React from "react";
import {Link} from "react-router-dom";
import "./App.css";
const Navbar=()=>{
    return(
       <header>
         <h1>DESTINATION</h1>
         <nav>
        <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/service">Service</Link></li>
            <li><Link to="/contact">spots</Link></li>
            </nav>
        </header>

    );
};
export default Navbar;