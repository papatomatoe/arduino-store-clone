import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { logout } from "../../actions/environment";

import styles from "./DropdownMenu.module.css";

const DropdownMenu = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logout());
  };

  return (
    <div className={styles.container}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>
            profile
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>
            messages
          </Link>
        </li>
        <li className={styles.item}>
          <Link to="/" className={styles.link}>
            my plans
          </Link>
        </li>
        <li className={styles.item}>
          <button
            onClick={logoutHandler}
            className={styles.logout}
            type="button"
          >
            sign out
          </button>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
