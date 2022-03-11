import React, { useState } from 'react';

import { Link,NavLink } from "react-router-dom";
import logo from '../images/logo.svg'
import { FaAlignRight } from "react-icons/fa";

export default function Navbar() {
const [isOpen, setIsOpen] = useState(false);

	return (
	<nav className="navbar">
		<div className="nav-center">
			<div className="nav-header">
			<Link to="/"><img src={logo} alt="logo"/></Link>
			<button className="nav-btn" onClick={() => setIsOpen(value => !value)} >
               <FaAlignRight className="nav-icon"/> 
             </button>             
			</div>
			<ul className={`nav-links ${isOpen ? "show-nav" : ""}`}>
				<li><NavLink to="/" className={({ isActive }) => (isActive ? 'active-nav' : '')} >Home</NavLink></li>
				<li><NavLink to="/rooms/" className={({ isActive }) => (isActive ? 'active-nav' : '')}>Rooms</NavLink></li>
			</ul>
		</div>
	</nav>
	)
}


 