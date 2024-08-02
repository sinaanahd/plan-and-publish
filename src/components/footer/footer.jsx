import React, { useState } from "react";
import { Link } from "react-router-dom";
import scrollToTop from "../functions/scroll";
import handleScroll from "../functions/menu-scroll";

import social_icon_1 from "../../asset/images/social-icon-1.svg";
import social_icon_2 from "../../asset/images/social-icon-2.svg";
import social_icon_3 from "../../asset/images/social-icon-3.svg";
import social_icon_4 from "../../asset/images/social-icon-4.svg";
import social_icon_5 from "../../asset/images/social-icon-5.svg";
import social_icon_6 from "../../asset/images/social-icon-6.svg";

import footer_logo from "../../asset/images/footer-logo.svg";
const Footer = () => {
  return (
    <footer className="main-footer">
      <div className="footer-col footer-col-1">
        <ul className="footer-navigation">
          <li className="footer-li">
            <Link
              onClick={() => {
                handleScroll("showcase");
              }}
              to="/#showcase"
              className="footer-link"
            >
              Showcase
            </Link>
          </li>
          <li className="footer-li">
            <Link
              onClick={() => {
                handleScroll("features");
              }}
              to="/#features"
              className="footer-link"
            >
              Features
            </Link>
          </li>
          <li className="footer-li">
            <Link
              onClick={() => {
                handleScroll("mission");
              }}
              to="/#mission"
              className="footer-link"
            >
              Mission
            </Link>
          </li>
          <li className="footer-li">
            <Link to="/pricing" onClick={scrollToTop} className="footer-link">
              Pricing
            </Link>
          </li>
        </ul>
      </div>
      <div className="footer-col footer-col-2">
        <Link
          to="/#overview"
          onClick={() => {
            handleScroll("overview");
          }}
          className="footer-link"
        >
          Terms of use
        </Link>
      </div>
      <div className="footer-col footer-col-3">
        <span className="social-links-wrapper">
          <a href="#" className="social-link-wrapper">
            <img src={social_icon_1} alt="you tube" width={24} height={22} />
          </a>
          <a href="#" className="social-link-wrapper">
            <img src={social_icon_2} alt="linkedin" width={24} height={25} />
          </a>
          <a href="#" className="social-link-wrapper">
            <img src={social_icon_3} alt="instagram" width={24} height={25} />
          </a>
          <a href="#" className="social-link-wrapper">
            <img src={social_icon_4} alt="facebook" width={24} height={25} />
          </a>
          <a href="#" className="social-link-wrapper">
            <img src={social_icon_5} alt="mail" width={24} height={22} />
          </a>
          <a href="#" className="social-link-wrapper">
            <img src={social_icon_6} alt="twitter" width={24} height={25} />
          </a>
        </span>
        <Link to="/" className="footer-logo" onClick={scrollToTop}>
          <img
            width={153}
            height={76}
            src={footer_logo}
            alt="plan and publish"
          />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
