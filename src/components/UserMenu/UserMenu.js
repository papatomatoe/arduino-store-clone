import React, { useState } from "react";

import DropdownMenu from "../DropdownMenu";

import styles from "./UserMenu.module.css";

const UserMenu = () => {
  const [isOpened, setIsOpened] = useState(false);

  const openMenuHandler = () => setIsOpened((prev) => !prev);
  return (
    <div className={styles.wrapper}>
      <button
        onClick={openMenuHandler}
        className={styles.userButton}
        aria-label="user menu button"
      ></button>
      {isOpened && <DropdownMenu />}
    </div>
  );
};

export default UserMenu;
