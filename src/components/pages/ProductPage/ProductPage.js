import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchProduct } from "../../../actions/product";
import { fetchBoards } from "../../../actions/boards";

import ProductLayout from "../../layouts/ProductLayout";
import Breadcrumbs from "../../Breadcrumbs";
import AsideMenu from "../../AsideMenu";
import ProductList from "../../ProductList";
import Tabs from "../../Tabs";

import Overview from "./Overview";
import TechSpecs from "./TechSpecs";
import Documentation from "./Documentation";

import { PALLET } from "./store";

import styles from "./ProductPage.module.css";

const ProductPage = () => {
  const { name } = useParams();
  const dispatch = useDispatch();
  const state = useSelector((state) => state.product);
  const boardsState = useSelector((state) => state.boards);
  const [productQty, setProductQty] = useState(1);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);

  const { product } = state;
  const { boards } = boardsState;

  useEffect(() => {
    dispatch(fetchProduct(name));
    dispatch(fetchBoards());
  }, [dispatch, name]);

  const changeHandler = (evt) => setProductQty(evt.target.value);
  const previewHandler = (index) => setSelectedImageIndex(index);

  return (
    <ProductLayout pageTitle={product?.title || "product page"}>
      {product ? (
        <>
          <section className={styles.mainInfo}>
            <h2 className="visually-hidden">Product purchase information</h2>
            <div className={styles.mainInfoContainer}>
              <div className={styles.leftCol}>
                <h3 className={styles.productTitle}>{product.title}</h3>
                <p className={styles.code}>
                  <span className={styles.prefix}>Code:</span>
                  <span className={styles.value}>{product.code}</span>
                </p>
                <p className={styles.barcode}>
                  <span className={styles.prefix}>Barcode:</span>
                  <span className={styles.value}>{product.barcode}</span>
                </p>
                <div className={styles.imageWrapper}>
                  <img
                    className={styles.img}
                    src={product.images.main}
                    alt={product.title}
                    width="517"
                    height="328"
                  />
                </div>
              </div>
              <div className={styles.rightCol}>
                <p className={styles.price}>
                  <span className={styles.value}>
                    ${product.price.toFixed(2)}
                  </span>
                  <span className={styles.tax}>tax not included</span>
                </p>
                <div className={styles.qtyWrapper}>
                  <label className={styles.qtyLabel} htmlFor="qty">
                    Quantity:
                  </label>
                  <input
                    id="qty"
                    onChange={changeHandler}
                    className={styles.qtyInput}
                    type="number"
                    min="1"
                    value={productQty}
                    max={product.qty}
                  />
                </div>
                <button className={styles.addToCart} type="button">
                  Add to Cart
                </button>
                <button className={styles.addToWish} type="button">
                  Add to Wishlist
                </button>
                <p className={styles.infoText}>Want to learn more?</p>
                <button className={styles.getStart} type="button">
                  Getting Started
                </button>
              </div>
            </div>
          </section>
          <div className={styles.content}>
            <Breadcrumbs endPoint={product.title} />
            <div className={styles.container}>
              <AsideMenu />
              <div className={styles.wrapper}>
                <section>
                  <h2 className="visually-hidden">Product description</h2>
                  <ul className={styles.features}>
                    {product.labels && product.labels.length
                      ? product.labels.map((label, index) => (
                          <li
                            key={index}
                            className={styles.featuresLabel}
                            style={{ backgroundColor: PALLET[index] }}
                          >
                            {label}
                          </li>
                        ))
                      : null}
                  </ul>
                  <p className={styles.description}>{product.description}</p>
                </section>
                <section>
                  <h2 className="visually-hidden">Product Images</h2>
                  <div className={styles.imagedWrapper}>
                    <div className={styles.bigImageWrapper}>
                      <img
                        className={styles.bigImage}
                        src={product.images.full[selectedImageIndex]}
                        alt={`${product.title}`}
                      />
                    </div>
                    <div className={styles.previewImagesWrapper}>
                      <ul className={styles.previewImagesList}>
                        {product.images.prw && product.images.prw.length
                          ? product.images.prw.map((prw, index) => (
                              <li
                                key={index}
                                className={styles.previewImagesItem}
                              >
                                <button
                                  type="button"
                                  onClick={() => previewHandler(index)}
                                >
                                  <img
                                    src={product.images.prw[index]}
                                    alt="product preview"
                                  />
                                </button>
                              </li>
                            ))
                          : null}
                      </ul>
                    </div>
                  </div>
                </section>
              </div>
              <Tabs
                tabs={[
                  {
                    title: "Overview",
                    Content: Overview,
                    props: { overview: product.overview },
                  },
                  {
                    title: "Tech Specs",
                    Content: TechSpecs,
                    props: {
                      techSpecs: product.tech_spec,
                    },
                  },
                  {
                    title: "Documentation",
                    Content: Documentation,
                    props: {
                      documentation: product.docs,
                      scheme: product.images.diagram,
                    },
                  },
                ]}
              />
              <section className={styles.relatedProducts}>
                <h2>Related Products</h2>
                <ProductList
                  className={styles.relatedProductsList}
                  category={"boards"}
                  products={boards.slice(0, 3)}
                />
              </section>
            </div>
          </div>
        </>
      ) : null}
    </ProductLayout>
  );
};

export default ProductPage;
