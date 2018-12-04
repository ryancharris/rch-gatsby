import React, { Component } from "react";

import GithubIcon from "!svg-react-loader!../images/svg/github.svg?name=GithubIcon";
import LinkedInIcon from "!svg-react-loader!../images/svg/linkedin.svg?name=LinkedInIcon";
import TwitterIcon from "!svg-react-loader!../images/svg/twitter.svg?name=TwitterIcon";

import "../scss/Socialicons.scss";

class SocialIcons extends Component {
  render() {
    return (
      <ul className="SocialIcons__list">
        <li className="SocialIcons__list-item">
          <a
            className="SocialIcons__link"
            href="https://github.com/ryancharris"
          >
            <GithubIcon className="SocialIcons__icon" />
          </a>
        </li>
        <li className="SocialIcons__list-item">
          <a
            className="SocialIcons__link"
            href="http://www.linkedin.com/in/ryancharris"
          >
            <LinkedInIcon className="SocialIcons__icon" />
          </a>
        </li>
        <li className="SocialIcons__list-item">
          <a
            className="SocialIcons__link"
            href="http://www.twitter.com/ryan_c_harris"
          >
            <TwitterIcon className="SocialIcons__icon" />
          </a>
        </li>
      </ul>
    );
  }
}

export default SocialIcons;
