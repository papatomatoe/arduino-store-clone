import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cl from "classnames";

import styles from "./MainMenu.module.css";

const MainMenu = ({ links, className }) => {
  if (!links) return null;
  return (
    <ul className={cl(styles.mainMenu, className)}>
      {links.length
        ? links.map(({ title, link }, idx) => (
            <li className={styles.mainMenu__item} key={`${idx}-${title}`}>
              <Link className={styles.mainMenu__link} to={link}>
                {title}
              </Link>
            </li>
          ))
        : null}
    </ul>
  );
};

MainMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
};

export default MainMenu;
