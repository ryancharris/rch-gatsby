import React, { Component } from "react";

import "../scss/HeroBlock.scss";

class HeroBlock extends Component {
  render() {
    const {title, subtitle} = this.props;
    return (
      <div className="HeroBlock">
        <h1 className="HeroBlock__title">{title}</h1>
        <h3 className="HeroBlock__subtitle">{subtitle}</h3>
      </div>
    )
  }
};

export default HeroBlock;
