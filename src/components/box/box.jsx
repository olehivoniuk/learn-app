// Box component
import React, { useState } from 'react';
import AvatarStudent from '../../images/AvatarStudent.png'
import { Link } from 'react-router-dom';
import './box.css'

const Box = ({ userEmail }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleProfile = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="mini-profile">
      <div className="profile-icon" onClick={toggleProfile}>
        <i className="fas fa-user">
          <div>User Name </div> 
          <img src={AvatarStudent} alt=" user" style={{ maxWidth: '9vh' }} />
        </i>
      </div>
      {isOpen && (
        <div className="profile-details">
          <p className="email">{userEmail}</p>
          <div className="line"></div>
          <Link to="/my-account-student" className="profile-link">
            My Account
          </Link>
          <div className="toggle">
            <label htmlFor="night-mode-toggle">Night Mode</label>
            <input type="checkbox" id="night-mode-toggle" />
          </div>
          <div className="line"></div>
          <Link to="/login" className="sign-out-link">
            Sign Out
          </Link>
        </div>
      )}
    </div>
  );
};

export default Box;
