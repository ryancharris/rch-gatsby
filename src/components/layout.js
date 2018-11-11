import React, { Fragment } from "react";
import PropTypes from "prop-types";
import Helmet from "react-helmet";
import { StaticQuery, graphql } from "gatsby";

import Nav from "./Nav";

import "../scss/normalize.css";
import "../scss/Layout.scss";

const Layout = ({ children }) => (
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
      <Fragment>
        <Helmet
          title={data.site.siteMetadata.title}
          meta={[
            { name: "description", content: data.site.siteMetadata.description }
          ]}
        />
        <main className="Layout">
          <div className="Layout__content">
            <section className="Layout__nav">
                <Nav />
              </section>
            <section className="Layout__body">
              {children}
            </section>
          </div>
        </main>
      </Fragment>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;
