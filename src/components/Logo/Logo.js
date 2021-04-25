import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import cn from "classnames";

import styles from "./Logo.module.css";

const Logo = ({ img, alt, link, width, height, className }) => {
  return (
    <Link to={link} className={cn(styles.logo, className)}>
      <img
        className={styles.img}
        src={img}
        alt={alt}
        width={width}
        height={height}
      />
    </Link>
  );
};

Logo.defaultProps = {
  img: "",
  link: "/",
  alt: "default alternative description",
  width: 113,
  height: 15,
};

Logo.propTypes = {
  img: PropTypes.string,
  link: PropTypes.string,
  alt: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
};

export default Logo;
