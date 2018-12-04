import React from "react";

import "../scss/BlogPostFooter.scss";

import avatar from "../images/avatar.png";

function BlogPostFooter() {
  return (
    <div className="BlogPostFooter">
      <img
        className="BlogPostFooter__avatar"
        src={avatar}
        alt="Ryan C. Harris"
      />
      <p className="BlogPostFooter__about">
        Aliquam rutrum blandit diam, sed pretium magna tempor nec. In hac
        habitasse platea dictumst.
      </p>
    </div>
  );
}

export default BlogPostFooter;
