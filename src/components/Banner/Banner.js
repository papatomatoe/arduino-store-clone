import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cn from "classnames";

import styles from "./Banner.module.css";

const Banner = ({ url, src, description, className }) => {
  return (
    <Link className={styles.bannersLink} to={url}>
      <img
        className={cn(styles.bannersImg, className)}
        src={src}
        alt={description}
        width="475"
        height="356"
      />
    </Link>
  );
};

Banner.displayName = "Banner";

Banner.propTypes = {
  /** Link to promo */
  url: PropTypes.string.isRequired,
  /** Banner image */
  src: PropTypes.string.isRequired,
  /** Alternative text */
  description: PropTypes.string.isRequired,
  /** Additional className for image */
  className: PropTypes.string,
};

export default Banner;
