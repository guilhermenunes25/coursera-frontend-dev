import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppNav from './components/AppNav';
import AppHeader from './components/AppHeader';
import SpecialOffers from './components/SpecialOffers';
import AppFooter from './components/AppFooter';
import Testimonials from './components/Testimonials';
import AppAbout from './components/AppAbout';
import BookingLayout from './components/BookingLayout';

function App() {
  return (
    <Router>
      <div>
        <AppNav />
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/reservations" element={<BookingLayout />} />
        </Routes>
      </div>
    </Router>
  );
}

function MainContent() {
  return (
    <div>
      <AppHeader />
      <SpecialOffers />
      <Testimonials />
      <AppAbout />
      <AppFooter />
    </div>
  );
}

export default App;
