import React, { useState } from "react";
import video_hero from "../../asset/videos/hero-video.mp4";

const HeroSection = () => {
  return (
    <section className="hero-part-section" id="overview">
      <div className="content-box">
        <h1 className="hero-title">
          Code-Free
          <br />
          App Creation
        </h1>
        <p className="hero-desc">
          On our way to unveil a groundbreaking platform
          <br />
          for app creation, pioneering the future of innovation.
        </p>
        <p className="hero-desc-mobile">
          On our way to unveil a groundbreaking platform for app creation,
          pioneering the future of innovation.
        </p>
        <button className="request-btn">Request early access</button>
        <div className="video-place">
          <video
            src={video_hero}
            autoPlay
            loop
            type="video/mp4"
            muted
            className="video-hero"
            width={936}
            height={477}
            playsInline
          ></video>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
