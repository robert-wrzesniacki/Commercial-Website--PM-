import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import logo from ".././images/logo.svg";
import { scrollIt, scrollSpy } from "./scripts/scroll.js";
import { withTranslation, Trans } from "react-i18next";
class Header extends Component {
  render() {
    return (
      <header className="main-header">
        <div className="container">
        <a className="scroll" data-link="#root">
          <img src={logo} className="logo" alt="logo" />
          </a>
          <nav className="main-menu">
          <NavLink to="/news">
              <Trans>Aktualności</Trans>
            </NavLink>
            <a className="scroll" data-link="#process">
              <Trans>Proces</Trans>
            </a>
            <a className="scroll" data-link="#counters">
              <Trans>Doświadczenie</Trans>
            </a>
            <a className="scroll" data-link="#clients">
              <Trans>Zaufali nam</Trans>
            </a>

            <NavLink to="/contact">
              <Trans>Kontakt</Trans>
            </NavLink>

            <a className="lang"></a>
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
    const { i18n } = this.props;
    const btn = document.querySelector(".lang");
    
    if (i18n.language === "en") {

      btn.textContent = "pl";
    } else {

      btn.textContent = "en";
    }
    document.querySelector(".lang").addEventListener("click", () => {
      if (i18n.language !== "en") {
        i18n.changeLanguage("en");
        btn.textContent = "pl";
      } else {
        i18n.changeLanguage("pl");
        btn.textContent = "en";
      }
    });

    window.addEventListener('scroll', scrollSpy);

    Array.from(document.querySelectorAll(".scroll")).forEach(e => {
      e.addEventListener("click", () => {
        scrollIt(
          document.querySelector(`#${e.dataset.link.split("#")[1]}`),
          1300,
          "easeInOutQuint"
        );
      });
    });
    window.addEventListener("scroll", function() {
      const scrollPosition =
        document.documentElement.scrollTop || document.body.scrollTop;
      const menu = document.querySelector(".main-header");

      if (scrollPosition > 250) {
        menu.classList.add("moving");
      } else if (scrollPosition < 200) {
        menu.classList.remove("moving");
      }
    });
  }

/*componentWillUNMount(){
  window.removeEventListener('scroll', scrollSpy);
}*/
}

export default withTranslation("translations")(Header);
