import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import UserMenu from "../UserMenu";

import styles from "./Login.module.css";

const Login = () => {
  const { isLoggedIn } = useSelector((state) => state.environment);

  return (
    <div className={styles.loginWrapper}>
      {isLoggedIn ? (
        <UserMenu />
      ) : (
        <Link className={styles.login} to="/login">
          sign in
        </Link>
      )}
    </div>
  );
};

export default Login;
