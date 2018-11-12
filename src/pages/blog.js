import React, { Component } from "react";
import { Link } from "gatsby";

import Layout from "../components/layout";

class Blog extends Component {
  render() {
    return (
      <Layout>
        <h1>Blog Index</h1>
        <Link to="/">Home</Link>
      </Layout>
    )
  }
};

export default Blog;
