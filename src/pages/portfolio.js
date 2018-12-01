import React, { Component } from "react";

import Layout from "../components/layout";
import PortfolioItem from "../components/PortfolioItem";

class Portfolio extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <section className="page__section">
          {/* TODO: Loops through items and render <PortfolioItem /> for each */}
          <PortfolioItem
            // image={}
            title="Yooooo"
            description="Lorem ipsume something else here"
          />
          <PortfolioItem
            // image={}
            title="Hey yaaaaaa"
            description="Lorem ipsume something else here"
          />
        </section>
      </Layout>
    );
  }
}

export default Portfolio;
