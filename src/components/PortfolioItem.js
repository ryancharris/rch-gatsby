import React, { Fragment } from "react";
import PropTypes from "prop-types";

import "../scss/PortfolioItem.scss";

function PortfolioItem(props) {
  return (
    <Fragment>
      <a href={props.link} className="PortfolioItem__link" title={props.title}>
        <div className="PortfolioItem">
          <div className="PortfolioItem__img-wrapper">
            <img
              className="PortfolioItem__img"
              src={props.image}
              alt={props.title}
            />
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
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  lastItem: PropTypes.bool.isRequired,
  link: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
};

PortfolioItem.defaultProps = {};
