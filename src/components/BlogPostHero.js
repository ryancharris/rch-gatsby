import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "../scss/BlogPostHero.scss";

function BlogPostHero(props) {
  const { date, image, minutes, title } = props;
  return (
    <Fragment>
      <div
        className="BlogPostHero"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.25)), ${image}`,
          backgroundSize: "cover",
        }}
      >
        <h1 className="BlogPostHero__title">{title}</h1>
        <h4 className="BlogPostHero__time">
          {minutes} minute
          {minutes > 1 ? "s " : " "}
          read
        </h4>
        <h4 className="BlogPostHero__date">{date}</h4>
      </div>
      <hr className="page__line page__line--blog" />
    </Fragment>
  );
}

export default BlogPostHero;

BlogPostHero.propTypes = {
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  minutes: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
