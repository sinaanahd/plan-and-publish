import React, { useState } from "react";
import { Helmet } from "react-helmet";
const Pricing = () => {
  return (
    <>
      <Helmet>
        <title>Plan and Publish | Pricing</title>
      </Helmet>
      <section className="price-section">
        <h1 className="section-title">Your app, your way!</h1>
        <p className="section-description">
          Find out which plan works best for you.
        </p>
        <div className="price-table-wrapper">
          <div className="price-col price-col-1">
            <h2 className="price-label plan-before">Plan</h2>
            <ul className="price-items">
              <li className="price-item need-bold">Free Forever</li>
              <li className="price-item">
                1 active project <br /> with archive option
              </li>
              <li className="price-item">Plan your app</li>
              <li className="price-item">Static Preview</li>
              <li className="price-item">
                Firebase connection <br /> +100mb storage
              </li>
              <li className="price-item">Free features</li>
            </ul>
            <span className="button-wrapper">
              <button className="request-btn">Request early access</button>
            </span>
          </div>
          <div className="price-col price-col-2">
            <h2 className="price-label publish-before">Publish</h2>
            <ul className="price-items">
              <li className="price-item">Subscription</li>
              <li className="price-item">
                3 active project <br /> with archive option
              </li>
              <li className="price-item">Publish your app</li>
              <li className="price-item">Live Preview</li>
              <li className="price-item">
                Firebase connection <br /> +1GB storage
              </li>
              <li className="price-item">
                Free features <br /> +add-ons
              </li>
            </ul>
            <span className="button-wrapper">
              <button className="coming-soon-btn">Coming Soon</button>
            </span>
          </div>
        </div>
      </section>
      <section className="pap-in-a-nut-shell-section">
        <h2 className="section-new-title">PAP in a nutshell</h2>
        <p className="nutshell-descrition">
          Embark on your app creation journey with PAP, a seasoned and
          empowering ally. Our vision is simple yet transformative: to make app
          creation accessible to all. With a mature architecture designed by
          experienced engineers, we provide endless possibilities for your
          unique creations. More than a platform, PAP is your trusted partner, a
          creativity promoter, and the assurance that your ideas will find their
          perfect digital form effortlessly. Welcome to a world where
          empowerment meets creativity, and every user becomes a confident app
          creator.
        </p>
      </section>
    </>
  );
};

export default Pricing;
