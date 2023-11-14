import React from 'react';
import '../styles/NavStyle.css' ;
import {Link} from 'react-router-dom';

export default function AppNav() {
  const handleReservationsClick = () => {
    // Open BookingPage in a new window
    window.open('/reservations', '_blank');
  };

  return (
    <nav className='navbar'>
      <img src={require("../assets/Logo.svg").default} alt="Little Lemon Logo" className="logo" />
      <ul className="nav-menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/menu">Menu</Link></li>
        <li onClick={handleReservationsClick}>Reservations</li>
        <li><Link to="/order-online">Order Online</Link></li>
        <li><Link to="/login">Login</Link></li>
      </ul>
    </nav>
  );
}

