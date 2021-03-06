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
          Software Engineer @ Guru
        </p>
        <p className="BlogPostFooter__about">
          developer @ Guru. co-organizer Reactadelphia. film student turned
          engineer. always learning.
        </p>
        <p className="BlogPostFooter__about">
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
