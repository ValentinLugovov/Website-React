import React from "react";
import Choose from "./ChooseProtocol/Choose";
import m from "./Main.module.css";

const Main = () => {
  return (
    <div className={m.container}>
      <Choose />
    </div>
  );
};

export default Main;
