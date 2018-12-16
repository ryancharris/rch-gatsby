import React, { Component } from "react";
import { Link, graphql } from "gatsby";

import BlogPostHero from "../components/BlogPostHero";
import Layout from "../components/layout";

import "../scss/BlogIndex.scss";

class Blog extends Component {
  createPostItems = () => {
    const blogPostQueryData = this.props.data.allMarkdownRemark.edges;

    return blogPostQueryData.map(post => {
      const postIndexImageSource = `url(${
        post.node.frontmatter.attachments[0].publicURL
      })`;

      return (
        <section key={post.node.id} className="BlogIndex__post">
          <Link className="BlogIndex__link" to={post.node.fields.slug}>
            <BlogPostHero
              caption={post.node.frontmatter.heroCaption}
              date={post.node.frontmatter.date}
              image={postIndexImageSource}
              link={post.node.frontmatter.heroLink}
              minutes={post.node.timeToRead}
              title={post.node.frontmatter.title}
            />
          </Link>
          <div className="BlogIndex__body">
            <p>{post.node.excerpt}</p>
          </div>
          <div className="BlogIndex__read-more-wrapper">
            <Link className="BlogIndex__read-more" to={post.node.fields.slug}>
              Read More...
            </Link>
          </div>
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
          excerpt(pruneLength: 300)
          timeToRead
          frontmatter {
            date(formatString: "MMM. DD, YYYY")
            title
            heroCaption
            heroLink
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
