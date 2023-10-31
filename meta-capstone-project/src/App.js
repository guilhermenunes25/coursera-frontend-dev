import './App.css';
import AppNav from './components/AppNav';
import AppHeader from './components/AppHeader';
import SpecialOffers from './components/SpecialOffers';
import AppFooter from './components/AppFooter';
import Testimonials from './components/Testimonials';
import AppAbout from './components/AppAbout';
import BookingPage from './components/BookingPage'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
    <>  
    <AppNav />
    <Switch>
      <Route path="/reservations" component={BookingPage} />
    </Switch>
    <AppHeader />
    <SpecialOffers />
    <Testimonials />
    <AppAbout />
    <AppFooter />
    </>
  );
}

export default App;
