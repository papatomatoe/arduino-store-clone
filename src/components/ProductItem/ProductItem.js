import React from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import styles from "./ProductItem.module.css";

const ProductItem = ({ description, title, image, price, link }) => {
  return (
    <>
      <div className={styles.imgContainer}>
        <div className={styles.info}>
          <p className={styles.description}>{description}</p>
          <button className={styles.button} type="button">
            Add to Cart
          </button>
        </div>
        <img
          className={styles.img}
          src={image}
          alt={title}
          width="227"
          height="170"
        />
      </div>
      <p className={styles.price}>$ {price}</p>
      <Link className={styles.link} to={link}>
        {title}
      </Link>
    </>
  );
};

ProductItem.propTypes = {
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  link: PropTypes.string.isRequired,
};

export default ProductItem;
