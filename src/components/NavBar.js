import React from 'react';
import './NavBar.css';

function NavBar() {
    return (
        <div className="header">
            <h1 class="logo">Pantry</h1>
            <input type="checkbox" id="nav-toggle" class="nav-toggle" />
            <nav>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">Account</a></li>
                    <li><a href="#">Settings</a></li>
                    <li><a href="#">Search</a></li>
                    <li><input type="text"></input></li>
                </ul>
            </nav>
            <label for="nav-toggle" class="nav-toggle-label">
                <span></span>
            </label>
        </div>


    )
}

export default NavBar;