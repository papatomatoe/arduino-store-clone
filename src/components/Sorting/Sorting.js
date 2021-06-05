import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./Sorting.module.css";

const SORTING_LIST = [
  { id: 1, title: "featured" },
  { id: 2, title: "$ low to high" },
  { id: 3, title: "$ high to low" },
  { id: 4, title: "a - z" },
  { id: 5, title: "z - a" },
  { id: 6, title: "oldest to newest" },
  { id: 7, title: "newest to oldest" },
];

const Sorting = ({ className }) => {
  const [value, setValue] = useState(SORTING_LIST[0].title);
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropDownHandler = () => setIsOpen((prev) => !prev);

  const selectItemHandler = (evt) => {
    console.log(evt);
    setValue(evt.target.dataset.value);
  };

  return (
    <div className={cn(styles.container, className)}>
      <label className={styles.label}>
        <span className={styles.labelText}>sort by</span>
        <input
          className={styles.input}
          type="text"
          readOnly
          value={value}
          onClick={toggleDropDownHandler}
        />
        {isOpen && (
          <ul className={styles.list}>
            {SORTING_LIST.map(({ id, title }) => (
              <li key={id} className={styles.item} onClick={selectItemHandler}>
                <span className={styles.itemText} data-value={title}>
                  {title}
                </span>
              </li>
            ))}
          </ul>
        )}
      </label>
    </div>
  );
};

Sorting.propTypes = {
  classNames: PropTypes.string,
};

export default Sorting;
