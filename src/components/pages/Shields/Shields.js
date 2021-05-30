import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import ProductGroup from "../../layouts/ProductGroup";
import ProductList from "../../ProductList";

import { fetchShields } from "../../../actions/shields";

import styles from "./Shields.module.css";

const Shields = () => {
    const state = useSelector((state) => state.shields);
    const dispatch = useDispatch();

    useEffect(() => dispatch(fetchShields()), [dispatch]);

    const { shields } = state;

    return (
        <ProductGroup pageTitle="Shields &amp; Modules">
            {!shields.length ? (
                <p>Loading</p>
            ) : (
                <ProductList className={styles.shields} products={shields} />
            )}
        </ProductGroup>
    );
};

export default Shields;