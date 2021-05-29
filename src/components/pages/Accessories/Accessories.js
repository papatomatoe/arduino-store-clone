import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductsPage from "../ProductsPage";

import { fetchAccessories } from "../../../actions/accessories";

import { PAGE_TITLE, CATEGORY } from "./store";

const Accessories = () => {
  const state = useSelector((state) => state.accessories);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchAccessories()), [dispatch]);

  const { accessories } = state;

  return (
    <ProductsPage
      pageTitle={PAGE_TITLE}
      products={accessories}
      category={CATEGORY}
    />
  );
};

export default Accessories;
