import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import ProductItem from "../ProductItem";

import styles from "./ProductList.module.css";

const ProductList = ({ products, category, className }) => {
  if (!products) return null;

  return (
    <ul className={cn(styles.list, className)}>
      {products &&
        products.length &&
        products.map((product) => (
          <li key={product.id} className={styles.item}>
            <ProductItem {...product} link={`/${category}/${product.link}`} />
          </li>
        ))}
    </ul>
  );
};

ProductList.propTypes = {
  className: PropTypes.string,
  category: PropTypes.string.isRequired,
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
  ).isRequired,
};

export default ProductList;
