import React, { Component } from "react";
import { graphql } from "gatsby";

import Layout from "../components/layout";

class Blog extends Component {
  createPostItems = () => {
    const blogPostQueryData = this.props.data.allMarkdownRemark.edges;
    console.log(blogPostQueryData);

    const blogPosts = blogPostQueryData.map(post => {
      return (
        <article key={post.node.id}>
          <h4>{post.node.frontmatter.title}</h4>
          <p>{post.node.excerpt}</p>
          <p>{post.node.frontmatter.date}</p>
        </article>
      );
    });

    return blogPosts;
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
    allMarkdownRemark {
      edges {
        node {
          id
          excerpt
          frontmatter {
            date(formatString: "MMM, DD, YYYY")
            title
          }
        }
      }
    }
  }
`;
