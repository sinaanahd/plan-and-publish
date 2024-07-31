import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom/cjs/react-router-dom.min";

import valued_icon_1 from "../../asset/images/valued-icon-1.svg";
import valued_icon_2 from "../../asset/images/valued-icon-2.svg";
import valued_icon_3 from "../../asset/images/valued-icon-3.svg";
import valued_icon_4 from "../../asset/images/valued-icon-4.svg";
import valued_icon_5 from "../../asset/images/valued-icon-5.svg";

import valued_icon_1_gray from "../../asset/images/valued-icon-1-gray.svg";
import valued_icon_2_gray from "../../asset/images/valued-icon-2-gray.svg";
import valued_icon_3_gray from "../../asset/images/valued-icon-3-gray.svg";
import valued_icon_4_gray from "../../asset/images/valued-icon-4-gray.svg";
import valued_icon_5_gray from "../../asset/images/valued-icon-5-gray.svg";

import valued_icon_1_blue from "../../asset/images/valued-icon-1-blue.svg";
import valued_icon_2_blue from "../../asset/images/valued-icon-2-blue.svg";
import valued_icon_3_blue from "../../asset/images/valued-icon-3-blue.svg";
import valued_icon_4_blue from "../../asset/images/valued-icon-4-blue.svg";
import valued_icon_5_blue from "../../asset/images/valued-icon-5-blue.svg";

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

import valued_video_1 from "../../asset/videos/01_Drag_and_Drop.mp4";
import valued_video_2 from "../../asset/videos/02_Customizable_App.mp4";
import valued_video_3 from "../../asset/videos/03_Live_preview.mp4";
import valued_video_4 from "../../asset/videos/04_Responsive_App.mp4";
import valued_video_5 from "../../asset/videos/05_Publish.mp4";

const Home = () => {
  const [valued_items, set_valued_items] = useState([
    {
      id: 1,
      img: [valued_icon_1, valued_icon_1_blue, valued_icon_1_gray],
      title: "Drag and Drop Interface",
      text: "No coding required, Drag and drop the modules you want to use in your app.",
      content: valued_video_1,
    },
    {
      id: 2,
      img: [valued_icon_2, valued_icon_2_blue, valued_icon_2_gray],
      title: "Customizable App",
      text: "Choose from a ton of templates like e-commerce, socials, education, etc.",
      content: valued_video_2,
    },
    {
      id: 3,
      img: [valued_icon_3, valued_icon_3_blue, valued_icon_3_gray],
      title: "Live Preview",
      text: "See how your app looks and work in real time as you build and improve it.",
      content: valued_video_3,
    },
    {
      id: 4,
      img: [valued_icon_4, valued_icon_4_blue, valued_icon_4_gray],
      title: "Responsive Design",
      text: "Your app will look great on any device, no matter the size and view port.",
      content: valued_video_4,
    },
    {
      id: 5,
      img: [valued_icon_5, valued_icon_5_blue, valued_icon_5_gray],
      title: "Plan and Publish",
      text: "Once your app is ready, you can publish it to the app stores around the world.",
      content: valued_video_5,
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
              playsinline
              preload
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
                <img
                  src={vi.img[0]}
                  alt={vi.title}
                  className="desktop-valued-icon"
                  width={39}
                  height={39}
                />
                <img
                  src={vi.id === valued_contents ? vi.img[1] : vi.img[2]}
                  alt={vi.title}
                  className="responsive-valued-item"
                  width={39}
                  height={39}
                />
                <div className="option-texts">
                  <h3 className="option-title">{vi.title}</h3>
                  <p className="option-text">{vi.text}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="valued-content-wrapper">
            <video
              src={valued_items[valued_contents - 1].content}
              autoPlay
              loop
              type="video/mp4"
              muted
              className="video-hero"
              width={972}
              height={549}
              playsinline
              preload="none"
            ></video>
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
              <img
                loading="lazy"
                src={left_1_icon}
                alt="Gimini"
                width={54}
                height={56}
              />
              <span className="maden-texts">
                <h3 className="maden-title">Gimini</h3>
                <p className="maden-text">Train your users better.</p>
              </span>
            </span>
            <img
              src={left_1}
              alt="choose your program"
              width={178}
              height={338}
            />
          </div>
          <div className="maden-col col-left-2">
            <img
              loading="lazy"
              src={left_2}
              alt="under the mask"
              width={178}
              height={339}
            />
            <span className="maden-span">
              <img
                loading="lazy"
                src={left_2_icon}
                alt="Mooviz"
                width={54}
                height={56}
              />
              <span className="maden-texts">
                <h3 className="maden-title">Mooviz</h3>
                <p className="maden-text">Express your ideas.</p>
              </span>
            </span>
          </div>
          <div className="maden-col col-middle">
            <img
              loading="lazy"
              src={middle_img}
              alt="made by pap middle"
              width={340}
              height={460}
            />
          </div>
          <div className="maden-col col-right-1">
            <span className="maden-span">
              <img
                loading="lazy"
                src={right_1_icon}
                alt="saving smile"
                width={54}
                height={56}
              />
              <span className="maden-texts">
                <h3 className="maden-title">Saving Smile</h3>
                <p className="maden-text">
                  Bring back <br /> smiles globally
                </p>
              </span>
            </span>
            <img loading="lazy" src={right_1} alt="" />
          </div>
          <div className="maden-col col-right-2">
            <img loading="lazy" src={right_2} alt="" />
            <span className="maden-span">
              <img
                loading="lazy"
                src={right_2_icon}
                alt="Hope , Happines , Smiles"
                width={178}
                height={339}
              />
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
