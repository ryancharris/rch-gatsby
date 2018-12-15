import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "../scss/BlogPostHero.scss";

function BlogPostHero(props) {
  const { caption, date, image, link, minutes, title } = props;
  return (
    <Fragment>
      <div
        className="BlogPostHero"
        style={{
          background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.25)), ${image}`,
          backgroundSize: "cover",
          backgroundPosition: "center center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <h1 className="BlogPostHero__title">{title}</h1>
        <h4 className="BlogPostHero__time">{minutes} min. read</h4>
        <h4 className="BlogPostHero__date">{date}</h4>
      </div>
      <caption className="BlogPostHero__caption">
        Image source{" "}
        <a className="page__blog-link" href={link}>
          {caption}
        </a>
      </caption>
      <hr className="page__line page__line--blog" />
    </Fragment>
  );
}

export default BlogPostHero;

BlogPostHero.propTypes = {
  caption: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  minutes: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
};
