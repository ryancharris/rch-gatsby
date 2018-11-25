import React, { Component } from "react";

import Layout from "../components/layout";

class Index extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>Home Page</h1>
      </Layout>
    );
  }
};

export default Index;
