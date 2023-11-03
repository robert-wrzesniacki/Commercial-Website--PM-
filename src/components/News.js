import React, { Component } from "react";
import HeaderN from "./HeaderN";
import { withTranslation } from "react-i18next";
import GetPostList from "./GetPost"


class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

class News extends Component {
 
  render() {
    return (
      <main className="contact">
        <ScrollToTopOnMount />
        <HeaderN />

        <section className="contact-wrapper container">
          <div>
            <header>

            <GetPostList />

            </header>

          </div>
        </section>
      </main>
    );
  }
}

export default withTranslation("translations")(News);
