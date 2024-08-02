import React, { useState } from "react";
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

import valued_video_1 from "../../asset/videos/01_Drag_and_Drop.mp4";
import valued_video_2 from "../../asset/videos/02_Customizable_App.mp4";
import valued_video_3 from "../../asset/videos/03_Live_preview.mp4";
import valued_video_4 from "../../asset/videos/04_Responsive_App.mp4";
import valued_video_5 from "../../asset/videos/05_Publish.mp4";
const ValueSection = () => {
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
    <section className="simplcity-value-section" id="features">
      <h2 className="section-title">We Value Simplicity</h2>
      <p className="section-description">
        A platform designed with you in mind. Our mission? To make app creation
        a seamless experience, no matter your level of expertise. Your unique
        vision is at the heart of what we do.
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
            playsInline
          ></video>
        </div>
      </div>
    </section>
  );
};

export default ValueSection;
