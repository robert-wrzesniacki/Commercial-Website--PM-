import React, { Component } from "react";
import HeaderC from "./HeaderC";
import { withTranslation, Trans } from "react-i18next";
import GoogleMapReact from "google-map-react";
import Icon from ".././images/pin.png";

function createMapOptions() {
  return {
    styles: [
      {
        stylers: [
          { saturation: -100 },
          { gamma: 0.8 },
          { lightness: 4 },
          { visibility: "on" }
        ]
      }
    ]
  };
}
const AnyReactComponent = ({ text }) => (

  <div>
    <img src={Icon} alt="Logo"  
    style={{
      height: "46px",
      marginTop: "-46px",
      marginLeft: "-22px"
    }}/> 
    { text }
  </div>
);
class Map extends Component {
  static defaultProps = {
    center: { lat: 50.05411 , lng: 19.93543 },
    zoom: 14
  };
  render() {
    return (
      <div className="google-map">
        <GoogleMapReact
          options={createMapOptions}
          bootstrapURLKeys={{
          key: process.env.REACT_APP_GOOGLE_MAP_API
          }}
          defaultCenter={this.props.center}
          defaultZoom={this.props.zoom}
        >
          <AnyReactComponent lat={50.05411} lng={19.93543} />
        </GoogleMapReact>
      </div>
    );
  }
}

class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
  }

  render() {
    return null;
  }
}

class Contact extends Component {
  render() {
    return (
      <main className="contact">
        <ScrollToTopOnMount />
        <HeaderC />

        <section className="contact-wrapper container">
          <div>
            <header>
              <h3>
                <Trans>Skontaktuj się z nami</Trans>
              </h3>
              <h3 className="green"> <a href="tel:000000000" data-tip data-for='telefon2'>00 000 00 00</a></h3>
              <h4 className="kontakt_mail">
                <a href="mailto:kontakt@raw-code.pl">
                  e-mail: kontakt@raw-code.pl
                </a>
              </h4>
            </header>

            <div className="person-list">
              <div>
                <figure><img src="images/person1.jpg" alt=""/></figure>
                <div>
                  <h5>
                    <Trans>Stanowisko</Trans>
                  </h5>

                  <p>
                    <span className="underline">Imię Nazwisko</span>
                    <br />
                    tel. 000-000-000<br />
                    <a href="mailto:imie.nazwisko@raw-code.pl">
                    imie.nazwisko@raw-code.pl</a>
                  </p>
                </div>
              </div>
              <div>
              <figure><img src="images/person2.jpg" alt=""/></figure>
                <div>
                  <h5>
                    <Trans>Stanowisko</Trans>
                  </h5>

                  <p>
                    <span className="underline">Imię Nazwisko</span>
                    <br />
                    tel. 000-000-000<br />
                    <a href="mailto:imie.nazwisko@raw-code.pl">
                    imie.nazwisko@raw-code.pl</a>
                  </p>
                </div>
              </div>

              <div>
              </div>

              <div>

              </div>
            </div>
          </div>
          <aside>
            <h5>Nazwa Firmy</h5>
            <p>Adres</p> <p>00-000 Miasto</p>
            <p>NIP: 0000000000</p>
            <p>REGON: 000000000</p> <p>KRS: 0000000000 </p>
            <Map />
            <h5>
              <Trans>Godziny pracy naszego biura</Trans>
            </h5>
            <p>
              <span>
                <Trans>poniedziałek</Trans>
              </span>
              <span>08:00–17:00</span>
            </p>
            <p>
              <span>
                <Trans>wtorek</Trans>
              </span>
              <span>08:00–17:00</span>
            </p>
            <p>
              <span>
                <Trans>środa</Trans>
              </span>
              <span>08:00–17:00</span>
            </p>
            <p>
              <span>
                <Trans>czwartek</Trans>
              </span>
              <span>08:00–17:00</span>
            </p>
            <p>
              <span>
                <Trans>piątek</Trans>
              </span>
              <span>08:00–17:00</span>
            </p>
          </aside>
        </section>
      </main>
    );
  }
}

export default withTranslation("translations")(Contact);
