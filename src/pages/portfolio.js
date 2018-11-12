import React, { Component } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

class Portfolio extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>Portfolio Page</h1>
        <Link to="/">Home</Link>
      </Layout>
    );
  }
};

export default Portfolio;
