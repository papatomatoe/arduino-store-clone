import React from "react";

import Header from "../../components/Header";
import Footer from "../../components/Footer";
import AsideMenu from "../../components/AsideMenu";
import Breadcrumbs from "../../components/Breadcrumbs";
import Sorting from "../../components/Sorting";

import styles from "./ProductGroup.module.css";

const ProductGroup = ({ pageTitle, children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>
        <h1 className={styles.title}>
          <span className={styles.titleInner}>{pageTitle}</span>
        </h1>

        <div className={styles.wrapper}>
          <Breadcrumbs className={styles.breadcrumbs} />
          <Sorting className={styles.sorting} />
        </div>
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
