import React from "react";
import PropTypes from "prop-types";

import GithubIcon from "!svg-react-loader!../images/svg/github.svg?name=GithubIcon";
import LinkedInIcon from "!svg-react-loader!../images/svg/linkedin.svg?name=LinkedInIcon";
import TwitterIcon from "!svg-react-loader!../images/svg/twitter.svg?name=TwitterIcon";

import "../scss/Socialicons.scss";

function SocialIcons(props) {
  console.log(props.location.pathname);
  let linkClass;
  switch (props.location.pathname) {
    case "/":
      linkClass = "SocialIcons__link--index";
      break;
    case "/blog/":
      linkClass = "SocialIcons__link--blog";
      break;
    case "/portfolio/":
      linkClass = "SocialIcons__link--portfolio";
      break;
    default:
      linkClass = "SocialIcons__link--blog";
      break;
  }

  return (
    <ul className="SocialIcons__list">
      <li className="SocialIcons__list-item">
        <a
          className={`SocialIcons__link ${linkClass}`}
          href="https://github.com/ryancharris"
        >
          <GithubIcon className="SocialIcons__icon" />
        </a>
      </li>
      <li className="SocialIcons__list-item">
        <a
          className={`SocialIcons__link ${linkClass}`}
          href="http://www.linkedin.com/in/ryancharris"
        >
          <LinkedInIcon className="SocialIcons__icon" />
        </a>
      </li>
      <li className="SocialIcons__list-item">
        <a
          className={`SocialIcons__link ${linkClass}`}
          href="http://www.twitter.com/ryan_c_harris"
        >
          <TwitterIcon className="SocialIcons__icon" />
        </a>
      </li>
    </ul>
  );
}

export default SocialIcons;

SocialIcons.propTypes = {
  location: PropTypes.object,
};

SocialIcons.defaultProps = {
  location: {},
};
