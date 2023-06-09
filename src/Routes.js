import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import CarDetails from './pages/CarDetails';
import CarBooking from './pages/CarBooking';
import CarListing from './pages/CarListing';
import Services from './pages/Service';

const RoutesFunc = () => {
  return (
    
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/details" element={<CarDetails/>} />
        <Route exact path="/booking" element={<CarBooking/>} />
        <Route exact path="/listing" element={<CarListing/>} />
        <Route exact path="/services" element={<Services/>} />
        {/* <Route component={NotFound} /> */}
      </Routes>
    
  );
};

export default RoutesFunc;
