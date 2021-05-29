import React from "react";
import PropTypes from "prop-types";

import Banner from "../Banner";

import styles from "./Banners.module.css";

const Banners = ({ banners }) => {
  return (
    <section className={styles.banners}>
      <h2 className="visually-hidden">Promo Banners</h2>
      <ul className={styles.bannersList}>
        {banners.length
          ? banners.map((banner) => (
              <li key={banner.id} className={styles.bannersItem}>
                <Banner {...banner} />
              </li>
            ))
          : null}
      </ul>
    </section>
  );
};

Banners.propTypes = {
  banners: PropTypes.arrayOf(
    PropTypes.shape({
      url: PropTypes.string.isRequired,
      src: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      isMain: PropTypes.bool,
    })
  ),
};

export default Banners;
