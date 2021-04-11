import React from "react";
import PropTypes from "prop-types";

import Header from "../../Header";
import Footer from "../../Footer";

const PageLayout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};

PageLayout.propTypes = {
  children: PropTypes.any,
};

export default PageLayout;
