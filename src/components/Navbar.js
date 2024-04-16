import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import the Link component from React Router

export default function Navbar (props) {
  return (
    <div>
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        {/* Use the Link component for navigation */}
        <h1 className="navbar-brand display-1 mt-2 ml-2" to="/">{ props.title}</h1>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className=" nav-link mx-2 mt-2" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className=" nav-link mx-2 mt-2" to="/Goals">Goal Manager</Link>
            </li>
            <li className="nav-item">
              <Link className=" nav-link mx-2 mt-2" to="/Expense">Cash Corner</Link>
            </li>
            <li className="nav-item">
              <Link className=" nav-link mx-2 mt-2" to="/BorrowList">Returns</Link>
            </li>
            <li className="nav-item">
              <Link className=" nav-link mx-2 mt-2" to="/News">News Corner</Link>
            </li>
            <li className="nav-item">
              <Link className=" nav-link mx-2 mt-2 mt-2" to="/Information">Knowledge hub</Link>
            </li>
            <li className="nav-item">
              <Link className=" nav-link mx-2 mt-2 mt-2" to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </div>
  )
}

