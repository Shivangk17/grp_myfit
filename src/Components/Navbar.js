import React from 'react';

import '../style1.css';
export default function Navbar() {
    return (
        <div>
            <header className="header">
                <a href="/" className="logo"><span>MY</span>FIT</a>

                <div id="menu-btn" className="fas fa-bars"> </div>
                <nav className="navbar1">
                    <a href="/">Home</a>
                    <a href="/">About</a>
                    <a href="/" target="_self">Directory</a>
                    <a href="/">Diet</a>
                </nav>

            </header>
        </div>
    )
}
