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
      "https://drive.google.com/file/d/1Jtanqf_VmKckWVEt0Keo834ET8BEJ8Tl/view?usp=sharing",
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
        <Link key={`${item.text.toLowerCase()}`} className={cn} to={item.to}>
          {item.text}
        </Link>
      );
    } else {
      return (
        <a
          key="cv"
          className="Nav__link"
          href={item.to}
          target="_blank"
          rel="noopener noreferrer"
        >
          {item.text}
        </a>
      );
    }
  });

  return <nav className="Nav">{navLinks}</nav>;
}

export default Nav;

Nav.propTypes = {
  path: PropTypes.string.isRequired,
};

Nav.defaultProps = {};
