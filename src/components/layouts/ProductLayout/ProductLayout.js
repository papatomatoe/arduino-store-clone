import React from "react";
import PropTypes from "prop-types";

import Header from "../../Header";
import Footer from "../../Footer";

import styles from "./ProductLayout.module.css";

const ProductLayout = ({ pageTitle, children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className="visually-hidden">{pageTitle}</h1>
        {children}
      </main>
      <Footer />
    </>
  );
};

ProductLayout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default ProductLayout;
