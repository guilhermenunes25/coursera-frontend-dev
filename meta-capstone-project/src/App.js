import './App.css';
import AppNav from './components/AppNav';
import AppHeader from './components/AppHeader';
import SpecialOffers from './components/SpecialOffers';
import AppFooter from './components/AppFooter';
import Testimonials from './components/Testimonials';

function App() {
  return (
    <>  
    <AppNav />
    <AppHeader />
    <SpecialOffers />
    <Testimonials />
    <AppFooter />
    </>
  );
}

export default App;
