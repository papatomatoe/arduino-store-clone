import React from "react";

import styles from "./Overview.module.css";

const Overview = ({ overview }) => {
  return (
    <section>
      <h2 className="visually-hidden">Product Overview</h2>
      <div
        className={styles.text}
        dangerouslySetInnerHTML={{ __html: overview }}
      />
    </section>
  );
};

export default Overview;
