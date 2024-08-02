import React, { useState } from "react";
const Mission = () => {
  return (
    <section className="plan-create-section" id="mission">
      <h2 className="section-title">Plan, Create, Design, Publish</h2>
      <p className="section-description">
        We’re not just experts in the filed. We’re dedicated enthusiasts.
      </p>
      <div className="plans-wrapper">
        <div className="plan-wrapper circle-plan">
          <p className="plan desc">
            At our core, we celebrate unity and wholeness of creation, embodying
            inclusivity and collaboration.
          </p>
        </div>
        <div className="plan-wrapper semi-circle-plan">
          <p className="plan desc">
            Showcasing the seamless blending of design and integration, we offer
            endless possibilities for creation.
          </p>
        </div>
        <div className="plan-wrapper square-plan">
          <p className="plan desc">
            On a stable, structured platform that embodies reliability and
            robustness, we enable strong and confident design.{" "}
          </p>
        </div>
        <div className="plan-wrapper semi-triangle-plan">
          <p className="plan desc">
            Innovation is our beating heart, driving us to push boundaries and
            explore new frontiers.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Mission;
