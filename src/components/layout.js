import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import HeroBlock from "./HeroBlock";
import Nav from "./Nav";

import "../scss/normalize.css";
import "../scss/Layout.scss";

class Layout extends Component {
  createHeroSubtitle = (path) => {
    switch (path) {
      case "/":
        return "hi."
      case "/blog/":
        return "blog."
      case "/portfolio/":
        return "work."
      default:
        break;
    }
  }

  render() {
    const { children, location } = this.props;
    const heroSubtitle = this.createHeroSubtitle(location.pathname);

    return (
      <Fragment>
        <StaticQuery
          query={graphql`
            query SiteTitleQuery {
              site {
                siteMetadata {
                  title
                  description
                }
              }
            }
          `}
          render={data => (
            <Helmet
              title={data.site.siteMetadata.title}
              meta={[
                { name: "description", content: data.site.siteMetadata.description }
              ]}
            />
          )}
        />

        <main className="Layout">
          <div className="Layout__content">
            <section className="Layout__nav">
              <Nav />
            </section>
            <section className="Layout__hero">
              <HeroBlock title="Ryan C. Harris" subtitle={heroSubtitle} />
            </section>
            <section className="Layout__body">
              {children}
            </section>
          </div>
        </main>
      </Fragment>
    )
  }
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
