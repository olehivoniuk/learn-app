import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import AvatarStudent from '../../images/AvatarStudent.png';
import AvatarTrainer from '../../images/AvatarTrainer.png';
import { Link } from 'react-router-dom';
import { signOut } from '../../redux/userData';
import './box.css';

const Box = ({ userEmail }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const userData = useSelector(state => state.userData);
  const role = userData.find(user => user.isLoggedIn)?.role;
  const userName = userData.find(user => user.isLoggedIn)?.username;

  const toggleProfile = () => {
    setIsOpen(!isOpen);
  };

  const handleSignOutClick = () => {
    dispatch(signOut());
  };

  const profileImage = role === "student" ? AvatarStudent : AvatarTrainer;
  const accountLink = role === "student" ? "/my-account-student" : '/my-account-trainer-profile';

  return (
    <div className="mini-profile">
      <div className="profile-icon" onClick={toggleProfile}>
        <i className="fas fa-user">
          <div className="profile-info">
            <div>{userName}</div>
            <img src={profileImage} alt="user" style={{ maxWidth: '6vh', borderRadius: "50px"}} />
          </div>
        </i>
      </div>
      {isOpen && (
        <div className="profile-details">
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
};

export default Box;
