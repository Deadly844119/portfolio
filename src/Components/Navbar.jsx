import React from "react";
import { Outlet, Link } from "react-router-dom";
import "./Navbar.css";
import { useState } from "react";
import {FaMoon} from 'react-icons/fa'

export default function Navbar(props) {
  const [showMenu, setMenu] = useState(false);
  return (
    <>
      <div className="container-fluid">
        <div className="nav-container container">
          <div className="n-left">
            <div className="logo">
              <h1>Deadly</h1>
            </div>
            <div className="theme-toggle" onClick={props.toggleMode} >
              <FaMoon size={25} className="toggle-icon" id="togglerButton" />
            </div>
          </div>
          <div className={`n-right ${showMenu === true ? "show" : "hide"}`}>
            <div className="close" onClick={() => setMenu(false)}>
              <div></div>
              <div></div>
            </div>
            <li>
              <Link to="/">HOME</Link>
            </li>
            <li>
              <Link to="/projects">PROJECTS</Link>
            </li>
            <li>
              <Link to="/about">ABOUT</Link>
            </li>
            <li>
              <Link to="/contact">CONTACT</Link>
            </li>
          </div>
          <div className="hamburger" onClick={() => setMenu(true)}>
            <div></div>
            <div></div>
            <div></div>
          </div>
        </div>
      </div>
      <Outlet/>
    </>
  );
}
