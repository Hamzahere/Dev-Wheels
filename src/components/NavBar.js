import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import styles from './components.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleUser, faAngleDown } from '@fortawesome/free-solid-svg-icons';
import { auth } from '../firebase/firebase'; // Import the app instance from firebase.js
import { setCurrentUser } from '../store/userReducer'; // Import the setCurrentUser action

const NavBar = () => {
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const [carDropdownOpen, setCarDropdownOpen] = useState(false);
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch(); // Get the dispatch function

  const toggleUserDropdown = () => {
    setUserDropdownOpen(!userDropdownOpen);
    setCarDropdownOpen(false); // Close the car dropdown
  };

  const toggleCarDropdown = () => {
    setCarDropdownOpen(!carDropdownOpen);
    setUserDropdownOpen(false); // Close the user dropdown
  };

  const handleLogout = async () => {
    try {
      await auth.signOut(); // Sign out the user using Firebase Auth
      dispatch(setCurrentUser(null)); // Set the current user to null in Redux store
      //history.push('/login'); // Redirect to the login page
    } catch (error) {
      console.log('Error logging out:', error);
    }
  };

  return (
    <div className="container-fluid position-relative nav-bar p-0">
      <div className="position-relative" style={{ zIndex: '9' }}>
        <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
          <NavLink to="/" className="navbar-brand">
            <h1 className="text-uppercase mb-1">Dev Wheels</h1>
          </NavLink>
          <button
            type="button"
            className="navbar-toggler"
            onClick={toggleCarDropdown}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-between px-3 ${
              carDropdownOpen ? 'show' : ''
            }`}
          >
            <div className="navbar-nav mx-auto py-0">
              <NavLink className="nav-item nav-link text-uppercase" to="/">
                Home
              </NavLink>
              <NavLink className="nav-item nav-link text-uppercase" to="/about">
                About
              </NavLink>

              ...

<div className={`nav-item dropdown ${carDropdownOpen ? 'show' : ''}`}>
  <div
    className="nav-link dropdown-toggle text-uppercase"
    role="button"
    onClick={toggleCarDropdown}
  >
    Cars
  </div>
  <div
    className={`dropdown-menu rounded-0 m-0 ${carDropdownOpen ? 'show' : ''}`}
  >
    <NavLink
      className="dropdown-item text-uppercase"
      to="/listing"
      onClick={toggleCarDropdown}
    >
      Car Listing
    </NavLink>
    {/* <NavLink
      className="dropdown-item text-uppercase"
      to="/details"
      onClick={toggleCarDropdown}
    >
      Car Detail
    </NavLink> */}
    {/* <NavLink
      className="dropdown-item text-uppercase"
      to="/carbooking"
      onClick={toggleCarDropdown}
    >
      Car Booking
    </NavLink> */}
  </div>
</div>

...


              <NavLink className="nav-item nav-link text-uppercase" to="/services">
                Services
              </NavLink>

              <NavLink className="nav-item nav-link text-uppercase" to="/contact">
                Contact
              </NavLink>
            </div>

            <div className="navbar-nav ml-auto py-0">
              {currentUser !== null ? ( // Check if currentUser is not null
                <div className="nav-item dropdown">
                  <div
                    className="nav-link dropdown-toggle"
                    role="button"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded={userDropdownOpen}
                    onClick={toggleUserDropdown}
                  >
                    <FontAwesomeIcon icon={faCircleUser} size="2x" />
                    <FontAwesomeIcon icon={faAngleDown} className="ml-1" />
                  </div>
                  <div
                    className={`dropdown-menu dropdown-menu-right ${
                      userDropdownOpen ? 'show' : ''
                    }`}
                  >
                    <div className="dropdown-item">Your Account</div>
                    <NavLink to="/bookings" className="dropdown-item">Your Bookings</NavLink>
                    <div className="dropdown-divider"></div>
                    <div className="dropdown-item" onClick={handleLogout}>
                      Logout
                    </div>
                  </div>
                </div>
              ) : (
                <NavLink className="nav-item nav-link text-uppercase" to="/login">
                  Login
                </NavLink>
              )}
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
