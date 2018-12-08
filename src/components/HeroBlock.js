import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";

import SocialIcons from "./SocialIcons";

import "../scss/HeroBlock.scss";

import avatar from "../images/avatar.png";

class HeroBlock extends Component {
  render() {
    const { title } = this.props;

    return (
      <div className="HeroBlock">
        <h1 className="HeroBlock__title">{title}</h1>
        <Fragment>
          <img
            className="HeroBlock__avatar"
            src={avatar}
            alt="Ryan C. Harris"
          />
          <SocialIcons />
        </Fragment>
      </div>
    );
  }
}

export default HeroBlock;

HeroBlock.propTypes = {
  title: PropTypes.string.isRequired,
};

HeroBlock.defaultProps = {};
