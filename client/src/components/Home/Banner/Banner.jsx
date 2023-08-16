import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/headphone-img.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h2>SALE</h2>
                    <p>
                    Experience the future at our electronic shop. Discover cutting-edge tech, exceptional service, and a world of endless possibilities. Empowering lives through innovation and convenience.
                    </p>
                    <div className="ctas">
                        <div className="banner-cta">Read More</div>
                        <div className="banner-cta v2">Shop Now</div>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} alt=""/>
            </div>
        </div>
    );
};

export default Banner;
