import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

import "../scss/BlogPost.scss";

export default props => {
  const post = props.data.markdownRemark;
  return (
    <Layout location={props.location}>
      <article className="BlogPost">
        <div className="BlogPost__header">
          <h1 className="BlogPost__title">{post.frontmatter.title}</h1>
          <h4 className="BlogPost__date">{post.frontmatter.date}</h4>
        </div>
        <hr className="page__line page__line--blog" />
        <div
          className="BlogPost__body"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
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
      }
    }
  }
`;
