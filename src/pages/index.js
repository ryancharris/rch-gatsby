import React, { Component } from "react";

import AboutItem from "../components/AboutItem";
import Layout from "../components/layout";

import { lightningTalks } from "../js/lightingTalks";
import { speakingExperience } from "../js/speaking";
import { volunteerExperience } from "../js/volunteer";

import "../scss/page.scss";

class Index extends Component {
  createLightningTalkItems = () => {
    return lightningTalks.map(item => {
      return (
        <AboutItem
          key={`${item.type}-${item.date}`}
          date={item.date}
          deck={item.deck}
          description={item.description}
          link={item.link}
          location={item.location}
          title={item.title}
          type={item.type}
        />
      );
    });
  };

  createVolunteerItems = () => {
    return volunteerExperience.map(item => {
      return (
        <AboutItem
          key={`${item.type}-${item.date}`}
          date={item.date}
          description={item.description}
          link={item.link}
          location={item.location}
          title={item.title}
          type={item.type}
        />
      );
    });
  };

  createSpeakingItems = () => {
    return speakingExperience.map(item => {
      return (
        <AboutItem
          key={`${item.type}-${item.date}`}
          date={item.date}
          description={item.description}
          link={item.link}
          location={item.location}
          title={item.title}
          type={item.type}
        />
      );
    });
  };

  render() {
    const lightningTalks = this.createLightningTalkItems();
    const volunteerItems = this.createVolunteerItems();
    const speakingItems = this.createSpeakingItems();

    return (
      <Layout location={this.props.location}>
        <section className="page__section">
          <h3 className="page__section-header">About</h3>
          <p className="page__paragraph">
            Hey there! I'm Ryan{" "}
            <span role="img" aria-label="Wave emoji">
              👋
            </span>
          </p>
          <p className="page__paragraph">
            I'm currently a Front End Engineer at{" "}
            <a
              className="page__index-link"
              href="https://www.getguru.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Guru"
            >
              Guru
            </a>{" "}
            in Philadelphia. I spend my days writing React to build our web app,
            browser extension and Slackbot. To the back end team's chagrin, I am
            also known to write a bit of Java.
          </p>
          <p className="page__paragraph">
            Before joining Guru, I was part of the engineering team at{" "}
            <a
              className="page__index-link"
              href="https://www.revzilla.com"
              target="_blank"
              rel="noopener noreferrer"
              title="RevZilla"
            >
              RevZilla
            </a>
            , an e-commerce site for motorcycle enthusiasts. While there I
            helped re-platform the site from Ruby on Rails to Elixir/Phoenix and
            build out a custom component engine.
          </p>
          <p className="page__paragraph">
            In the fall of 2018, I co-hosted a workshop at{" "}
            <a
              className="page__index-link"
              href="https://libertyjs.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              LibertyJS
            </a>{" "}
            focused on building a blog using{" "}
            <a
              className="page__index-link"
              href="https://www.gatsbyjs.org/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Gatsby
            </a>
            . As a{" "}
            <a
              className="page__index-link"
              href="https://www.imdb.com/name/nm2813828/"
              target="_blank"
              rel="noopener noreferrer"
            >
              career changer
            </a>
            , I am hoping to speak more in 2019 and help others transition into
            tech.
          </p>
          <p className="page__paragraph">
            If you want to know more, feel free to reach out via{" "}
            <a
              className="page__index-link"
              href="http://www.twitter.com/ryan_c_harris"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
            .
          </p>
          <hr className="page__line page__line--index" />
        </section>

        <section className="page__section">
          <h3 className="page__section-header">Speaking</h3>
          {speakingItems}
          <hr className="page__line page__line--index" />
        </section>

        <section className="page__section">
          <h3 className="page__section-header">Talks</h3>
          {lightningTalks}
          <hr className="page__line page__line--index" />
        </section>

        <section className="page__section">
          <h3 className="page__section-header">Volunteering</h3>
          {volunteerItems}
        </section>
      </Layout>
    );
  }
}

export default Index;
