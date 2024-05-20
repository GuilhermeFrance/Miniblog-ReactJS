import styles from "./NavBar.module.css";
import { NavLink } from "react-router-dom";

import React from "react";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <NavLink to="/" className={styles.brand}>
        Mini <span>BLOG</span>
      </NavLink>
      <ul className={styles.links_list}>
        <li>
          <NavLink to="/home" className={({isActive}) => (isActive ? styles.active : "")}>Home</NavLink>
        </li>
        <li>
          <NavLink to="/about" className={({isActive}) => (isActive ? styles.active : "")}>Sobre</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
