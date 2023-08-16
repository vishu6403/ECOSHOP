import React from "react";
import { Link } from "react-router-dom";
import { FiCheckCircle } from "react-icons/fi";
import "./Success.scss";

const Success = () => {
  return (
    <div className="success-container">
      <div className="success-box">
        <FiCheckCircle className="success-icon" />
        <h1 className="success-heading">Payment Successful!</h1>
        <p className="success-message">Your payment has been successfully processed.</p>
        <Link to="/" className="back-to-home">Go back to homepage</Link>
      </div>
    </div>
  );
};

export default Success;
