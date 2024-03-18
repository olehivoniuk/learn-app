import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import Group1 from '../../images/Group1.jpg';
import JoinUsButton from '../joinUsButton/joinUsButton';
import Box from '../box/box';
import './navigation.css';

const Navigation = () => {
  const [isSignInClicked, setIsSignInClicked] = useState(false);

  const userData = useSelector(state => state.userData);
  const loggedInUser = userData.find(user => user.isLoggedIn);
  const role = loggedInUser?.role;
  const isLoggedIn = !!loggedInUser;

  const handleSignInClick = () => {
    setIsSignInClicked(true);
  };

  return (
    <div className='nav-container '>
      <nav className="nav navbar navbar-expand-lg">
        <div className="container-fluid">
          <Link to='/' className="navbar-brand">
            <img src={Group1} alt="Logo" />
          </Link>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              {!isSignInClicked && (
                <>
                  <li className="nav-item">
                  <Link to='/pages/aboutUs/aboutUs' className="nav-link" style={{ whiteSpace: 'nowrap' }}>About us</Link>

                  </li>
                  <li className="nav-item">
                    <Link to='/pages/blog/Blog' className="nav-link">Blog</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
        {isLoggedIn && (
          
          <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mr-auto list-logged-in-links"> 
            <li className="nav-item">
              <Link to='/pages/aboutUs/aboutUs' className="nav-link" style={{ whiteSpace: 'nowrap' }}>About us</Link>
            </li>
            <li className="nav-item">
              <Link to='/pages/blog/Blog' className="nav-link">Blog</Link>
            </li>
          </ul>
        
          <div className="mini-profile-wrapper d-flex justify-content-end w-100"> 
            <Box isLoggedIn={isLoggedIn} role={role} />
          </div>
        </div>
        )}
        {!isSignInClicked && !isLoggedIn && (
          <ul className="navbar-nav d-flex justify-content-end w-100">
            <li className="nav-item">
              <Link to='/login' className="nav-link join-button" style={{ marginRight: '10px', marginBottom: "5px" }} onClick={handleSignInClick}>Sign in</Link>
            </li>
            <li className="nav-item navigation-join-us-button ml-2" style={{ marginRight: '10px', marginTop: "8px" }}>
              <JoinUsButton />
            </li>
          </ul>
        )}
      </nav>
    </div>
  );
}

export default Navigation;
