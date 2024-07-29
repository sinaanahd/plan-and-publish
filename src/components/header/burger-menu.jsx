import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import cross_icon from "../../asset/images/cross-icon.svg";
const BurgerMenu = ({ set_menu }) => {
  const [animate, set_animate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      set_animate(true);
    }, 100);
  }, []);
  return (
    <nav className={!animate ? "burger-menu" : "burger-menu animate-menu"}>
      <ul className="burger-ul">
        <li className="burger-item cross-holder">
          <button
            className="close-menu-btn"
            onClick={() => {
              set_menu(false);
            }}
          >
            <img src={cross_icon} alt="close menu" />
          </button>
        </li>
        <li className="burger-item">
          <Link>Overview</Link>
        </li>
        <li className="burger-item">
          <Link>Features</Link>
        </li>
        <li className="burger-item">
          <Link>Showcase</Link>
        </li>
        <li className="burger-item">
          <Link>Mission</Link>
        </li>
        <li className="burger-item">
          <Link>Pricing</Link>
        </li>
      </ul>
    </nav>
  );
};

export default BurgerMenu;
