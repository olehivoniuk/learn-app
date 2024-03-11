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
    <div className='nav-container '>
      <nav className="nav navbar navbar-expand-lg ">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">
            <img src={Group1} alt="Logo" />
          </Link>
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
            
          </div>
        </div>
        {isLoggedIn 
        ? (
        <div className="mini-profile-wrapper d-flex justify-content-end align-items-center">
          <Box isLoggedIn={isLoggedIn} role={role} />
        </div>
        ) : 
        <ul className="navbar-nav d-flex justify-content-end align-items-center">
                <>
                  <li className="nav-item">
                    <Link to='/login' className="nav-link join-button">Sign in</Link>
                  </li>
                  <li className="nav-item navigation-join-us-button">
                    <JoinUsButton />
                  </li>
                </>
            </ul>
      }
      </nav>
      
    </div>
  );
}

export default Navigation;
