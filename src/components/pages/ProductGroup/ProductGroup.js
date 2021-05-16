import React from "react";

import PageLayout from "../../layouts/PageLayout";
import AsideMenu from "../../AsideMenu";

// import styles from "./ProductGroup.module.css";

// NOTE: Сделать разные лейауты для разных страниц: BaseLayout, PageLayout, ProductPageLayout

const ProductGroup = () => {
  return (
    <PageLayout>
      <AsideMenu />
      <div>Product Group</div>
    </PageLayout>
  );
};

export default ProductGroup;
