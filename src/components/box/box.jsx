import React, { useState } from 'react';
import AvatarStudent from '../../images/AvatarStudent.png';
import AvatarTrainer from '../../images/AvatarTrainer.png';
import { Link } from 'react-router-dom';
import './box.css';

const Box = ({ userEmail }) => {
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);

  const toggleProfile1 = () => {
    setIsOpen1(!isOpen1);
  };

  const toggleProfile2 = () => {
    setIsOpen2(!isOpen2);
  };

  return (
    <div>
      <div className="mini-profile">
        <div className="profile-icon" onClick={toggleProfile1}>
          <i className="fas fa-user">
            <div>Student Name </div> 
            <img src={AvatarStudent} alt=" user" style={{ maxWidth: '9vh' }} />
          </i>
        </div>
        {isOpen1 && (
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
      <div className="mini-profile">
        <div className="profile-icon" onClick={toggleProfile2}>
          <i className="fas fa-user">
            <div>Trainer Name </div> 
            <img src={AvatarTrainer} alt=" user" style={{ maxWidth: '9vh' }} />
          </i>
        </div>
        {isOpen2 && (
          <div className="profile-details">
            <p className="email">{userEmail}</p>
            <div className="line"></div>
            <Link to="/my-account-trainer-profile" className="profile-link">
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
    </div>
  );
};

export default Box;
