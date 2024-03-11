import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'; // Importing useSelector and useDispatch hooks
import AvatarStudent from '../../images/AvatarStudent.png';
import AvatarTrainer from '../../images/AvatarTrainer.png';
import { Link } from 'react-router-dom';
import { signOut } from '../../redux/userData'; // Import the signOut action
import './box.css';

const Box = ({ isLoggedIn, userEmail }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const role = useSelector(state => state.userData.find(user => user.isLoggedIn)?.role);

  const toggleProfile = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOutClick = () => {
    dispatch(signOut());
  };

  const renderProfile = () => {
    if (isLoggedIn) {
      let profileName, profileImage, accountLink;
      if (role === 'student') {
        profileName = 'Student';
        profileImage = AvatarStudent;
        accountLink = '/my-account-student';
      } else if (role === 'trainer') {
        profileName = 'Trainer';
        profileImage = AvatarTrainer;
        accountLink = '/my-account-trainer-profile';
      }
  
      return (
        <div className="mini-profile ">
          <div className="profile-icon" onClick={toggleProfile}>
            <i className="fas fa-user">
              <div className="profile-info">
              <div>{profileName} Name</div>
              <img src={profileImage} alt="user" style={{ maxWidth: '6vh', borderRadius: "50px"}}  />
              </div>
            </i>
          </div>
          {isOpen && (
            <div className="profile-details ">
              <p className="email">{userEmail}</p>
              <div className="line"></div>
              <Link to={accountLink} className="profile-link">
                My Account
              </Link>
              <div className="toggle">
                <label htmlFor="night-mode-toggle">Night Mode</label>
                <input type="checkbox" id="night-mode-toggle" />
              </div>
              <div className="line"></div>
              <Link to="/login" className="sign-out-link" onClick={handleSignOutClick}>
                Sign Out
              </Link>
            </div>
          )}
        </div>
      );
    }
    return null;
  };

  return (
    <div>
      {renderProfile()}
    </div>
  );
};

export default Box;
