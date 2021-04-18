import React from "react";

import styles from "./Subscribe.module.css";

const Subscribe = () => {
  return (
    <form action="#" method="POST" className={styles.subscribe}>
      <div>
        <h2 className={styles.title}>newsletter</h2>
        <input
          className={styles.input}
          type="email"
          name="subscribeEmail"
          placeholder="Enter your email to sign up"
          required
        />
        <button
          className={styles.subscribeButton}
          type="submit"
          onClick={(evt) => evt.preventDefault()}
        >
          subscribe
        </button>
      </div>
    </form>
  );
};

export default Subscribe;
