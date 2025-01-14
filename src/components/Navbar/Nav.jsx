import React from "react";
import s from "./Nav.module.css";
import {NavLink} from "react-router-dom";

const Nav = () => {
  return (
    <nav className={s.nav}>
      <div className={s.item}>
        <NavLink to='/profile'  className = { navData => navData.isActive ? s.active : s.item }>Profile</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/dialogs'  className = { navData => navData.isActive ? s.active : s.item } >Message</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/news'  className = { navData => navData.isActive ? s.active : s.item } >News</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/friends'  className = { navData => navData.isActive ? s.active : s.item } >Friends</NavLink>
      </div>
      <div className={s.item}>
        <NavLink to='/sittings'  className = { navData => navData.isActive ? s.active : s.item } >Sittings</NavLink>
      </div>
    </nav>
  );
};

export default Nav;
