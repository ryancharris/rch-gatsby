import React, { Component } from "react";

import "../scss/ContentCard.scss";

class ContentCard extends Component {
  render() {
    return <div className="ContentCard">{this.props.children}</div>;
  }
}

export default ContentCard;
