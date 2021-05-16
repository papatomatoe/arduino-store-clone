import React from "react";
import { Link } from "react-router-dom";

import styles from "./AsideMenu.module.css";

import { ASIDE_MENU_ITEMS } from "./store";

const AsideMenu = () => {
  return (
    <ul className={styles.menu}>
      {ASIDE_MENU_ITEMS.map(({ link, title }) => (
        <li key={title} className={styles.item}>
          <Link className={styles.link} to={link}>
            {title}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default AsideMenu;
