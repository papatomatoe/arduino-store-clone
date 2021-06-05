import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductsPage from "../ProductsPage";

import { fetchShields } from "../../actions/shields";

import { PAGE_TITLE, CATEGORY } from "./store";

const Boards = () => {
  const state = useSelector((state) => state.shields);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchShields()), [dispatch]);

  const { shields } = state;

  return (
    <ProductsPage
      pageTitle={PAGE_TITLE}
      products={shields}
      category={CATEGORY}
    />
  );
};

export default Boards;
