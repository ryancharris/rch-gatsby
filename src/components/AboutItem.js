import React, { Component } from "react";

import "../scss/AboutItem.scss";

import { SpeakingTypes } from "../js/speaking";
import { VolunteerTypes } from "../js/volunteer";

import codedByKids from "../images/coded-by-kids.png";
import gdi from "../images/gdi.png";
import libertyJs from "../images/liberty-js.png";
import railsBridge from "../images/rails-bridge.png";
import techGirlz from "../images/tech-girlz.png";

class AboutItem extends Component {
  getLogo = () => {
    const { type } = this.props;

    switch (type) {
      case SpeakingTypes.LIBERTY_JS:
        return libertyJs;
      case VolunteerTypes.CODED_BY_KIDS:
        return codedByKids;
      case VolunteerTypes.GIRL_DEVELOP_IT:
        return gdi;
      case VolunteerTypes.RAILS_BRIDGE:
        return railsBridge;
      case VolunteerTypes.TECH_GIRLZ:
        return techGirlz;

      default:
        return;
    }
  };

  render() {
    const { date, description, link, location, title } = this.props;
    const logo = this.getLogo();

    return (
      <div className="AboutItem">
        <div className="AboutItem__logo-wrapper">
          <a href={link} title={title}>
            <img className="AboutItem__logo" src={logo} alt={title} />
          </a>
        </div>
        <div className="AboutItem__info">
          <div className="AboutItem__info-header">
            <h4 className="AboutItem__title">{title}</h4>
            <span className="AboutItem__date">{date}</span>
          </div>
          <p className="AboutItem__description">{description}</p>
          <p className="AboutItem__location">{location}</p>
        </div>
      </div>
    );
  }
}

export default AboutItem;
