import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Group1 from '../../images/Group1.jpg';
import JoinUsButton from '../joinUsButton/joinUsButton';
import Box from '../box/box';
import './navigation.css';

const Navigation = () => {
  const userData = useSelector(state => state.userData);
  const loggedInUser = userData.find(user => user.isLoggedIn);
  const role = loggedInUser?.role;
  const isLoggedIn = !!loggedInUser;

  return (
    <div className='nav-container w-100'>
      <nav className="nav navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">
            <img src={Group1} alt="Logo" />
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {isLoggedIn && (
                <>
                  <li className="nav-item">
                    <Link to='/' className="nav-link">Home</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/pages/aboutUs/aboutUs' className="nav-link">About us</Link>
                  </li>
                  <li className="nav-item">
                    <Link to='/pages/blog/Blog' className="nav-link">Blog</Link>
                  </li>
                </>
              )}
            </ul>
            <ul className="navbar-nav ml-auto">
              {!isLoggedIn && (
                <>
                  <li className="nav-item">
                    <Link to='/login' className="nav-link join-button">Sign in</Link>
                  </li>
                  <li className="nav-item">
                    <JoinUsButton />
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        {isLoggedIn && (
        <div className="mini-profile-wrapper d-flex justify-content-end align-items-center">
          <Box isLoggedIn={isLoggedIn} role={role} />
        </div>
      )}
      </nav>
      
    </div>
  );
}

export default Navigation;
