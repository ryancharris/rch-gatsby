import React, { Component } from "react";

import SocialIcons from "../components/SocialIcons";
import Layout from "../components/layout";

class Index extends Component {
  render() {
    return (
      <Layout>
        <h1>Home Page</h1>
        <SocialIcons />
      </Layout>
    );
  }
};

export default Index;
