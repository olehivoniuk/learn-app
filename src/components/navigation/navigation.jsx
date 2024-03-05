// Navigation component
import React from 'react';
import { Link } from 'react-router-dom';
import Group1 from '../../images/Group1.jpg';
import JoinUsButton from '../joinUsButton/joinUsButton';
import Box from '../box/box';
import './navigation.css'

const Navigation = () => {
  const userEmail = 'example@example.com';

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
      <div className="mini-profile-wrapper d-flex justify-content-end align-items-center">
          <Box userEmail={userEmail} />
        </div>
    </div>
  );
}

export default Navigation;
