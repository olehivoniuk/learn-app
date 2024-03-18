import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './joinUsTrainerValidation.css';

const JoinUsTrainerValidation = () => {
  // Access the user data from the Redux state
  const userData = useSelector(state => state.userData);

  // Access the last item added to the userData array
  const newUser = userData[userData.length - 1];

  // Extract the username and password from the last added user data
  const { username, password } = newUser || {};

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="heading-registration mt-5" >
              <h1 className='heading-registration'>Registration</h1>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="checkbox-container">
              <input type="checkbox" id="myCheckbox"/>
              <p className='checkbox-sign text-white'>✔</p>
            </div>
          </div>
        </div>
      </div>
      <div className="container container-text">
        <div className="row justify-content-center">
          <div className="col-md-5">
            <div className="text-center">
              <p className="w-80">Congratulations, you have successfully registered with Learn Platform! Here are your credentials you can change in your account</p>
            </div>
            <div>
              <p className="text-center">
                User name: {username}
              </p>
            </div>
            <div>
              <p className="text-center">
                Password: {password}
              </p>
            </div>
            <div>
              <p className="text-center">
                <Link to='/trainer-login-home' className="btn btn-primary">My account</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default JoinUsTrainerValidation;
