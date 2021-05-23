import React from "react";
import PropTypes from "prop-types";

import Header from "../../Header";
import Footer from "../../Footer";

import styles from "./PageLayout.module.css";

const PageLayout = ({ pageTitle, children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className="visually-hidden">{pageTitle}</h1>
        <div className={styles.container}>{children}</div>
      </main>
      <Footer />
    </>
  );
};

PageLayout.propTypes = {
  pageTitle: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default PageLayout;
