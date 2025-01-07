import React from "react";
import s from "./Nav.module.css";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div>
        <a>Profile</a>
      </div>
      <div>
        <a>Message</a>
      </div>
      <div>
        <a>About</a>
      </div>
      <div>
        <a>Frends</a>
      </div>
    </nav>
  );
};
export default Nav;
