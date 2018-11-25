import React, { Component } from "react";

import "../scss/HeroBlock.scss";

import avatar from "../images/avatar.png";

class HeroBlock extends Component {
  render() {
    const {location, title, subtitle} = this.props;

    return (
      <div className="HeroBlock">
        {location.pathname === "/" && <img className="HeroBlock__avatar" src={avatar} alt="Ryan Harris" />}
        <h1 className="HeroBlock__title">{title}</h1>
        <h3 className="HeroBlock__subtitle">{subtitle}</h3>
      </div>
    )
  }
};

export default HeroBlock;
