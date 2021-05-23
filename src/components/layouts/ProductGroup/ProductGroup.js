import React from "react";

import Header from "../../Header";
import Footer from "../../Footer";
import AsideMenu from "../../AsideMenu";
import Breadcrumbs from "../../Breadcrumbs";
import Sorting from "../../Sorting";

import styles from "./ProductGroup.module.css";

const ProductGroup = ({ pageTitle, children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.titleInner}>{pageTitle}</span>
        </h1>

        <Breadcrumbs />
        <div className={styles.container}>
          <AsideMenu />
          {children}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default ProductGroup;
