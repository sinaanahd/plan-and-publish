import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import scrollToTop from "../functions/scroll";
import middle_img from "../../asset/images/middle-img.svg";
import left_1 from "../../asset/images/left-1.svg";
import left_2 from "../../asset/images/left-2.svg";
import left_1_icon from "../../asset/images/left-1-icon.svg";
import left_2_icon from "../../asset/images/left-2-icon.svg";
import right_1 from "../../asset/images/right-1.svg";
import right_2 from "../../asset/images/right-2.svg";
import right_1_icon from "../../asset/images/right-1-icon.svg";
import right_2_icon from "../../asset/images/right-2-icon.svg";
const MadeByPap = () => {
  const [animate_show_case, set_animate_show_case] = useState(false);
  const handleScroll = () => {
    const element = document.querySelector("#showcase");
    if (element) {
      const rect = element.getBoundingClientRect();
      if (rect.top <= window.innerHeight - 300) {
        if (!animate_show_case) {
          set_animate_show_case(true);
        }
      }
    }
  };

  useEffect(() => {
    const element = document.querySelector("#showcase");
    if (element) window.addEventListener("scroll", handleScroll);
  }, []);
  return (
    <section
      className={
        animate_show_case
          ? "made-by-pap-section animate-show-case"
          : "made-by-pap-section"
      }
      id="showcase"
    >
      <h2 className="section-title">Made by PAP</h2>
      <p className="section-description">
        Navigating the path forward. Effortless app creation, no coding skills
        needed. Together, let's propel your business to new heights.
      </p>
      <Link to="/pricing" className="view-packages-link" onClick={scrollToTop}>
        View Packages
      </Link>
      <div className="all-mades-wrapper">
        <div className="maden-col col-left-1">
          <span className="maden-span m-l-l-t m-animate">
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
            className="m-l-l-b m-animate"
          />
        </div>
        <div className="maden-col col-left-2">
          <img
            loading="lazy"
            src={left_2}
            alt="under the mask"
            width={178}
            height={339}
            className="m-l-r-t m-animate"
          />
          <span className="maden-span m-l-r-b m-animate">
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
            className="m-m-m-m  m-animate"
          />
        </div>
        <div className="maden-col col-right-1">
          <span className="maden-span m-r-l-t m-animate">
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
          <img
            loading="lazy"
            src={right_1}
            alt="Hope,Happiness,and smiles"
            className="m-r-l-b m-animate"
            width={182}
            height={347}
          />
        </div>
        <div className="maden-col col-right-2">
          <img
            loading="lazy"
            src={right_2}
            alt="Study with us"
            width={183}
            height={347}
            className="m-r-r-t m-animate"
          />
          <span className="maden-span m-r-r-b m-animate">
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
  );
};

export default MadeByPap;
