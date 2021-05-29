import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import PageLayout from "../../layouts/PageLayout";
import AsideMenu from "../../AsideMenu";
import Banners from "../../Banners";
import PromoList from "../../PromoList";

import { fetchBanners } from "../../../actions/banners";
import { fetchBoards } from "../../../actions/boards";
import { fetchShields } from "../../../actions/shields";
import { fetchKits } from "../../../actions/kits";
import { fetchAccessories } from "../../../actions/accessories";

import { sortBanners } from "../../../utils/helpers";

import {
  MAIN_PAGE_TITLE,
  BOARDS_TITLE,
  BOARDS_CATEGORY,
  BOARDS_DESCRIPTION,
  SHIELDS_TITLE,
  SHIELDS_CATEGORY,
  SHIELDS_DESCRIPTION,
  KITS_TITLE,
  KITS_CATEGORY,
  KITS_DESCRIPTION,
  ACCESSORIES_TITLE,
  ACCESSORIES_CATEGORY,
  ACCESSORIES_DESCRIPTION,
} from "./store";

const Main = () => {
  const dispatch = useDispatch();
  const bannersState = useSelector((state) => state.banners);
  const boardsState = useSelector((state) => state.boards);
  const shieldsState = useSelector((state) => state.shields);
  const kitsState = useSelector((state) => state.kits);
  const accessoriesState = useSelector((state) => state.accessories);

  useEffect(() => {
    dispatch(fetchBanners());
    dispatch(fetchBoards());
    dispatch(fetchShields());
    dispatch(fetchKits());
    dispatch(fetchAccessories());
  }, [dispatch]);

  const { banners } = bannersState;
  const { boardsPromo } = boardsState;
  const { shieldsPromo } = shieldsState;
  const { kitsPromo } = kitsState;
  const { accessoriesPromo } = accessoriesState;
  return (
    <PageLayout pageTitle={MAIN_PAGE_TITLE}>
      <AsideMenu />
      <Banners banners={sortBanners(banners)} />
      <PromoList
        title={BOARDS_TITLE}
        description={BOARDS_DESCRIPTION}
        category={BOARDS_CATEGORY}
        products={boardsPromo}
      />
      <PromoList
        title={SHIELDS_TITLE}
        description={SHIELDS_DESCRIPTION}
        category={SHIELDS_CATEGORY}
        products={shieldsPromo}
      />
      <PromoList
        title={KITS_TITLE}
        description={KITS_DESCRIPTION}
        category={KITS_CATEGORY}
        products={kitsPromo}
      />
      <PromoList
        title={ACCESSORIES_TITLE}
        description={ACCESSORIES_DESCRIPTION}
        category={ACCESSORIES_CATEGORY}
        products={accessoriesPromo}
      />
    </PageLayout>
  );
};

export default Main;
