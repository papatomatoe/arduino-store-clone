import React, { useState } from "react";
import { useDispatch } from "react-redux";

import { useHistory } from "react-router-dom";

import { login } from "../../../actions/environment";

import styles from "./Login.module.css";
import logo from "./logo.svg";

const Login = () => {
  const dispatch = useDispatch();
  const { goBack } = useHistory();
  const [userName, setUserName] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const backHandler = (evt) => {
    evt.preventDefault();
    goBack();
  };

  const changeUserNameHandler = (evt) => setUserName(evt.target.value);

  const changeUserPasswordHandler = (evt) => setUserPassword(evt.target.value);

  const submitHandler = (evt) => {
    evt.preventDefault();

    if (userName && userPassword) {
      dispatch(login());
      goBack();
    }
  };

  return (
    <div className={styles.page}>
      <div className={styles.container}>
        {
          <a
            className={styles.back}
            onClick={backHandler}
            aria-label="Back to Previous page"
          />
        }
        <div className={styles.formContainer}>
          <img src={logo} alt="Arduino Logo" width="60" height="30" />
          <h1 className={styles.title}>Sign in to Arduino Store</h1>
          <form className={styles.form}>
            <div className={styles.inputWrapper}>
              <input
                onChange={changeUserNameHandler}
                value={userName}
                className={styles.input}
                type="text"
                id="userLogin"
                required
              />
              <label className={styles.label} htmlFor="userLogin">
                Username or Email <span>*</span>
              </label>
            </div>

            <div className={styles.inputWrapper}>
              <input
                onChange={changeUserPasswordHandler}
                value={userPassword}
                className={styles.input}
                type="password"
                id="userPassword"
                required
              />
              <label className={styles.label} htmlFor="userPassword">
                Password <span>*</span>
              </label>
            </div>
            <button
              className={styles.submit}
              type="submit"
              onClick={submitHandler}
            >
              sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
