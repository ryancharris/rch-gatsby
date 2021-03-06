import React, { Component } from "react";
import Layout from "../components/layout";

class NotFoundPage extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <h1>NOT FOUND</h1>
        <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
      </Layout>
    )
  }
};

export default NotFoundPage;
