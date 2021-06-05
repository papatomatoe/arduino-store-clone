import React from "react";
import PropTypes from "prop-types";
import { Link, useLocation } from "react-router-dom";
import cn from "classnames";

import { getLinksFromPath } from "../../utils/helpers";

import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = ({ endPoint, className }) => {
  const { pathname } = useLocation();

  const links = getLinksFromPath(pathname);

  const linkCount = links.length;

  if (!linkCount) return null;

  if (endPoint) links[links.length - 1] = endPoint;

  return (
    <div className={cn(styles.container, className)}>
      <ul className={styles.list}>
        <li className={styles.item}>
          <Link className={styles.link} to="/">
            store home
          </Link>
        </li>
        {links.map((link, index) =>
          index + 1 === linkCount ? (
            <li key={link} className={styles.item}>
              <a className={styles.link}>{link}</a>
            </li>
          ) : (
            <li key={link} className={styles.item}>
              <Link to={`/${link}`} className={styles.link}>
                {link}
              </Link>
            </li>
          )
        )}
      </ul>
    </div>
  );
};

Breadcrumbs.propTypes = {
  className: PropTypes.string,
  endPoint: PropTypes.string,
};

export default Breadcrumbs;
