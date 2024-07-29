import React, { useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import scrollToTop from "../scroll";

import social_icon_1 from "../../asset/images/social-icon-1.svg";
import social_icon_2 from "../../asset/images/social-icon-2.svg";
import social_icon_3 from "../../asset/images/social-icon-3.svg";
import social_icon_4 from "../../asset/images/social-icon-4.svg";
import social_icon_5 from "../../asset/images/social-icon-5.svg";
import social_icon_6 from "../../asset/images/social-icon-6.svg";

import footer_logo from "../../asset/images/footer-logo.svg";
const Footer = () => {
  const find_location = (id) => {
    setTimeout(() => {
      const features = document.querySelector(id).offsetTop;
      // const features = document
      //   .querySelector(id)
      //   .getBoundingClientRect().offsetTop;
      window.scrollTo({
        top: features,
        behavior: "smooth",
      });
      console.log(document.querySelector(id).getBoundingClientRect());
    }, 100);
  };
  return (
    <footer className="main-footer">
      <div className="footer-col footer-col-1">
        <ul className="footer-navigation">
          <li className="footer-li">
            <Link
              onClick={() => {
                find_location("#showcase");
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
                find_location("#features");
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
                find_location("#mission");
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
            find_location("#overview");
          }}
          className="footer-link"
        >
          Terms of use
        </Link>
      </div>
      <div className="footer-col footer-col-3">
        <span className="social-links-wrapper">
          <a href="" className="social-link-wrapper">
            <img src={social_icon_1} alt="" />
          </a>
          <a href="" className="social-link-wrapper">
            <img src={social_icon_2} alt="" />
          </a>
          <a href="" className="social-link-wrapper">
            <img src={social_icon_3} alt="" />
          </a>
          <a href="" className="social-link-wrapper">
            <img src={social_icon_4} alt="" />
          </a>
          <a href="" className="social-link-wrapper">
            <img src={social_icon_5} alt="" />
          </a>
          <a href="" className="social-link-wrapper">
            <img src={social_icon_6} alt="" />
          </a>
        </span>
        <Link to="/" className="footer-logo" onClick={scrollToTop}>
          <img src={footer_logo} alt="" />
        </Link>
      </div>
    </footer>
  );
};

export default Footer;
