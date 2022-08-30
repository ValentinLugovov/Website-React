import React from "react";
import b from "./Buttons.module.css";

const Buttons = () => {
  return (
    <div className={b.headerButton}>
      <button className={b.buttonLogin}>ВОЙТИ</button>
      <button className={b.buttonLogout}>ВЫЙТИ</button>
    </div>
  );
};

export default Buttons;
