import React from 'react';
import './changePassword.css';

const ChangePassword = () => {
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
          <form className="password-form">
            <div className="mb-3">
              <label htmlFor="currentPassword" className="form-label fw-bold">Current password:</label>
              <input type="password" className="form-control custom-input" id="currentPassword" aria-describedby="currentPasswordHelp" placeholder="Enter your current password" />
            </div>
            <div className="mb-3">
              <label htmlFor="newPassword" className="form-label fw-bold">New password:</label>
              <input type="password" className="form-control custom-input" id="newPassword" aria-describedby="newPasswordHelp" placeholder="Enter new password" />
            </div>
            <div className="mb-3">
              <label htmlFor="confirmNewPassword" className="form-label fw-bold">Confirm new password:</label>
              <input type="password" className="form-control custom-input" id="confirmNewPassword" placeholder="Confirm new password" />
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

export default ChangePassword;
