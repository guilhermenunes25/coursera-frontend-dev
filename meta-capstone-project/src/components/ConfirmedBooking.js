import React from 'react';
import { Link } from 'react-router-dom';

export default function ConfirmedBooking() {

  return (
    <div>
      <h2>Booking Confirmed!</h2>
      <p>Your booking has been successfully confirmed. Thank you!</p>
      <Link to="/">Return</Link>
    </div>
  );
}
