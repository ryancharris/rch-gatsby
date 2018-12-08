import React, { Component } from "react";

import Layout from "../components/layout";
import PortfolioItem from "../components/PortfolioItem";

import { portfolioPieces } from "../js/portfolio";

import grittysBlogImg from "../images/portfolio/grittys-blog.png";
import portfolioImg from "../images/portfolio/portfolio-v1.png";
import ticTacToeImg from "../images/portfolio/tic-tac-toe.png";
import whoSpeaksImg from "../images/portfolio/who-speaks-for-us.png";
import whoImg from "../images/portfolio/who.png";

function getItemImage(itemTitle) {
  switch (itemTitle) {
    case "Gritty's Blog":
      return grittysBlogImg;
    case "Portfolio v1.0":
      return portfolioImg;
    case "Tic Tac Toe":
      return ticTacToeImg;
    case "Who":
      return whoImg;
    case "Who Speaks for Us?":
      return whoSpeaksImg;
    default:
      return null;
  }
}

class Portfolio extends Component {
  createPortfolioItems = () => {
    return portfolioPieces.map(piece => {
      const lastItem = Boolean(
        portfolioPieces.indexOf(piece) === portfolioPieces.length - 1
      );
      return (
        <PortfolioItem
          key={`${piece.title}`}
          title={piece.title}
          description={piece.description}
          lastItem={lastItem}
          link={piece.link}
          image={getItemImage(piece.title)}
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
