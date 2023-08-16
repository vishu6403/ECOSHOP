import React from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import "./Newsletter.scss";

const Newsletter = () => {
  return (
    <div className="newsletter-section">
      <div className="newsletter-content">
        <span className="big-text">Sign up for latest updates and offers</span>
        <div className="form">
          <input type="text" placeholder="Email Address" />
          <button>Subscribe</button>
        </div>
        <span className="text">
          Will be used in accordance with our Privacy Policy
        </span>
        <span className="social-icons">
          <a href="https://www.linkedin.com/" target="_blank">
            <div className="icon">
              <FaLinkedinIn size={16} />
            </div>
          </a>
          <a href="https://www.facebook.com/" target="_blank">
            <div className="icon">
              <FaFacebookF size={16} />
            </div>
          </a>
          <a href="https://www.twitter.com/" target="_blank">
            <div className="icon">
              <FaTwitter size={16} />
            </div>
          </a>
          <a href="https://www.instagram.com/" target="_blank">
            <div className="icon">
              <FaInstagram size={16} />
            </div>
          </a>
        </span>
      </div>
    </div>
  );
};

export default Newsletter;
