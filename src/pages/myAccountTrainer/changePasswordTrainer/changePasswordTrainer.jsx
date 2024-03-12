import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeUserPassword } from '../../../redux/userData'; // Adjust the path as needed
import './changePasswordTrainer.css';

const ChangePasswordTrainer = () => {
  const dispatch = useDispatch();
  const loggedInUser = useSelector(state => state.userData.find(user => user.isLoggedIn));

  const [currentPassword, setCurrentPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const handlePasswordChange = (e) => {
    e.preventDefault(); // Prevents the default form submission behavior
    
    // 1. Check if the entered current password matches the logged-in user's password
    if (currentPassword !== loggedInUser.password) {
      alert('Incorrect password, request denied');
      return;
    }

    // 2. Check if new password and confirm new password match
    if (newPassword !== confirmNewPassword) {
      alert('New password and confirm new password must match');
      return;
    }

    // 3. Dispatch action to change password
    dispatch(changeUserPassword({ userId: loggedInUser.id, newPassword }));

    // Optional: Reset input fields after successful password change
    setCurrentPassword('');
    setNewPassword('');
    setConfirmNewPassword('');
  };

  return (
    <div className="container">
      <div className="row">
        <h3 className="security-heading">Security</h3>
        <div className="col-md-3">
          <div className="change-password-section">
            <div className="change-password-title">
              <span className="bold-text fw-bold">Change password</span>
            </div>
          </div>
        </div>
        <div className="col-md-9">
          <form className="password-form" onSubmit={handlePasswordChange}>
            <div className="mb-3">
              <label htmlFor="currentPassword" className="form-label fw-bold">Current password:</label>
              <input
                type="password"
                className="form-control custom-input"
                id="currentPassword"
                value={currentPassword}
                onChange={(e) => setCurrentPassword(e.target.value)}
                placeholder="Enter your current password"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label fw-bold">New password:</label>
              <input
                type="password"
                className="form-control custom-input"
                id="newPassword"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
                placeholder="Enter new password"
              />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmNewPassword" className="form-label fw-bold">Confirm new password:</label>
              <input
                type="password"
                className="form-control custom-input"
                id="confirmNewPassword"
                value={confirmNewPassword}
                onChange={(e) => setConfirmNewPassword(e.target.value)}
                placeholder="Confirm new password"
              />
            </div>
            <div className="mb-3 d-flex justify-content-end">
              <button type="button" className="btn btn-secondary me-2">Cancel</button>
              <button type="submit" className="btn btn-primary">Change password</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default ChangePasswordTrainer;
