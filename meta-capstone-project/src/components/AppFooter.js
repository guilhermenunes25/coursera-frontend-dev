import React from 'react';
import Footer from '../styles/Footer.css'


export default function AppFooter() {
    return (
<footer className="footer">
    <div className="footer-column nav-column">
        <h4>Doormat Navigation</h4>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
    </div>
    <div className="footer-column contact-column">
        <address>
            <h4>Contact</h4>
            123 Main St <br />
            City, State ZIP<br />
            Phone: (123) 456-7890<br />
            Email: contact@example.com
        </address>
    </div>
    <div className="footer-column social media-column">
        <h4>Social Media Links</h4>
        <ul>
            <li><a href="#">Facebook</a></li>
            <li><a href="#">Twitter</a></li>
            <li><a href="#">Instagram</a></li>
        </ul>
    </div>
</footer>
    );
};
