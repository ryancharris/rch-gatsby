import React, { Component, Fragment } from "react";

import SocialIcons from "./SocialIcons";

import "../scss/HeroBlock.scss";

import avatar from "../images/avatar.png";

class HeroBlock extends Component {
  render() {
    const {
      // location,
      title,
      // subtitle
    } = this.props;

    return (
      <div className="HeroBlock">
        <h1 className="HeroBlock__title">{title}</h1>
        <Fragment>
          <img
            className="HeroBlock__avatar"
            src={avatar}
            alt="Ryan C. Harris"
          />
          {/* {location.pathname === "/" && <SocialIcons />} */}
          <SocialIcons />
        </Fragment>
        {/* {location.pathname !== "/" && (
          <h3 className="HeroBlock__subtitle">{subtitle}</h3>
        )} */}
      </div>
    );
  }
}

export default HeroBlock;
