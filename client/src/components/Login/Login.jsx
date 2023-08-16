import React from 'react';
import { Link } from 'react-router-dom';
import './Login.scss';

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-content">
        <h2>Login</h2>
        <form className="login-form">
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" id="password" name="password" required />
          </div>
          <button type="submit">Login</button>
          <div className="registration-text">
            <p className="not-registered">
              Not Registered yet? <Link to="/register">Sign up here</Link>
            </p>
            <button className="back-to-home-button">
              <Link to="/">Back</Link>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
