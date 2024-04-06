import React from 'react';

function Nav() {
    return (
        <nav>
            <img src="/images/little-lemon-logo.png" width="200"  alt="Little Lemon Nav Logo"/>
            <ul className='nav-list'>
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
