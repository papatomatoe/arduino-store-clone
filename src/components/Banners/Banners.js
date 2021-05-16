import React from "react";
import PropTypes from "prop-types";

import Banner from "../Banner";

import styles from "./Banners.module.css";

const Banners = ({ banners }) => {
  return (
    <section className={styles.banners}>
      <h2 className="visually-hidden">Promo Banners</h2>
      <ul className={styles.bannersList}>
        {banners &&
          banners.length &&
          banners.map((banner) => (
            <li key={banner.id} className={styles.bannersItem}>
              <Banner {...banner} />
            </li>
          ))}
      </ul>
    </section>
  );
};

Banners.propTypes = {
  banners: PropTypes.arrayOf(
    PropTypes.shape({
      link: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      isMain: PropTypes.bool,
    })
  ),
};

export default Banners;
