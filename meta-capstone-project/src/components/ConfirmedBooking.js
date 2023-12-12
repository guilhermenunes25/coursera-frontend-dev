import React from 'react';
import { Link } from 'react-router-dom';
import AppFooter from './AppFooter'; 
import '../styles/ConfirmedBookingStyling.css';
export default function ConfirmedBooking() {

  return (
    <div>
      <h2 className='confirmed-header'>Booking Confirmed!</h2>
      <p className='confirmed-description'>Your booking has been successfully confirmed. Thank you!</p>
      <Link to="/" className='return-button'>Return</Link>
    </div>
  );
}
