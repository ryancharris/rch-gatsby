import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "../scss/PortfolioItem.scss";

function PortfolioItem(props) {
  return (
    <Fragment>
      <a href={props.link} className="PortfolioItem__link" title={props.title}>
        <div className="PortfolioItem">
          <div className="PortfolioItem__img-wrapper">
            {/* TODO: Wire up actual images for each project */}
            {/* <img className="PortfolioItem__img" src={} alt="" /> */}
          </div>
          <div className="PortfolioItem__content">
            <h2 className="PortfolioItem__title">{props.title}</h2>
            <p className="PortfolioItem__description">{props.description}</p>
          </div>
        </div>
      </a>
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

PortfolioItem.defaultProps = {};
