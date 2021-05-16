import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import ProductList from "../ProductList";

import styles from "./PromoList.module.css";

const PromoList = ({ products, title, description }) => {
  return (
    <section className={styles.promo}>
      <h2 className={styles.promoTitle}>{title}</h2>
      <Link className={styles.promoToAllLink} to="/boards">
        see all
      </Link>
      <p className={styles.promoText}>{description}</p>
      <ProductList products={products} />
    </section>
  );
};

PromoList.propTypes = {
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default PromoList;
