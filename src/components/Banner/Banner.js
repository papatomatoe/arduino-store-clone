import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cn from "classnames";

import styles from "./Banner.module.css";

const Banner = ({ link, image, alt, className }) => {
  return (
    <Link className={styles.bannersLink} to={link}>
      <img
        className={cn(styles.bannersImg, className)}
        src={image}
        alt={alt}
        width="475"
        height="356"
      />
    </Link>
  );
};

Banner.displayName = "Banner";

Banner.propTypes = {
  /** Link to promo */
  link: PropTypes.string.isRequired,
  /** Banner image */
  image: PropTypes.string.isRequired,
  /** Alternative text */
  alt: PropTypes.string.isRequired,
  /** Additional className for image */
  className: PropTypes.string,
};

export default Banner;
