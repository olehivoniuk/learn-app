import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Group1 from '../../images/Group1.jpg';
import JoinUsButton from '../joinUsButton/joinUsButton'; // Import JoinUsButton component
import Box from '../box/box';
import './navigation.css';

const Navigation = () => {
  const userData = useSelector(state => state.userData);
  const loggedInUser = userData.find(user => user.isLoggedIn);
  const role = loggedInUser?.role; // Access role directly from the loggedInUser
  const isLoggedIn = !!loggedInUser; // Check if any user is logged in

  return (
    <div className='nav-container'>
      <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">
            <img src={Group1} alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
            <ul className="navbar-nav">
              {isLoggedIn && (
                <React.Fragment>
                  <li className="nav-item">
                    <Link to='/' className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/pages/aboutUs/aboutUs' className="nav-link">About us</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/pages/blog/Blog' className="nav-link">Blog</Link>
                  </li>
                </React.Fragment>
              )}
              {!isLoggedIn && (
                <React.Fragment>
                  <li className="nav-item">
                    <Link to='/login' className="nav-link join-button">Sign in</Link>
                  </li>
                  <li className="nav-item">
                    <JoinUsButton /> {/* Use JoinUsButton component */}
                  </li>
                </React.Fragment>
              )}
            </ul>
          </div>
        </div>
      </nav>
      {isLoggedIn && (
        <div className="mini-profile-wrapper d-flex justify-content-end align-items-center">
          <Box isLoggedIn={isLoggedIn} role={role} />
        </div>
      )}
    </div>
  );
}

export default Navigation;
