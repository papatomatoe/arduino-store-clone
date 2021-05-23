import React from "react";
import { Link } from "react-router-dom";
import PageLayout from "../../layouts/PageLayout";

import styles from "./Error404.module.css";
import image404 from "./image.svg";

const Error404 = () => {
  return (
    <PageLayout pageTitle="error 404 page">
      <div className={styles.wrapper}>
        <h1 className={styles.title}>oops!</h1>
        <p className={styles.text}>
          we can`t seem to find the page you are looking for.
        </p>
        <p className={styles.text}>
          Please check your URL or return to the{" "}
          <Link className={styles.link} to="/">
            Home Page.
          </Link>
        </p>
        <div className={styles.imgWrapper}>
          <img
            className={styles.img}
            src={image404}
            width="250"
            height="138"
            alt="404 page"
          />
        </div>
      </div>
    </PageLayout>
  );
};

export default Error404;
