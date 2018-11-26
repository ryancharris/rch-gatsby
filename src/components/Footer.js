import React, {Component} from "react";

import "../scss/Footer.scss";
import SocialIcons from "./SocialIcons";

class Footer extends Component {
  render() {
    return (
      <footer className="Footer">
        <SocialIcons />
        <h6 className="Footer__copyright">Ryan C. Harris &#169; 2018</h6>
        <h6 className="Footer__copyright">Philadelphia, PA</h6>
      </footer>
    )
  }
};

export default Footer;
