import React from "react";
import Account from "./Account/Account";
import Buttons from "./Buttons/Buttons";
import h from "./header.module.css";
import logo from "./logo.PNG";

const Header = () => {
  return (
    <header className={h.header}>
      <div className={h.container}>
        <div className={h.logoDiv}>
          <a href="#">
            <img src={logo} alt="Логотип" className={h.logo} />
          </a>
        </div>
        <Account />
        <Buttons />
      </div>
    </header>
  );
};

export default Header;
