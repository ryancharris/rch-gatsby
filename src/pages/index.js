import React, { Component } from "react";

import AboutItem from "../components/AboutItem";
import Layout from "../components/layout";

import { speakingExperience} from "../js/speaking";
import { volunteerExperience} from "../js/volunteer";


import "../scss/page.scss";

class Index extends Component {
  createVolunteerItems = () => {
    return volunteerExperience.map(item => {
      return (
        <AboutItem
          key={`${item.type}-${item.date}`}
          date={item.date}
          description={item.description}
          title={item.title}
          type={item.type}
        />
      );
    });
  }

  createSpeakingItems = () => {
    return speakingExperience.map(item => {
      return (
        <AboutItem
          key={`${item.type}-${item.date}`}
          date={item.date}
          description={item.description}
          title={item.title}
          type={item.type}
        />
      );
    });
  }

  render() {
    const volunteerItems = this.createVolunteerItems();
    const speakingItems = this.createSpeakingItems();

    return (
      <Layout location={this.props.location}>
        <section className="page__section">
          <h3 className="page__section-header">About</h3>
          <p className="page__paragraph">Sed ipsum dui, ornare et elementum in, lacinia eget turpis. Aliquam blandit vitae tellus a dapibus. Nullam sollicitudin lacus non est ultrices, sed aliquet sem blandit. Nulla porta sapien eget rhoncus porttitor. Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="page__paragraph">Donec ultricies ipsum eget ornare consectetur. Aliquam a sagittis magna. Fusce blandit eleifend condimentum. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.</p>
          <hr className="page__line page__line--index" />
        </section>

        <section className="page__section">
          <h3 className="page__section-header">Volunteering</h3>
          { volunteerItems }
          <hr className="page__line page__line--index" />
        </section>

        <section className="page__section">
          <h3 className="page__section-header">Speaking</h3>
          { speakingItems }
        </section>
      </Layout>
    );
  }
};

export default Index;
