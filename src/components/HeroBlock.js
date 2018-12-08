import React, { Fragment } from "react";
import PropTypes from "prop-types";

import SocialIcons from "./SocialIcons";

import "../scss/HeroBlock.scss";

import avatar from "../images/avatar.png";

function HeroBlock(props) {
  const { location, title } = props;

  return (
    <div className="HeroBlock">
      <h1 className="HeroBlock__title">{title}</h1>
      <Fragment>
        <img className="HeroBlock__avatar" src={avatar} alt="Ryan C. Harris" />
        <SocialIcons location={location} />
      </Fragment>
    </div>
  );
}

export default HeroBlock;

HeroBlock.propTypes = {
  location: PropTypes.object.isRequired,
  title: PropTypes.string.isRequired,
};
