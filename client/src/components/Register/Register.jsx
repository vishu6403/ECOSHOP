import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.scss';

const Register = () => {
  const navigate = useNavigate();

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (event) => {
    setConfirmPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (password === confirmPassword) {
      // Passwords match, continue with registration logic
      // Add your registration logic here

      // Reset the form fields
      setPassword('');
      setConfirmPassword('');

      // Redirect to homepage
      navigate('/');
    } else {
      // Passwords do not match, display an error message
      setPasswordMismatch(true);
    }
  };

  return (
    <div className="register-container">
      <div className="register-content">
        <h2>Register</h2>
        <form className="register-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number</label>
            <input type="text" id="contactNumber" name="contactNumber" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={handlePasswordChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input
              type="password"
              id="confirmPassword"
              name="confirmPassword"
              value={confirmPassword}
              onChange={handleConfirmPasswordChange}
              required
            />
          </div>
          {passwordMismatch && <p className="password-mismatch">Error: Passwords do not match</p>}
          <button type="submit">Register</button>
          <p className="already-registered">
            Already have an account? <Link to="/login">Login here</Link>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Register;
