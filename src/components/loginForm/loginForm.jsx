import React, { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { addFormData } from '../../redux/userData'; // Import the action
import { Link } from 'react-router-dom';
import './loginForm.css';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  // Define useEffect hook outside of onSubmit function
  useEffect(() => {
    console.log('Form Data:', { username, password });
  }, [username, password]);

  const onSubmit = (event) => {
    event.preventDefault();
    if (username && password) {
      const formData = { username, password }; // Create form data object
      dispatch(addFormData(formData)); // Dispatch action to add form data
      setUsername('');
      setPassword('');
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center h-100">
      <form onSubmit={onSubmit} className="login-form">
        <h1 className="sign-in-heading text-center">Sign in</h1>
        <h3 className="text-center">Welcome back</h3>
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
