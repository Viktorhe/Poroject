import React from 'react';
import { Link } from "react-router-dom";

const NavBar = ({appName, link1, link2, link3, link4, link5}) =>{
    return (
      <div className="navbar">
        <nav className="appName">
            {/* <button className="transButton" onClick={() => window.location.reload()}><b>{appName}</b></button> */}
            <Link className="transButton" to="/">{appName}</Link>
        </nav>
        <nav className="link">
            <button className="transButton" onClick={() => alert(link1)}>{link1}</button>
            {/* <Link className="transButton" to="/about">{link1}</Link> */}
        </nav>
        <nav className="link">
            {/* <button className="transButton" onClick={() => alert(link2)}>{link2}</button> */}
            <Link className="transButton" to="/explore">{link2}</Link>
        </nav>
        <nav className="link">
            <Link className="transButton" to="/member">{link3}</Link>
        </nav>
        <nav className="link">
            <Link className="transButton" to="/about">{link4}</Link>
        </nav>
        <nav className="link">
            &nbsp;
        </nav>
        <nav className="link">
            &nbsp;
        </nav>
        <nav className="link">
            &nbsp;
        </nav>
        <nav className="link">
            &nbsp;
        </nav>
        <nav className="link">
            &nbsp;
        </nav>
        <nav className="link">
            &nbsp;
        </nav>
        <nav className="link">
            &nbsp;
        </nav>
        <nav className="link">
            &nbsp;
        </nav>
        <nav className="link">
            &nbsp;
        </nav>
        <nav className="link">
            &nbsp;
        </nav>
        <nav className="link">
            &nbsp;
        </nav>
        <nav className="link">
            <button className="transButton" onClick={() => alert(link5)}>{link5}</button>
        </nav>
      </div>
    );
}

export default NavBar;
