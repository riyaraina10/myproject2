import React from "react";
import "./Header.css";

function Header() {
    return (
        <header className="header">
            <div className="logo">My Portfolio</div>
            <nav className="nav">
                <ul className="nav-list">
                    <li className="nav-item">About</li>
                    <li className="nav-item">Projects</li>
                    <li className="nav-item">Skills</li>
                    <li className="nav-item">Contact</li>
                </ul>
            </nav>
        </header>
    );
}

export default Header;
