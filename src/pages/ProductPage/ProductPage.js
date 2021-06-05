import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { fetchProduct } from "../../actions/product";
import { fetchBoards } from "../../actions/boards";

import ProductLayout from "../../layouts/ProductLayout";
import Breadcrumbs from "../../components/Breadcrumbs";
import Section from "../../components/Section";
import AsideMenu from "../../components/AsideMenu";
import ProductList from "../../components/ProductList";
import Tabs from "../../components/Tabs";

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

  const changeHandler = (evt) => {
    const qty = evt.target.value;
    const newQty = qty > product.qty ? product.qty : qty;
    setProductQty(newQty);
  };

  const previewHandler = (index) => setSelectedImageIndex(index);

  return (
    <ProductLayout pageTitle={product?.title || "product page"}>
      {product ? (
        <>
          <Section
            className={styles.mainInfo}
            sectionTitle={"Product purchase information"}
          >
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
          </Section>
          <div className={styles.content}>
            <Breadcrumbs endPoint={product.title} />
            <div className={styles.container}>
              <AsideMenu />
              <div className={styles.wrapper}>
                <Section sectionTitle={"Product description"}>
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
                </Section>
                <Section sectionTitle={"Product Images"}>
                  <div className={styles.imagedWrapper}>
                    <div className={styles.bigImageWrapper}>
                      {product.images.full && product.images.full.length ? (
                        <img
                          className={styles.bigImage}
                          src={product.images.full[selectedImageIndex]}
                          alt={`${product.title}`}
                        />
                      ) : null}
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
                </Section>
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
              <Section
                className={styles.relatedProducts}
                sectionTitle={"Related Products"}
                isVisibleTitle
              >
                <ProductList
                  className={styles.relatedProductsList}
                  category={"boards"}
                  products={boards.slice(0, 3)}
                />
              </Section>
            </div>
          </div>
        </>
      ) : null}
    </ProductLayout>
  );
};

export default ProductPage;
