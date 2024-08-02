import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import main_logo from "../../asset/images/main-logo.svg";
import burger_menu from "../../asset/images/hamburger-icon.svg";
import BurgerMenu from "./burger-menu";
import scrollToTop from "../functions/scroll";
import handleScroll from "../functions/menu-scroll";
const Header = () => {
  const [menu_items, set_menu_items] = useState([
    {
      id: 1,
      href: "/#overview",
      active: window.location.pathname !== "/pricing",
      text: "Overview",
    },
    {
      id: 2,
      href: "/#features",
      active: false,
      text: "Features",
    },
    {
      id: 3,
      href: "/#showcase",
      active: false,
      text: "Showcase",
    },
    {
      id: 4,
      href: "/#mission",
      active: false,
      text: "Mission",
    },
    {
      id: 5,
      href: "/pricing",
      active: window.location.pathname === "/pricing",
      text: "Pricing",
    },
  ]);
  // To Do
  //! make active bar
  //! id section links

  const [menu, set_menu] = useState(false);
  const find_location = (id) => {
    // setTimeout(() => {
    //   const features = document.querySelector(id).offsetTop;
    //   window.scrollTo({
    //     top: features,
    //     behavior: "smooth",
    //   });
    // }, 100);
  };
  const active_setter = (id) => {
    const old_menu_items = [...menu_items];
    if (id === 5) {
      old_menu_items[id - 1].active = true;
      old_menu_items[0].active = false;
    } else {
      old_menu_items[4].active = false;
      old_menu_items[0].active = true;
    }
    set_menu_items(old_menu_items);
  };
  useEffect(() => {
    setInterval(() => {
      const path = window.location.pathname;
      if (path === "/pricing") active_setter(5);
      else {
        active_setter(1);
      }
    }, 500);
  });

  return (
    <header className="main-header mm-width">
      <Link to="/" className="main-logo-wrapper" onClick={scrollToTop}>
        <img src={main_logo} alt="Plan and Publish" width={96} height={32} />
      </Link>
      <nav className="main-navigation-wrapper">
        <ul className="main-menu-ul">
          {menu_items.map((mi) => (
            <li
              key={mi.id}
              className={mi.active ? "menu-item active" : "menu-item"}
            >
              <Link
                to={mi.href}
                onClick={() => {
                  if (mi.href.includes("#")) {
                    handleScroll(mi.href.replace("/#", ""));
                  }
                }}
              >
                {mi.text}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <button
        className="burger-menu-btn"
        onClick={() => {
          set_menu(true);
        }}
      >
        <img src={burger_menu} alt="menu" width={24} height={20} />
      </button>
      {menu ? (
        <BurgerMenu
          set_menu={set_menu}
          handleScroll={handleScroll}
          menu={menu_items}
        />
      ) : (
        <></>
      )}
    </header>
  );
};

export default Header;
