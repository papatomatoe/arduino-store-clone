import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductsPage from "../ProductsPage";

import { fetchBoards } from "../../actions/boards";

import { PAGE_TITLE, CATEGORY } from "./store";

const Boards = () => {
  const state = useSelector((state) => state.boards);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchBoards()), [dispatch]);

  const { boards } = state;

  return (
    <ProductsPage
      pageTitle={PAGE_TITLE}
      products={boards}
      category={CATEGORY}
    />
  );
};

export default Boards;
