import React from "react";
import { graphql } from "gatsby";
import Layout from "../components/layout";

import BlogPostHero from "../components/BlogPostHero";
import BlogPostFooter from "../components/BlogPostFooter";

import "../scss/BlogPost.scss";

export default props => {
  const post = props.data.markdownRemark;
  const heroImage = `url(${post.frontmatter.attachments[0].publicURL})`;

  return (
    <Layout location={props.location}>
      <article className="BlogPost">
        <BlogPostHero
          caption={post.frontmatter.heroCaption}
          date={post.frontmatter.date}
          image={heroImage}
          link={post.frontmatter.heroLink}
          minutes={post.timeToRead}
          title={post.frontmatter.title}
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
        heroCaption
        heroLink
        attachments {
          publicURL
        }
      }
      timeToRead
    }
  }
`;
