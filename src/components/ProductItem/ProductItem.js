import React, { useState } from "react";
import PropTypes from "prop-types";

import { Link } from "react-router-dom";

import styles from "./ProductItem.module.css";

import noImage from "../../static/img/no-image.jpg";

const ProductItem = ({ description, title, image, price, link }) => {
  const [isError, setIsError] = useState(false);
  const img = image || noImage;

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
          src={isError ? noImage : img}
          alt={title}
          width="227"
          height="170"
          onError={() => setIsError(true)}
        />
      </div>
      <p className={styles.price}>$ {price.toFixed(2)}</p>
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
