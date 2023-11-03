import React, { Component } from "react";
import { withTranslation, Trans } from "react-i18next";

class Footer extends Component {
  render() {
    return (
      <footer className="scrollspy" id="footer">
        <div className="footer-wrap">
          <div className="container">
            <h4>
              <Trans>Napisz do nas</Trans>
            </h4>
            <div className="contact-wrap">
              <form
                action="https://formspree.io/kontakt@raw-code.pl"
                method="POST"
              >
                <label>
                  <Trans>Imię nazwisko*</Trans>
                </label>
                <input type="text" name="name" required />
                <div className="group">
                  <div>
                    <label>
                      <Trans>Twój e-mail*</Trans>
                    </label>
                    <input type="email" name="_replyto" required />
                  </div>

                  <span>
                    <Trans>lub</Trans>
                  </span>
                  <div>
                    <label>
                      <Trans>Twój telefon*</Trans>
                    </label>
                    <input type="tel" name="phone" />
                  </div>
                </div>
                <label>
                  <Trans>Treść wiadomości</Trans>
                </label>
                <textarea name="message" />
                <div className="group">
                  <div className="checkbox">
                    <input type="checkbox" name="agree" id="check" required />
                    <label htmlFor="check">
                      <Trans>
                        Wyrażam zgodę na przetwarzanie moich danych osobowych w celu obsługi pytania. Potwierdzam, że zapoznałem się z klauzulą 
                      </Trans>
                    <a href="#" className="Rodo_link"><Trans> RODO.</Trans></a>
                    </label>
                  </div>

                  <button type="submit" className="btn">
                    <Trans>wyślij</Trans>
                    <input
                      type="hidden"
                      name="_next"
                      value="https://raw-code.pl/"
                    />
                    <input type="hidden" name="_language" value="pl" />
                  </button>
                </div>
              </form>
              <div className="contact-data">
                <h3>
                  <span className="icon-phone" /> <a href="tel:000000000" data-tip data-for='telefon'>00 000 00 00</a>
                </h3>
                <p>Nazwa Firmy</p> <p>Adres</p>
                <p>00-000 Miasto</p>
                <p>
                  <Trans>Znajdziesz nas na</Trans>
                </p>
                <a href="#"
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
              </div>
            </div>
            <div className="subfooter">
        <p>© {(new Date().getFullYear())} All rights reserved</p>
        { 
              <p>
                created by
                <a href="https://raw-code.it/"> RAW-CODE</a>
              </p>
              }
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default withTranslation("translations")(Footer);

