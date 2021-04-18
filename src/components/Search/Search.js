import React from "react";

import styles from "./Search.module.css";

const Search = () => {
  return (
    <form className={styles.search}>
      <div className={styles.inputWrapper}>
        <input
          className={styles.input}
          type="text"
          placeholder="Search on Store"
        />
      </div>
    </form>
  );
};

export default Search;
