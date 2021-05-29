import React from "react";

import styles from "./TechSpecs.module.css";

const TechSpecs = ({ techSpecs }) => {
  return (
    <section>
      <h2 className="visually-hidden">Tech Specs</h2>
      {techSpecs && techSpecs.length ? (
        <table className={styles.table}>
          <tbody>
            {techSpecs.map(([name, value], index) => (
              <tr key={index}>
                <td>{name}</td>
                <td>{value}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : null}
    </section>
  );
};

export default TechSpecs;
