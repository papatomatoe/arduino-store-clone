import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductGroup from "../../layouts/ProductGroup";
import ProductList from "../../ProductList";

import { fetchBoards } from "../../../actions/boards";

import styles from "./Boards.module.css";

const Boards = () => {
  const state = useSelector((state) => state.boards);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchBoards()), [dispatch]);

  const { boards } = state;

  return (
    <ProductGroup pageTitle="Boards &amp; Modules">
      {!boards.length ? (
        <p>Loading</p>
      ) : (
        <ProductList className={styles.boards} products={boards} />
      )}
    </ProductGroup>
  );
};

export default Boards;
