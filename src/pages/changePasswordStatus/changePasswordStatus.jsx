import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-solid-svg-icons'; 
import './changePasswordStatus.css';

const ChangePasswordStatus = () => {
  return (
    <div className="container container-status">
      <div className="row justify-content-center align-items-center">
        <div className="col text-center">
          <h1 className="mb-4 password-status-heading">Password changed</h1>
          <FontAwesomeIcon icon={faCheckCircle} style={{ color: 'green', fontSize: '50px', marginBottom: '70px'}} />
          <p className="mb-4">Please proceed sign in with the new password</p>
          <button className="btn btn-primary mt-5">Sign In</button>
        </div>
      </div>
    </div>
  );
}

export default ChangePasswordStatus;
