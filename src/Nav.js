import React from 'react';

function Nav() {
    return (
        <nav>
        This is the navbar
            <img src="/images/little-lemon-logo.png" alt="Little Lemon Nav Logo"/>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/">About</a></li>
                <li><a href="/">Menu</a></li>
                <li><a href="/">Reservation</a></li>
                <li><a href="/">Order Online</a></li>
                <li><a href="/">Login</a></li>
            </ul>
        </nav>
    );
}

export default Nav;
