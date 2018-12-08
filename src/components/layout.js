import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import ContentCard from "./ContentCard";
import Footer from "./Footer";
import HeroBlock from "./HeroBlock";
import Nav from "./Nav";
// import SocialIcons from "./SocialIcons";

import "../scss/normalize.css";
import "../scss/Layout.scss";

class Layout extends Component {
  createLayoutClassName = path => {
    switch (path) {
      case "/":
        return "Layout--index";
      case "/blog/":
        return "Layout--blog";
      case "/portfolio/":
        return "Layout--portfolio";
      default:
        return "Layout--blog";
    }
  };

  render() {
    const { children, location } = this.props;
    const layoutClass = `Layout ${this.createLayoutClassName(
      location.pathname
    )}`;

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
                {
                  name: "description",
                  content: data.site.siteMetadata.description,
                },
              ]}
            />
          )}
        />

        <main className={layoutClass}>
          <div className="Layout__content">
            <header className="Layout__nav">
              <Nav path={location.pathname} />
            </header>
            <section className="Layout__body">
              {/* <SocialIcons /> */}
              <ContentCard>
                <section className="Layout__hero">
                  <HeroBlock title="Ryan C. Harris" />
                </section>
                {children}
              </ContentCard>
            </section>
            <Footer />
          </div>
        </main>
      </Fragment>
    );
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
