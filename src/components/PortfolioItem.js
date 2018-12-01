import React, { Fragment } from "react";
import PropTypes from "prop-types";

import railsBridge from "../images/rails-bridge.png";

import "../scss/PortfolioItem.scss";

function PortfolioItem(props) {
  return (
    <Fragment>
      <div className="PortfolioItem">
        <div className="PortfolioItem__img-wrapper">
          <img className="PortfolioItem__img" src={railsBridge} alt="" />
        </div>
        <div className="PortfolioItem__content">
          <h2 className="PortfolioItem__title">{props.title}</h2>
          <p className="PortfolioItem__description">{props.description}</p>
          <p>{`${props.lastItem}`}</p>
        </div>
      </div>
      {!props.lastItem && <hr className="page__line page__line--portfolio" />}
    </Fragment>
  );
}

export default PortfolioItem;

PortfolioItem.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  lastItem: PropTypes.bool.isRequired,
};
