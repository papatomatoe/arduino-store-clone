import React, { useState } from "react";
import PropTypes from "prop-types";
import cn from "classnames";

import styles from "./Tabs.module.css";

const Tabs = ({ tabs }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const tabHandler = (index) => setActiveTabIndex(index);

  const { Content, props } = tabs[activeTabIndex];

  return (
    <>
      <div className={styles.tabs}>
        <ul className={styles.tabList}>
          {tabs.map(({ title }, index) => (
            <li key={index} className={styles.tabItem}>
              <button
                className={cn(styles.tabButton, {
                  [styles["tabButton--active"]]: activeTabIndex === index,
                })}
                type="button"
                onClick={() => tabHandler(index)}
              >
                {title}
              </button>
            </li>
          ))}
        </ul>
        <Content {...props} />
      </div>
    </>
  );
};
Tabs.propTypes = {
  tabs: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string.isRequired,
      Content: PropTypes.elementType.isRequired,
      props: PropTypes.objectOf(PropTypes.any),
    })
  ).isRequired,
};
export default Tabs;
