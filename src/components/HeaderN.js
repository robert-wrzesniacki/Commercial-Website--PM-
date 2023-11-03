import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from ".././images/logo.svg";
import { withTranslation, Trans } from "react-i18next";
class HeaderC extends Component {
  render() {
    return (
      <header className="main-header">
        <div className="container">
          <NavLink exact to="/">
            <img src={logo} className="logo" alt="logo" />
          </NavLink>
          <nav className="main-menu">
            <NavLink exact to="/">
            <Trans>Strona główna</Trans>
            </NavLink>
            <NavLink to="/news" className="scroll">
              <Trans>Aktualności</Trans>
            </NavLink>
            <NavLink to="/contact">
              <Trans>Kontakt</Trans>
            </NavLink>
            <a
              href="#"
              className="social"
            >
              <span className="icon-linkedin_n" />
            </a>
            <a
              href="#"
              className="social"
            >
              <span className="icon-fb_n" />
            </a>
          </nav>
        </div>
      </header>
    );
  }
  componentDidMount() {
  
    const sectionsIDs = Array.from(document.querySelectorAll(".scrollspy"));

    let sectionsOffsets = [];

    sectionsIDs.forEach(e => (sectionsOffsets[e.id] = e.offsetTop));
    window.addEventListener("scroll", function() {
      const scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
      const menu = document.querySelector(".main-header");

      if (scrollPosition > 250) {
        menu.classList.add("moving");
      } else if (scrollPosition < 200) {
        menu.classList.remove("moving");
      }

      for (const cur of sectionsIDs) {
        if (sectionsOffsets[cur.id] <= scrollPosition + 370) {
          Array.from(document.querySelectorAll(`.scrollspy#${cur.id}`)).forEach(
            e => e.classList.add("animated")
          );
        }
      }
    });
  }
}

export default withTranslation("translations")(HeaderC);


