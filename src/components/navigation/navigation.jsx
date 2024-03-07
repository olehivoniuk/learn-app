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
  const role = userData.find(user => user.role); // Find the logged-in user
  const isLoggedIn = !!loggedInUser; // Check if any user is logged in

  return (
    <div className='nav-container'>
      <nav className="nav">
        <div>
          <img src={Group1} alt="Logo" />
        </div>
        <div>
          <Link to='/'>Home</Link>
        </div>
        <div>
          <Link to='/pages/aboutUs/aboutUs'>About us</Link>
        </div>
        <div>
          <Link to='/pages/blog/Blog'>Blog</Link>
        </div>
        <div>
          <Link to='/login' className="nav-link join-button">Sign in</Link>
        </div>
        <div>
          <JoinUsButton />
        </div>
      </nav>
      {isLoggedIn && (
        <div className="mini-profile-wrapper d-flex justify-content-end align-items-center">
          <Box   isLoggedIn={isLoggedIn} role={role}/>
        </div>
      )}
    </div>
  );
}

export default Navigation;
