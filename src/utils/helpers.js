export const sortBanners = (banners) => {
  const mainBanner = banners.find((banner) => banner.isMain);

  if (!mainBanner) {
    return banners;
  }

  const resBanners = banners.filter((banner) => banner.id !== mainBanner.id);

  return [mainBanner, ...resBanners];
};
