import React from "react";

import PageLayout from "../../layouts/PageLayout";
import AsideMenu from "../../AsideMenu";
import Banners from "../../Banners";
import PromoList from "../../PromoList";

import { sortBanners } from "../../../utils/helpers";

import styles from "./Main.module.css";

import {
  MAIN_PAGE_TITLE,
  BOARDS_TITLE,
  BOARDS_DESCRIPTION,
  SHIELDS_TITLE,
  SHIELDS_DESCRIPTION,
  KITS_TITLE,
  KITS_DESCRIPTION,
  ACCESSORIES_TITLE,
  ACCESSORIES_DESCRIPTION,
} from "./store";

import bannerImage1 from "./assets/banner_1.jpg";
import bannerImage2 from "./assets/banner_2.jpg";
import bannerImage3 from "./assets/banner_3.jpg";
import boardImg1 from "./assets/board_1.jpg";
import boardImg2 from "./assets/board_2.jpg";
import boardImg3 from "./assets/board_3.jpg";

const banners = [
  {
    id: 2,
    link: "/",
    image: bannerImage2,
    alt: "banner 2",
  },
  {
    id: 1,
    link: "/",
    image: bannerImage1,
    alt: "banner 1",
    isMain: true,
  },
  {
    id: 3,
    link: "/",
    image: bannerImage3,
    alt: "banner 3",
  },
];

const boards = [
  {
    id: 1,
    title: "arduino uno rev3",
    description:
      "The Arduino UNO is the best board to get started with electronics and coding. If this is your first experience tinkering with the platform, the UNO is the most robust board you can start playing with. The UNO is the most used and documented board of the whole Arduino family.",
    image: boardImg1,
    price: 23.0,
    link: "/",
  },
  {
    id: 2,
    title: "arduino nano every - pack",
    description:
      "Get the Nano Every in bulk to run a course or power all of your projects with Arduino.",
    image: boardImg2,
    price: 28.2,
    link: "/",
  },
  {
    id: 3,
    title: "arduino nano 33 ble sense",
    description:
      "Bring the power of AI to your pocket with Arduino’s tiniest form factor.",
    image: boardImg3,
    price: 31.1,
    link: "/",
  },
];

const Main = () => {
  return (
    <PageLayout>
      <main className={styles.main}>
        <h1 className="visually-hidden">{MAIN_PAGE_TITLE}</h1>
        <div className={styles.container}>
          <AsideMenu />
          <Banners banners={sortBanners(banners)} />
          <PromoList
            title={BOARDS_TITLE}
            description={BOARDS_DESCRIPTION}
            products={boards}
          />
          <PromoList
            title={SHIELDS_TITLE}
            description={SHIELDS_DESCRIPTION}
            products={boards}
          />
          <PromoList
            title={KITS_TITLE}
            description={KITS_DESCRIPTION}
            products={boards}
          />
          <PromoList
            title={ACCESSORIES_TITLE}
            description={ACCESSORIES_DESCRIPTION}
            products={boards}
          />
        </div>
      </main>
    </PageLayout>
  );
};

export default Main;
