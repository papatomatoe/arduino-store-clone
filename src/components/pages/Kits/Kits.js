import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductsPage from "../ProductsPage";

import { fetchKits } from "../../../actions/kits";

import { PAGE_TITLE, CATEGORY } from "./store";

const Kits = () => {
  const state = useSelector((state) => state.kits);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchKits()), [dispatch]);

  const { kits } = state;

  return (
    <ProductsPage pageTitle={PAGE_TITLE} products={kits} category={CATEGORY} />
  );
};

export default Kits;
