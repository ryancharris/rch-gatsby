import React, { Component } from "react";

import Layout from "../components/layout";

import avatar from "../images/avatar.png";

import "../scss/page.scss";
import "../scss/Index.scss";

class Index extends Component {
  render() {
    return (
      <Layout location={this.props.location}>
        <img className="Index__avatar" src={avatar} alt="Ryan Harris" />

        <section className="page__section">
          <h3 className="page__section-header">About</h3>
          <p className="page__paragraph">Sed ipsum dui, ornare et elementum in, lacinia eget turpis. Aliquam blandit vitae tellus a dapibus. Nullam sollicitudin lacus non est ultrices, sed aliquet sem blandit. Nulla porta sapien eget rhoncus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="page__paragraph">Donec ultricies ipsum eget ornare consectetur. Aliquam a sagittis magna. Fusce blandit eleifend condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          <hr className="page__line page__line--index" />
        </section>

        <section className="page__section">
          <h3 className="page__section-header">Volunteering</h3>
          <hr className="page__line page__line--index" />
        </section>

        <section className="page__section">
          <h3 className="page__section-header">Speaking</h3>
          <hr className="page__line page__line--index" />
        </section>
      </Layout>
    );
  }
};

export default Index;
