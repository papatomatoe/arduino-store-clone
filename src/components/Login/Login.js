import React from "react";

import { Link } from "react-router-dom";

import styles from "./Login.module.css";

const Login = () => {
  return (
    <div className={styles.loginWrapper}>
      <Link className={styles.login} to="/login">
        sign in
      </Link>
    </div>
  );
};

export default Login;
