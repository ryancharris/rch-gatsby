import React, { Component } from "react";
import { Link } from "gatsby";

import "../scss/Nav.scss";

class Nav extends Component {
  render() {
    return (
      <nav className="Nav">
        <Link to="/" className="Nav__link">Home</Link>
        <Link to="/blog/" className="Nav__link">Blog</Link>
        <Link to="/contact/" className="Nav__link">Portfolio</Link>
        <a href="https://drive.google.com/file/d/1h46Y5IIIllrLDuRrcy7G0UkEiZ8VfoGL/view?usp=sharing" className="Nav__link">C.V.</a>
      </nav>
    )
  }
};

export default Nav;
