import React from 'react';
import Logo from '../assets/Logo.svg';

export default function Nav () {
    return (
        <>
        <img src={require("../assets/Logo.svg").default} alt="Little Lemon Logo"/>
        <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About</a></li>
            <li><a href="/menu">Menu</a></li>
            <li><a href="/reservations">Reservations</a></li>
            <li><a href="/order-online">Order Online</a></li>
            <li><a href="/login">Login</a></li>
        </ul>
        </>
    )
}

