import React from "react";

import ProductGroup from "../../layouts/ProductGroup";
import ProductList from "../../components/ProductList";

import styles from "./ProductsPage.module.css";

const ProductsPage = ({ pageTitle, category, products }) => {
  return (
    <ProductGroup pageTitle={pageTitle}>
      {products.length ? (
        <ProductList
          className={styles.list}
          category={category}
          products={products}
        />
      ) : null}
    </ProductGroup>
  );
};

export default ProductsPage;
