import React from "react";
import { Link, useLocation } from "react-router-dom";

import { getLinksFromPath } from "../../utils/helpers";

import styles from "./Breadcrumbs.module.css";

const Breadcrumbs = () => {
  const { pathname } = useLocation();

  const links = getLinksFromPath(pathname);

  const linkCount = links.length;

  if (!linkCount) return null;

  return (
    <div className={styles.container}>
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

export default Breadcrumbs;
