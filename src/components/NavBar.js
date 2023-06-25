import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [serviceDropdownOpen, setServiceDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };

  const serviceToggle = () => {
    setServiceDropdownOpen(!serviceDropdownOpen);
  }

  return (
    <div className="container-fluid position-relative nav-bar p-0">
      <div className="position-relative px-lg-5" style={{ zIndex: "9" }}>
        <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-3 py-lg-0 pl-3 pl-lg-5">
          <NavLink to="/" className="navbar-brand">
            <h1 className="text-uppercase text-primary mb-1">Dev Wheels</h1>
          </NavLink>
          <button
            type="button"
            className="navbar-toggler"
            onClick={toggleDropdown}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className={`collapse navbar-collapse justify-content-between px-3 ${
              dropdownOpen ? "show" : ""
            }`}
          >
            <div className="navbar-nav ml-auto py-0">
              <NavLink exact activeClassName="active" className="nav-item nav-link" to="/">Home</NavLink>
              <NavLink exact activeClassName="active" className="nav-item nav-link" to="/about">About</NavLink>

              <div className={`nav-item dropdown ${dropdownOpen ? "show" : ""}`}>
                <NavLink
                  to="/listing"
                  className="nav-link dropdown-toggle"
                  onClick={toggleDropdown}
                >
                  Cars
                </NavLink>
                <div
                  className={`dropdown-menu rounded-0 m-0 ${
                    dropdownOpen ? "show" : ""
                  }`}
                >
                  <NavLink
                    exact
                    activeClassName="active"
                    to="/listing"
                    className="dropdown-item"
                    onClick={toggleDropdown}
                  >
                    Car Listing
                  </NavLink>
                  <NavLink
                    exact
                    activeClassName="active"
                    to="/details"
                    className="dropdown-item"
                    onClick={toggleDropdown}
                  >
                    Car Detail
                  </NavLink>
                  <NavLink
                    exact
                    activeClassName="active"
                    to="/booking"
                    className="dropdown-item"
                    onClick={toggleDropdown}
                  >
                    Car Booking
                  </NavLink>
                </div>
              </div>

              <NavLink exact activeClassName="active" className="nav-item nav-link" to="/services">Services</NavLink>
              
              <NavLink exact activeClassName="active" className="nav-item nav-link" to="/contact">Contact</NavLink>

              <NavLink exact activeClassName="active" className="nav-item nav-link" to="/login">Login</NavLink>
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavBar;
