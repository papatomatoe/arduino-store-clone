import React from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

import styles from "./CartListDropdown.module.css";

const CartListDropdown = ({ items }) => {
  if (!items.length) return null;

  return (
    <div className={styles.cartMenuWrapper}>
      <ul className={styles.cartList}>
        {items.map((item) => (
          <li key={item.id} className={styles.cartItem}>
            <img
              className={styles.cartImg}
              src={item.image}
              alt={item.title}
              width="51"
              height="38"
            />
            <p className={styles.cartTitle}>{item.title}</p>
            <p className={styles.cartInfo}>
              <span className={styles.cartQty}>QTY: {item.qty}</span>
              <span className={styles.cartPrice}>PRICE: ${item.price}</span>
            </p>
          </li>
        ))}
      </ul>
      <div className={styles.cartBtns}>
        <Link className={styles.cartToCart} to="/cart">
          go to cart
        </Link>
        <button className={styles.cartCheckout} type="button">
          checkout
        </button>
      </div>
    </div>
  );
};

CartListDropdown.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      image: PropTypes.string,
      title: PropTypes.string,
      qty: PropTypes.number,
      price: PropTypes.number,
    })
  ),
};

export default CartListDropdown;
