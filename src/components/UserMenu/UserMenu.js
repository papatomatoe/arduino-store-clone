import React from "react";
import PropTypes from "prop-types";

import styles from "./UserMenu.module.css";

const UserMenu = ({ links }) => {
  if (!links) return null;
  return (
    <ul className={styles.userMenu}>
      {links.length
        ? links.map(({ title }, idx) => (
            <li className={styles.userMenu__item} key={`${idx}-${title}`}>
              <button
                className={styles.userMenu__btn}
                aria-label={title}
              ></button>
            </li>
          ))
        : null}
    </ul>
  );
};

UserMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    })
  ).isRequired,
};

export default UserMenu;
