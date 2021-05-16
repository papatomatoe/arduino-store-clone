import React from "react";
import PropTypes from "prop-types";

import ProductItem from "../ProductItem";

import styles from "./ProductList.module.css";

const ProductList = ({ products }) => {
  if (!products) return null;

  return (
    <ul className={styles.list}>
      {products &&
        products.length &&
        products.map((product) => (
          <li key={product.id} className={styles.item}>
            <ProductItem {...product} />
          </li>
        ))}
    </ul>
  );
};

ProductList.propTypes = {
  products: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.oneOfType([PropTypes.string, PropTypes.number]).isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string,
      image: PropTypes.string.isRequired,
      price: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
        .isRequired,
      link: PropTypes.string.isRequired,
    })
  ),
};

export default ProductList;
