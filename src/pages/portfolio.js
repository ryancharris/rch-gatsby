import React, { Component } from "react";

import Layout from "../components/layout";
import PortfolioItem from "../components/PortfolioItem";

import { portfolioPieces } from "../js/portfolio";

class Portfolio extends Component {
  createPortfolioItems = () => {
    return portfolioPieces.map(piece => {
      // console.log(portfolioPieces.indexOf(piece));
      // console.log(portfolioPieces.length);
      const lastItem = Boolean(
        portfolioPieces.indexOf(piece) === portfolioPieces.length - 1
      );
      return (
        <PortfolioItem
          key={`${piece.title}`}
          image={piece.image}
          title={piece.title}
          description={piece.description}
          lastItem={lastItem}
        />
      );
    });
  };

  render() {
    const itemsToRender = this.createPortfolioItems();

    return (
      <Layout location={this.props.location}>
        <section className="page__section">{itemsToRender}</section>
      </Layout>
    );
  }
}

export default Portfolio;
