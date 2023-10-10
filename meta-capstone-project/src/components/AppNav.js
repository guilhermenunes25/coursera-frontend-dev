import React from 'react';
import '../styles/NavStyle.css' 

export default function AppNav () {
    return (
        <nav className='navbar'>
        <img src={require("../assets/Logo.svg").default} alt="Little Lemon Logo" className="logo"/>
        <ul className="nav-menu">
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
        </nav>
    )
}

