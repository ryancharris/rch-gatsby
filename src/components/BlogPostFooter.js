import React from "react";

import "../scss/BlogPostFooter.scss";

import TwitterIcon from "!svg-react-loader!../images/svg/twitter.svg?name=TwitterIcon";
import avatar from "../images/avatar.png";

function BlogPostFooter() {
  return (
    <div className="BlogPostFooter">
      <div className="BlogPostFooter__avatar-wrapper">
        <img
          className="BlogPostFooter__avatar"
          src={avatar}
          alt="Ryan C. Harris"
        />
      </div>
      <div className="BlogPostFooter__about-wrapper">
        <p className="BlogPostFooter__about BlogPostFooter__about--strong">
          Software Engineer @{" "}
          <a
            className="page__blog-link"
            href="https://www.getguru.com"
            target="_blank"
            rel="noopener noreferrer"
            title="Guru"
          >
            Guru
          </a>
        </p>
        <p className="BlogPostFooter__about">
          Front end developer with back end tendencies, film student turned
          engineer, speaker.
        </p>
        <p className="BlogPostFooter__about BlogPostFooter__about--strong">
          <TwitterIcon className="BlogPostFooter__icon" />
          <a
            className="page__blog-link"
            href="http://www.twitter.com/ryan_c_harris"
            target="_blank"
            rel="noopener noreferrer"
            title="@ryan_c_harris"
          >
            @ryan_c_harris
          </a>
        </p>
      </div>
    </div>
  );
}

export default BlogPostFooter;
