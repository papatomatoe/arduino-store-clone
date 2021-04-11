import React from "react";

import styles from "./Header.module.css";
import logo from "./logo.svg";

const LINKS = [
  { title: "boards", link: "/boards" },
  { title: "shields", link: "/shields" },
  { title: "kits", link: "/kits" },
  { title: "accessories", link: "/accessories" },
];
const USER_BTNS = [
  { title: "Cart", link: "/cart" },
  { title: "Favorites", link: "/favorites" },
];

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <a href="/" className={styles.logo}>
          <img
            className={styles.img}
            src={logo}
            alt="Arduino store"
            width="149"
            height="25"
          />
        </a>

        <ul className={styles.mainMenu}>
          {LINKS.map(({ title, link }, idx) => (
            <li className={styles.mainMenu__item} key={`${idx}-${title}`}>
              <a className={styles.mainMenu__link} href={link}>
                {title}
              </a>
            </li>
          ))}
        </ul>
      </nav>
      <form className={styles.search}>
        <div className={styles.inputWrapper}>
          <input
            className={styles.input}
            type="text"
            placeholder="Search on Store"
          />
        </div>
      </form>
      <ul className={styles.userMenu}>
        {USER_BTNS.map(({ title }, idx) => (
          <li className={styles.userMenu__item} key={`${idx}-${title}`}>
            <button
              className={styles.userMenu__btn}
              aria-label={title}
            ></button>
          </li>
        ))}
      </ul>
      <div className={styles.loginWrapper}>
        <a className={styles.login} href="/login">
          sign in
        </a>
      </div>
    </header>
  );
};

export default Header;
