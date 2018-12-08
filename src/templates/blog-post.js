import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

import BlogPostFooter from "../components/BlogPostFooter";

import "../scss/BlogPost.scss";

export default props => {
  const post = props.data.markdownRemark;
  const heroImage = `url(${post.frontmatter.attachments[0].publicURL})`;

  return (
    <Layout location={props.location}>
      <article className="BlogPost">
        <div
          className="BlogPost__header"
          style={{
            background: `linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), ${heroImage}`,
            backgroundSize: "cover",
          }}
        >
          <h1 className="BlogPost__title">{post.frontmatter.title}</h1>
          <h4 className="BlogPost__time">
            {post.timeToRead} minute
            {post.timeToRead > 1 ? "s " : " "}
            read
          </h4>
          <h4 className="BlogPost__date">{post.frontmatter.date}</h4>
        </div>
        <hr className="page__line page__line--blog" />
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
      timeToRead
    }
  }
`;
