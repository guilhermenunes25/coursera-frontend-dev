import React from 'react';
import BookingPage from './BookingPage';
import AppFooter from './AppFooter'; 
import '../styles/FooterStyle.css';

function BookingLayout() {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <div style={{ flex: 1 }}>
        <BookingPage />
      </div>
      <AppFooter />
    </div>
  );
}

export default BookingLayout;