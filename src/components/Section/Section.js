import React from "react";
import PropTypes from "prop-types";
import cn from "classnames";

const Section = ({
  className,
  sectionTitle,
  isVisibleTitle = false,
  children,
}) => {
  return (
    <section className={className}>
      <h2 className={cn({ "visually-hidden": !isVisibleTitle })}>
        {sectionTitle}
      </h2>
      {children}
    </section>
  );
};

Section.propTypes = {
  className: PropTypes.string,
  isVisibleTitle: PropTypes.bool,
  sectionTitle: PropTypes.string.isRequired,
  children: PropTypes.any,
};

export default Section;
