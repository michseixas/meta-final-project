import React from 'react';

function Footer() {
    return (
        <footer>

            <img src="/images/littlelemon-vertical-green-logo.png" width="100px" alt="Little Lemon Nav Logo"/>
            <div>
            <h4>Doormat Navigation</h4>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">Reservation</a></li>
                    <li><a href="/">Order Online</a></li>
                    <li><a href="/">Login</a></li>
                </ul>
            </div>
            <div>
            <h4>Contact</h4>
                <ul>
                    <li><a href="/">Adress</a></li>
                    <li><a href="/">Phone number</a></li>
                    <li><a href="/">Email</a></li>
                </ul>
            </div>
            <div>
            <h4>Social Media</h4>
                <ul>
                    <li><a href="/">Facebook</a></li>
                    <li><a href="/">Instagram</a></li>
                    <li><a href="/">Twitter</a></li>
                    <li><a href="/">Youtube</a></li>
                </ul>
            </div>
        </footer>
    );
}

export default Footer;
