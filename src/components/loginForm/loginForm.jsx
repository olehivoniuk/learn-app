import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'; // Import Axios
import { addFormData } from '../../redux/userData';
import './loginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    setErrorMessage('');
  }, [username, password]);

  const onSubmit = async (event) => {
    event.preventDefault();
    if (username && password) {
      try {
        const response = await axios.post('http://localhost:3001/login', { // Update the URL here
          username,
          password,
        });
        const user = response.data;
  
        // Check if the user data contains isLoggedIn:true
        if (user.isLoggedIn) {
          // Update the user's isLoggedIn status in Redux state
          dispatch(addFormData({ ...user, isLoggedIn: true }));
          // Redirect the user based on their role
          navigate(user.role === 'student' ? '/student-login-home' : '/trainer-login-home');
        } else {
          setErrorMessage('Incorrect username or password');
        }
      } catch (error) {
        setErrorMessage('Failed to login');
      }
    } else {
      setErrorMessage('Please enter username and password');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <form onSubmit={onSubmit} className="login-form">
        <h1 className="sign-in-heading text-center">Sign in</h1>
        <h3 className="text-center">Welcome back</h3>
        {errorMessage && <p className="text-danger">{errorMessage}</p>}
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            type="text"
            id="username"
            name="username"
            className="form-control"
            placeholder="Enter email"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            type="password"
            id="password"
            name="password"
            className="form-control"
            placeholder="Enter password"
            required
          />
        </div>
        <button type="submit" className="btn btn-primary btn-block">
          Sign in
        </button>
        <p className="text-center">
          Don't have an account? <Link to="/join-us">Sign up</Link>
        </p>
        <div className="form-check text-center">
          <input
            type="checkbox"
            id="robot"
            name="robot"
            className="form-check-input"
          />
          <label htmlFor="robot" className="form-check-label">
            I am not a robot
          </label>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
