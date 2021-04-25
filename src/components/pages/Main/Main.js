import React from "react";
import { Link } from "react-router-dom";

import PageLayout from "../../layouts/PageLayout";

import styles from "./Main.module.css";

import banner1 from "./assets/banner_1.jpg";
import banner2 from "./assets/banner_2.jpg";
import banner3 from "./assets/banner_3.jpg";

const Main = () => {
  return (
    <PageLayout>
      <main className={styles.main}>
        <h1 className="visually-hidden">Main Page Arduino Store</h1>
        <div className={styles.container}>
          <ul className={styles.menu}>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                most popular
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                new products
              </Link>
            </li>
            <li className={styles.item}>
              <Link className={styles.link} to="/">
                contact us
              </Link>
            </li>
          </ul>
          <section className={styles.banners}>
            <h2 className="visually-hidden">Promo Banners</h2>
            <ul className={styles.bannersList}>
              <li className={styles.bannersItem}>
                <Link className={styles.bannersLink} to="/">
                  <img
                    className={styles.bannersImg}
                    src={banner1}
                    alt="banner text"
                    width="475"
                    height="356"
                  />
                </Link>
              </li>
              <li className={styles.bannersItem}>
                <Link className={styles.bannersLink} to="/">
                  <img
                    className={styles.bannersImg}
                    src={banner2}
                    alt="banner text"
                    width="475"
                    height="356"
                  />
                </Link>
              </li>
              <li className={styles.bannersItem}>
                <Link className={styles.bannersLink} to="/">
                  <img
                    className={styles.bannersImg}
                    src={banner3}
                    alt="banner text"
                    width="475"
                    height="356"
                  />
                </Link>
              </li>
            </ul>
          </section>
          <section className={styles.promo}>
            <h2 className={styles.promoTitle}>Boards</h2>
            <Link className={styles.promoToAllLink} to="/boards">
              see all
            </Link>
            <p className={styles.promoText}>
              Our selection of most used Arduino boards
            </p>
            <ul className={styles.promoList}>
              <li className={styles.promoItem}>
                <div className={styles.promoImgContainer}>
                  <div className={styles.promoInfo}>
                    <p className={styles.promoDescription}>
                      The Arduino UNO is the best board to get started with
                    </p>
                    <button className={styles.promoButton} type="button">
                      Add to Cart
                    </button>
                  </div>
                  <img
                    className={styles.promoImg}
                    src=""
                    alt="alt text for item"
                    width="227"
                    height="170"
                  />
                </div>
                <p className={styles.promoPrice}>$ 23.00</p>
                <Link className={styles.promoLink} to="/">
                  Arduino Uno Rev3
                </Link>
              </li>
              <li className={styles.promoItem}>
                <div className={styles.promoImgContainer}>
                  <div className={styles.promoInfo}>
                    <p className={styles.promoDescription}>
                      The Arduino UNO is the best board to get started with
                    </p>
                    <button className={styles.promoButton} type="button">
                      Add to Cart
                    </button>
                  </div>
                  <img
                    className={styles.promoImg}
                    src=""
                    alt="alt text for item"
                    width="227"
                    height="170"
                  />
                </div>
                <p className={styles.promoPrice}>$ 23.00</p>
                <Link className={styles.promoLink} to="/">
                  Arduino Uno Rev3
                </Link>
              </li>
              <li className={styles.promoItem}>
                <div className={styles.promoImgContainer}>
                  <div className={styles.promoInfo}>
                    <p className={styles.promoDescription}>
                      The Arduino UNO is the best board to get started with
                    </p>
                    <button className={styles.promoButton} type="button">
                      Add to Cart
                    </button>
                  </div>
                  <img
                    className={styles.promoImg}
                    src=""
                    alt="alt text for item"
                    width="227"
                    height="170"
                  />
                </div>
                <p className={styles.promoPrice}>$ 23.00</p>
                <Link className={styles.promoLink} to="/">
                  Arduino Uno Rev3
                </Link>
              </li>
            </ul>
          </section>
        </div>
      </main>
    </PageLayout>
  );
};

export default Main;
