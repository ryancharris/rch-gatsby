import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

import BlogPostFooter from "../components/BlogPostFooter";

import "../scss/BlogPost.scss";

export default props => {
  const post = props.data.markdownRemark;
  const heroImage = post.frontmatter.attachments[0].publicURL;

  return (
    <Layout location={props.location}>
      <article className="BlogPost">
        <div className="BlogPost__header">
          <h1 className="BlogPost__title">{post.frontmatter.title}</h1>
          <h4 className="BlogPost__date">{post.frontmatter.date}</h4>
        </div>
        <hr className="page__line page__line--blog" />
        <img
          className="BlogPost__hero-image"
          src={heroImage}
          alt={post.frontmatter.title}
        />
        <div
          className="BlogPost__body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <hr className="page__line page__line--blog" />
        <BlogPostFooter />
      </article>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMM. DD, YYYY")
        title
        attachments {
          publicURL
        }
      }
    }
  }
`;
