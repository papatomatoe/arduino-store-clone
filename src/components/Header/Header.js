import React from "react";

import Logo from "../Logo";
import MainMenu from "../MainMenu";
import Search from "../Search";
import UserMenu from "../UserMenu";
import Login from "../Login";

import styles from "./Header.module.css";
import logo from "./logo.svg";

import { MAIN_LINKS, USER_BTNS } from "../../constants/header";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Logo img={logo} alt="Arduino store" />
        <MainMenu links={MAIN_LINKS} />
      </nav>
      <Search />
      <UserMenu links={USER_BTNS} />
      <Login />
    </header>
  );
};

export default Header;
