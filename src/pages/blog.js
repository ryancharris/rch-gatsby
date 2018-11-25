import React, { Component } from "react";

import Layout from "../components/layout";

class Blog extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>Blog Index</h1>
      </Layout>
    )
  }
};

export default Blog;
