import React, { Component } from "react";
import { Link, graphql } from "gatsby";

import Layout from "../components/layout";

import "../scss/BlogIndex.scss";

class Blog extends Component {
  createPostItems = () => {
    const blogPostQueryData = this.props.data.allMarkdownRemark.edges;

    return blogPostQueryData.map(post => {
      const postIndexImageSource = post.node.frontmatter.attachments
        ? post.node.frontmatter.attachments[0].publicURL
        : "";

      const postHasImage = Boolean(postIndexImageSource.length > 0);
      return (
        <section key={post.node.id} className="BlogIndex__post">
          <Link className="BlogIndex__link" to={post.node.fields.slug}>
            <div className="BlogIndex__header">
              <h4 className="BlogIndex__title">
                {post.node.frontmatter.title}
              </h4>
              <p className="BlogIndex__date">{post.node.frontmatter.date}</p>
            </div>
            {postHasImage && (
              <img
                className="BlogIndex__image"
                src={postIndexImageSource}
                alt={post.node.frontmatter.title}
              />
            )}
          </Link>
          <div className="BlogIndex__body">
            <p>{post.node.excerpt}</p>
          </div>
          <div className="BlogIndex__read-more-wrapper">
            <Link className="BlogIndex__read-more" to={post.node.fields.slug}>
              Read More...
            </Link>
          </div>
          {blogPostQueryData.indexOf(post) !== blogPostQueryData.length - 1 && (
            <hr className="page__line page__line--blog" />
          )}
        </section>
      );
    });
  };

  render() {
    return (
      <Layout location={this.props.location}>{this.createPostItems()}</Layout>
    );
  }
}

export default Blog;

export const query = graphql`
  {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          id
          excerpt
          frontmatter {
            date(formatString: "MMM. DD, YYYY")
            title
            attachments {
              publicURL
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
