import React from "react";
import logo from "../assets/logo-2.png";
import '../styles/Navbar.css'
import InboxIcon from '@material-ui/icons/Inbox';
import MenuIcon from '@material-ui/icons/Menu';

function Navbar() {
  return (
    <nav className="navbar navbar-custom navbar-expand-lg " >
      <div class="container-fluid">
      <a className="navbar-brand" to="#">
        <img
        className="logo"
          src={logo}
          alt="airbnb"
          
        />
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        ria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
        
      >
        <span className="navbar-toggler-icon"><MenuIcon className="hamburger" /></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <i className="fa fa-search" id="search-icon"></i>
            <input
              className="form-control me-2"
              id="search"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
          <li className="nav-item ml-5">
            <a className="nav-link" aria-current="page" href="#">
              Help
            </a>
          </li>
          <li className="nav-item ml-5">
            <a className="nav-link" href="#">
              Account
            </a>
          </li>
          <li className="nav-item ml-5">
            <a className="nav-link mr-5" href="#">
            <InboxIcon />
            </a>
          </li>
        </ul>
      </div>
      </div>
    </nav>
  );
}

export default Navbar;
