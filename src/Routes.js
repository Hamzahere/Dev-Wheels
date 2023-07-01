import React from 'react';
import { BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import About from './pages/About/About';
import Home from './pages/Home/Home';
import CarDetails from './pages/CarDetails/CarDetails';
import CarBooking from './pages/CarBooking/CarBooking';
import CarListing from './pages/CarListing/CarListing';
import Services from './pages/Service/Service';
import Login from './pages/UserLogin/UserLogin';
import UserSignUp from './pages/UserSignUp/UserSignUp';


const RoutesFunc = () => {
  return (
    
      <Routes>
        <Route exact path="/" element={<Home/>} />
        <Route exact path="/about" element={<About/>} />
        <Route exact path="/details" element={<CarDetails/>} />
        <Route exact path="/booking" element={<CarBooking/>} />
        <Route exact path="/listing" element={<CarListing/>} />
        <Route exact path="/services" element={<Services/>} />
        <Route exact path="/login" element={<Login/>} />
        <Route exact path="/signup" element={<UserSignUp/>} />
        {/* <Route component={NotFound} /> */}
      </Routes>
    
  );
};

export default RoutesFunc;
