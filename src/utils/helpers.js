export const sortBanners = (banners) => {
  const mainBanner = banners.find((banner) => banner.isMain);

  if (!mainBanner) {
    return banners;
  }

  const resBanners = banners.filter((banner) => banner.id !== mainBanner.id);

  return [mainBanner, ...resBanners];
};

export const getLinksFromPath = (path) => {
  const links = path.split("/");
  links.shift();
  return links;
};
