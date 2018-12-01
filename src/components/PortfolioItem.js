import React, { Fragment } from "react";

import railsBridge from "../images/rails-bridge.png";

import "../scss/PortfolioItem.scss";

function PortfolioItem(props) {
  return (
    <Fragment>
      <div className="PortfolioItem">
        <div className="PortfolioItem__img-wrapper">
          {/* TODO: Render item specific thumbnail */}
          <img className="PortfolioItem__img" src={railsBridge} alt="" />
        </div>
        <div className="PortfolioItem__content">
          <h2 className="PortfolioItem__title">{props.title}</h2>
          <p className="PortfolioItem__description">{props.description}</p>
          {/* TODO: Conditionally render this for all except the last item */}
        </div>
      </div>
      <hr className="page__line page__line--portfolio" />
    </Fragment>
  );
}

export default PortfolioItem;
