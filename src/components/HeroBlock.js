import React, { Fragment } from "react";
import PropTypes from "prop-types";

import SocialIcons from "./SocialIcons";

import "../scss/HeroBlock.scss";

import avatar from "../images/avatar.png";

function HeroBlock(props) {
  const { location, subtitle, title } = props;

  let avatarClass;
  switch (location.pathname) {
    case "/":
      avatarClass = "HeroBlock__avatar--index";
      break;
    case "/blog/":
      avatarClass = "HeroBlock__avatar--blog";
      break;
    case "/portfolio/":
      avatarClass = "HeroBlock__avatar--portfolio";
      break;
    default:
      avatarClass = "HeroBlock__avatar--blog";
      break;
  }

  return (
    <div className="HeroBlock">
      <h1 className="HeroBlock__title">{title}</h1>
      <Fragment>
        <img
          className={`HeroBlock__avatar ${avatarClass}`}
          src={avatar}
          alt="Ryan C. Harris"
        />
        <h3 className="HeroBlock__subtitle">{subtitle}</h3>
        <SocialIcons location={location} />
      </Fragment>
    </div>
  );
}

export default HeroBlock;

HeroBlock.propTypes = {
  location: PropTypes.object.isRequired,
  subtitle: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
