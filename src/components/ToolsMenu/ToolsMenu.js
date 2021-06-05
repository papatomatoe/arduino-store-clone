import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

import CartListDropdown from "../CartListDropdown";

import styles from "./ToolsMenu.module.css";

const ToolsMenu = ({ links }) => {
  const environmentState = useSelector((state) => state.environment);
  const cartState = useSelector((state) => state.cart);
  const { isLoggedIn } = environmentState;
  const { products } = cartState;

  if (!links) return null;

  return (
    <div className={styles.userWrapper}>
      <ul className={styles.userMenu}>
        {links.length
          ? links.map(({ title, qty }, idx) => (
              <li className={styles.userMenu__item} key={`${idx}-${title}`}>
                {qty ? (
                  <div className={styles.userMenu__label}>
                    <p>{qty}</p>
                  </div>
                ) : null}

                {isLoggedIn ? (
                  <button
                    className={styles.userMenu__btn}
                    aria-label={title}
                  ></button>
                ) : (
                  <Link
                    to="/login"
                    className={styles.userMenu__btn}
                    aria-label={title}
                  ></Link>
                )}
              </li>
            ))
          : null}
      </ul>
      <CartListDropdown items={products} />
    </div>
  );
};

ToolsMenu.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      link: PropTypes.string,
      qty: PropTypes.number,
    })
  ).isRequired,
};

export default ToolsMenu;
