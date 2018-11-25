import React, { Component, Fragment } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import ContentCard from "./ContentCard";
import HeroBlock from "./HeroBlock";
import Nav from "./Nav";
// import SocialIcons from "./SocialIcons";

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

  createLayoutClassName = (path) => {
    switch (path) {
      case "/":
        return "Layout--index"
      case "/blog/":
        return "Layout--blog"
      case "/portfolio/":
        return "Layout--portfolio"
      default:
        break;
    }
  }

  render() {
    const { children, location } = this.props;
    const heroSubtitle = this.createHeroSubtitle(location.pathname);
    const layoutClass = `Layout ${this.createLayoutClassName(location.pathname)}`;

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

        <main className={layoutClass}>
          <div className="Layout__content">
            <section className="Layout__nav">
              <Nav />
            </section>
            <section className="Layout__body">
              {/* <SocialIcons /> */}
              <ContentCard>
            <section className="Layout__hero">
              <HeroBlock location={location} title="Ryan C. Harris" subtitle={heroSubtitle} />
            </section>
                {children}
              </ContentCard>
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
