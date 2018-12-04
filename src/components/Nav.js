import React from "react";
import { Link } from "gatsby";
import PropTypes from "prop-types";

import "../scss/Nav.scss";

const navItems = [
  {
    to: "/",
    text: "Home",
    type: "INTERNAL",
  },
  {
    to: "/blog/",
    text: "Blog",
    type: "INTERNAL",
  },
  {
    to: "/portfolio/",
    text: "Portfolio",
    type: "INTERNAL",
  },
  {
    to:
      "https://drive.google.com/file/d/1h46Y5IIIllrLDuRrcy7G0UkEiZ8VfoGL/view?usp=sharing",
    text: "C.V.",
    type: "EXTERNAL",
  },
];

function getItemClassName(itemPath, actualPath) {
  const onCurrentPage = Boolean(itemPath === actualPath);
  return onCurrentPage ? "Nav__link Nav__link--active" : "Nav__link";
}

function Nav(props) {
  const { path } = props;
  const navLinks = navItems.map(item => {
    if (item.type === "INTERNAL") {
      const cn = getItemClassName(item.to, path);
      return (
        <Link className={cn} to={item.to}>
          {item.text}
        </Link>
      );
    } else {
      return (
        <a className="Nav__link" href={item.to}>
          {item.text}
        </a>
      );
    }
  });

  return (
    <nav className="Nav">
      {/* <Link to="/" className="Nav__link">
        Home
      </Link>
      <Link to="/blog/" className="Nav__link">
        Blog
      </Link>
      <Link to="/portfolio/" className="Nav__link">
        Portfolio
      </Link> */}
      {navLinks}
      {/* <a
        href="https://drive.google.com/file/d/1h46Y5IIIllrLDuRrcy7G0UkEiZ8VfoGL/view?usp=sharing"
        className="Nav__link"
      >
        C.V.
      </a> */}
    </nav>
  );
}

export default Nav;

Nav.propTypes = {
  path: PropTypes.string.isRequired,
};

Nav.defaultProps = {};
