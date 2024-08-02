import React, { useState } from "react";
import final_img from "../../asset/images/final-cta-img.svg";

const FinalCTA = () => {
  return (
    <section className="final-cta-section">
      <div className="final-message-wrapper">
        <img src={final_img} alt="" width={47} height={48} />
        <span className="final-texts-wrapper">
          <h2 className="dont-miss-title">Don’t miss the opportunity.</h2>
          <p className="dont-miss-text">Be among the first to join!</p>
        </span>
      </div>
      <button className="request-btn">Request early access</button>
    </section>
  );
};

export default FinalCTA;
