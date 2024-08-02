import React, { useEffect, useState } from "react";
import cross_icon from "../../asset/images/cross-icon.svg";
import { Link } from "react-router-dom";
const BurgerMenu = ({ set_menu, handleScroll, menu }) => {
  const [animate, set_animate] = useState(false);
  useEffect(() => {
    setTimeout(() => {
      set_animate(true);
    }, 100);
  }, []);
  //! menu lines and activation
  //! section link remains
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
        {menu.map((mi) => (
          <li className="burger-item" key={mi.id}>
            <Link
              to={mi.href}
              onClick={() => {
                if (mi.href.includes("#"))
                  handleScroll(mi.href.replace("/#", ""));
                set_menu(false);
              }}
            >
              {mi.text}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default BurgerMenu;
