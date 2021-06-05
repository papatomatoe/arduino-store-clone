import React from "react";
import { useSelector } from "react-redux";

import Logo from "../Logo";
import MainMenu from "../MainMenu";
import Search from "../Search";
import ToolsMenu from "../ToolsMenu";
import Login from "../Login";

import styles from "./Header.module.css";
import logo from "./logo.svg";

import { MAIN_LINKS, USER_BTNS } from "./store.js";

const Header = () => {
  const state = useSelector((state) => state.cart);
  const { products } = state;

  const userButtonsWithQty = USER_BTNS.map((button) => ({
    ...button,
    qty: button.title === "cart" ? products.length : 0,
  }));

  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <Logo img={logo} alt="Arduino store" />
        <MainMenu links={MAIN_LINKS} />
      </nav>
      <Search />
      <ToolsMenu links={userButtonsWithQty} />
      <Login />
    </header>
  );
};

export default Header;
