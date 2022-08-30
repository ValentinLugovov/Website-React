import React from "react";
import a from "./Auth.module.css";
import b from "../Header/Buttons/Buttons.module.css";

const Auth = () => {
  return (
    <div className={a.myPrompt}>
      <input
        id="num1"
        className={a.authorization}
        placeholder="Введите табельный номер"
      />
      <br />
      <input
        id="num2"
        className={a.authorization}
        placeholder="Введите пароль"
      />
      <br />
      <p className={a.error}>Вы ввели неверный табельный номер или пароль</p>
      <br />
      <div className={a.okBtn}>
        <button id="okbtn" className={b.buttonLogin}>
          Ok
        </button>
      </div>
    </div>
  );
};

export default Auth;
