import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import video_img from "../../asset/images/Video_Frame.svg";
import sample_valued from "../../asset/images/sample-option.svg";

import valued_icon_1 from "../../asset/images/valued-icon-1.svg";
import valued_icon_2 from "../../asset/images/valued-icon-2.svg";
import valued_icon_3 from "../../asset/images/valued-icon-3.svg";
import valued_icon_4 from "../../asset/images/valued-icon-4.svg";
import valued_icon_5 from "../../asset/images/valued-icon-5.svg";

import middle_img from "../../asset/images/middle-img.svg";
import left_1 from "../../asset/images/left-1.svg";
import left_2 from "../../asset/images/left-2.svg";
import left_1_icon from "../../asset/images/left-1-icon.svg";
import left_2_icon from "../../asset/images/left-2-icon.svg";
import right_1 from "../../asset/images/right-1.svg";
import right_2 from "../../asset/images/right-2.svg";
import right_1_icon from "../../asset/images/right-1-icon.svg";
import right_2_icon from "../../asset/images/right-2-icon.svg";

import final_img from "../../asset/images/final-cta-img.svg";

import video_hero from "../../asset/videos/hero-video.mp4";
import scrollToTop from "../scroll";

const Home = () => {
  const [valued_items, set_valued_items] = useState([
    {
      id: 1,
      img: valued_icon_1,
      title: "Drag and Drop Interface",
      text: "No coding required, Drag and drop the modules you want to use in your app.",
      content: "",
    },
    {
      id: 2,
      img: valued_icon_2,
      title: "Customizable App",
      text: "Choose from a ton of templates like e-commerce, socials, education, etc.",
      content: "",
    },
    {
      id: 3,
      img: valued_icon_3,
      title: "Live Preview",
      text: "See how your app looks and work in real time as you build and improve it.",
      content: "",
    },
    {
      id: 4,
      img: valued_icon_4,
      title: "Responsive Design",
      text: "Your app will look great on any device, no matter the size and view port.",
      content: "",
    },
    {
      id: 5,
      img: valued_icon_5,
      title: "Plan and Publish",
      text: "Once your app is ready, you can publish it to the app stores around the world.",
      content: "",
    },
  ]);
  const [valued_contents, set_valued_contents] = useState(1);
  return (
    <>
      <Helmet>
        <title>Plan and Publish | Home</title>
      </Helmet>
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
          <button className="request-btn">Request early access</button>
          <div className="video-place">
            <video
              src={video_hero}
              autoPlay
              loop
              type="video/mp4"
              muted
              className="video-hero"
            ></video>
            {/* <img src={video_img} alt="temp_video" /> */}
          </div>
        </div>
      </section>
      <section className="simplcity-value-section" id="features">
        <h2 className="section-title">We Value Simplicity</h2>
        <p className="section-description">
          A platform designed with you in mind. Our mission? To make app
          creation a seamless experience, no matter your level of expertise.
          Your unique vision is at the heart of what we do.
        </p>
        <button className="request-btn">Request early access</button>
        <div className="options-wrapper-part">
          <div className="valuedoptions-wrapper">
            {valued_items.map((vi) => (
              <div
                key={vi.id}
                className={
                  vi.id === valued_contents
                    ? "active value-option-wrapper"
                    : Math.abs(vi.id - valued_contents) === 1
                    ? "value-option-wrapper semi-active"
                    : "value-option-wrapper"
                }
                onClick={() => {
                  set_valued_contents(vi.id);
                }}
              >
                <img src={vi.img} alt={vi.title} />
                <div className="option-texts">
                  <h3 className="option-title">{vi.title}</h3>
                  <p className="option-text">{vi.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="valued-content-wrapper">
            <img src={sample_valued} alt="" />
          </div>
        </div>
      </section>
      <section className="made-by-pap-section" id="showcase">
        <h2 className="section-title">Made by PAP</h2>
        <p className="section-description">
          Navigating the path forward. Effortless app creation, no coding skills
          needed. Together, let's propel your business to new heights.
        </p>
        <Link
          to="/pricing"
          className="view-packages-link"
          onClick={scrollToTop}
        >
          View Packages
        </Link>
        <div className="all-mades-wrapper">
          <div className="maden-col col-left-1">
            <span className="maden-span">
              <img src={left_1_icon} alt="" />
              <span className="maden-texts">
                <h3 className="maden-title">Gimini</h3>
                <p className="maden-text">Train your users better.</p>
              </span>
            </span>
            <img src={left_1} alt="" />
          </div>
          <div className="maden-col col-left-2">
            <img src={left_2} alt="" />
            <span className="maden-span">
              <img src={left_2_icon} alt="" />
              <span className="maden-texts">
                <h3 className="maden-title">Mooviz</h3>
                <p className="maden-text">Express your ideas.</p>
              </span>
            </span>
          </div>
          <div className="maden-col col-middle">
            <img src={middle_img} alt="made by pap middle" />
          </div>
          <div className="maden-col col-right-1">
            <span className="maden-span">
              <img src={right_1_icon} alt="" />
              <span className="maden-texts">
                <h3 className="maden-title">Saving Smile</h3>
                <p className="maden-text">
                  Bring back <br /> smiles globally
                </p>
              </span>
            </span>
            <img src={right_1} alt="" />
          </div>
          <div className="maden-col col-right-2">
            <img src={right_2} alt="" />
            <span className="maden-span">
              <img src={right_2_icon} alt="" />
              <span className="maden-texts">
                <h3 className="maden-title">My UNI</h3>
                <p className="maden-text">
                  Better <br /> education app.
                </p>
              </span>
            </span>
          </div>
        </div>
      </section>
      <section className="plan-create-section" id="mission">
        <h2 className="section-title">Plan, Create, Design, Publish</h2>
        <p className="section-description">
          We’re not just experts in the filed. We’re dedicated enthusiasts.
        </p>
        <div className="plans-wrapper">
          <div className="plan-wrapper circle-plan">
            <p className="plan desc">
              At our core, we celebrate unity and wholeness of creation,
              embodying inclusivity and collaboration.
            </p>
          </div>
          <div className="plan-wrapper semi-circle-plan">
            <p className="plan desc">
              Showcasing the seamless blending of design and integration, we
              offer endless possibilities for creation.
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
    </>
  );
};

export default Home;
