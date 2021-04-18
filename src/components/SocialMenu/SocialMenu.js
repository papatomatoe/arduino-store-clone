import React from "react";
import PropTypes from "prop-types";

import cn from "classnames";

import styles from "./SocialMenu.module.css";

const SocialMenu = ({ links }) => {
  if (!links) return null;
  return (
    <div className={styles.socialWrapper}>
      <h2 className={styles.title}>follow us</h2>
      <ul className={styles.socialList}>
        {links.length
          ? links.map(({ key, title, link }) => (
              <li className={styles.socialItem} key={key}>
                {/*eslint-disable-next-line jsx-a11y/anchor-has-content*/}
                <a
                  className={cn(styles.socialLink, styles[key])}
                  href={link}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={title}
                />
              </li>
            ))
          : null}
      </ul>
    </div>
  );
};

SocialMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      key: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      link: PropTypes.string.isRequired,
    })
  ).isRequired,
};

export default SocialMenu;
