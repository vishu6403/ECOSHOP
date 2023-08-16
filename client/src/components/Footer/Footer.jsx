import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../assets/payments.png";
import { Link } from "react-router-dom";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                    <div className="title">About</div>
                    <div className="text">
                        Experience the future at our electronic shop. Discover cutting-edge tech, exceptional service, and a world of endless possibilities. Empowering lives through innovation and convenience.
                    </div>
                </div>
                <div className="col">
                    <div className="title">Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                            Ravindra Enclave, Baltana, Zirakpur, 140604
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Phone: 0471 272 0261</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email: ecoshop@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title">Categories</div>
                    <span className="text">
                    <Link to="/category/1" >
                        Headphones
                    </Link>
                    </span>
                    <span className="text">
                    <Link to="/category/2">
                        Wireless Earbuds
                    </Link>
                    </span>
                    <span className="text">
                    <Link to="/category/3" >
                        Bluetooth Speakers
                    </Link>
                    </span>
                    <span className="text">
                    <Link to="/category/4" >
                        Smart Watches
                    </Link>
                    </span>
                    <span className="text">
                    <Link to="/category/5" >
                        Mobile Phones
                    </Link>
                    </span>
                    <span className="text">
                    <Link to="/category/6" >
                        Television
                    </Link>
                    </span>
                </div>
                <div className="col">
                    <div className="title">Pages</div>
                    <span className="text">
                    <Link to="/" >
                        Home
                    </Link>
                    </span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        EcoShop 2023™©
                    </span>
                    <img src={Payment} alt="" />
                </div>
            </div>
        </div>
    );
};

export default Footer;
