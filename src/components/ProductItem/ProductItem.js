import React, { useState } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { addToCart } from "../../actions/cart";

import styles from "./ProductItem.module.css";

import noImage from "../../static/img/no-image.jpg";

const ProductItem = ({ description, id, title, image, price, link }) => {
  const dispatch = useDispatch();
  const [isError, setIsError] = useState(false);
  const img = image || noImage;

  const onErrorHandler = () => setIsError(true);
  const addToCartHandler = () =>
    dispatch(addToCart({ id, title, image, price, link }));

  return (
    <>
      <div className={styles.imgContainer}>
        <div className={styles.info}>
          <p className={styles.description}>{description}</p>
          <button
            className={styles.button}
            type="button"
            onClick={addToCartHandler}
          >
            Add to Cart
          </button>
        </div>
        <img
          className={styles.img}
          src={isError ? noImage : img}
          alt={title}
          width="227"
          height="170"
          onError={onErrorHandler}
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
