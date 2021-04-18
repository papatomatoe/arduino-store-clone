import React from "react";
import PropTypes from "prop-types";

import styles from "./InfoMenu.module.css";

const InfoMenu = ({ links }) => {
  if (!links) return null;
  return (
    <ul className={styles.infoMenu}>
      {links.length
        ? links.map(({ title, link }, idx) => (
            <li className={styles.infoMenu__item} key={`${idx}-${title}`}>
              <a className={styles.infoMenu__link} href={link}>
                {title}
              </a>
            </li>
          ))
        : null}
    </ul>
  );
};

InfoMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
    })
  ).isRequired,
};

export default InfoMenu;
