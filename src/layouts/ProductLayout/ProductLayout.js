import React from "react";
import PropTypes from "prop-types";

import Header from "../../components/Header";
import Footer from "../../components/Footer";

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
