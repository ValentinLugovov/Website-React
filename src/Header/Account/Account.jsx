import React from "react";
import style from "./account.module.css";
import avatar from "./avatar.jpeg";

const Account = () => {
  return (
    <nav className={style.menu}>
      <ul className={style.list}>
        <li className={style.item}>
          <a href="#" className={style.link}>
            <img
              id="avatar"
              src={avatar}
              alt="Your Photo"
              className={style.avatar}
            />
          </a>
        </li>
        <li className={style.item}>
          <a href="#" id="name" className={style.link}>
            Anna Filippova
          </a>
        </li>
        <li className={style.item}>
          <a id="tabName" href="#" className={style.link}>
            123312
          </a>
        </li>
      </ul>
    </nav>
  );
};

export default Account;
