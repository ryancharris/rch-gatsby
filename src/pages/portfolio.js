import React, { Component } from "react";

import Layout from "../components/layout";

class Portfolio extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>Portfolio Page</h1>
      </Layout>
    );
  }
};

export default Portfolio;
