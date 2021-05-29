import React from "react";

import styles from "./Documentation.module.css";

const Documentation = ({ documentation, scheme }) => {
  return (
    <section>
      <h2 className="visually-hidden">Documentation</h2>
      <h3 className={styles.title}>OSH: Schematics</h3>
      <p className={styles.docDescription}>{documentation}</p>
      <ul className={styles.links}>
        <li>
          <a href="/" download>
            Eagle files in .ZIP
          </a>
        </li>
        <li>
          <a href="/" download>
            Schematics in .PDF
          </a>
        </li>
        <li>
          <a href="/" download>
            Board size in .DXF
          </a>
        </li>
      </ul>
      <h3 className={styles.title}>Pin-out Diagram</h3>
      <img src={scheme} alt="scheme" width="587" height="587" />
      <p className={styles.download}>
        Download the full pin-out diagram as PDF{" "}
        <a href="/" download>
          here
        </a>
      </p>
    </section>
  );
};

export default Documentation;
