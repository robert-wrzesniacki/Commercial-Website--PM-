import React, { Component } from "react";
import Siema from "siema";
import Siema2 from "siema";
import Header from "./Header";
import { NavLink } from "react-router-dom";
import { counterUp } from "./scripts/count-up.js";
import { withTranslation, Trans } from "react-i18next";
// import Rodal from "rodal";


class ScrollToTopOnMount extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return null
  }
}

class Home extends Component {
  render() {
    return (
      <main className="home">
        <ScrollToTopOnMount/>   
        <Header />
        <Slider />
        <Process />
        <Counters />
        <Clients />
        <CallToAction />
      </main>
    );
  }
}

const Slide = props => <img {...props} alt="slide" />;

class Slider extends Component {
  render() {
    return (
      <div className="slider-wrapper" id="home">
        <section className="slider">
          <div className="slide">
            <Slide src="./images/slide1.jpg" />
            <div className="caption">
              <h2 className="bolder">
                <Trans i18nKey="slide1text1">
                  Tytuł slajdu 
                </Trans>
              </h2>
              <h4>
                <Trans i18nKey="slide1text2">
                  Ogólny opis slajdu, <br />rozwinięcie głównego tytułu
                </Trans>
              </h4>
              <p>
                <Trans>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Trans>
              </p>
            </div>
          </div>
          <div className="slide">
            <Slide src="./images/slide2.jpg" />
            <div className="caption">
              <h2 className="bolder">
                <Trans>Tytuł slajdu</Trans>
              </h2>
              <h4>
              <Trans i18nKey="slide1text2">
                  Ogólny opis slajdu, <br />rozwinięcie głównego tytułu
                </Trans>
              </h4>
              <p>
                <Trans>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Trans>
              </p>
            </div>
          </div>
          <div className="slide">
            <Slide src="./images/slide3.jpg" />
            <div className="caption">
              <h2 className="bolder">
                <Trans>Tytuł slajdu</Trans>
              </h2>
              <h4>
              <Trans i18nKey="slide1text2">
                  Ogólny opis slajdu, <br />rozwinięcie głównego tytułu
                </Trans>
              </h4>
              <p>
                <Trans i18nKey="slide3text3">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, <br />sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </Trans>
              </p>
            </div>
          </div>
          <div className="slide">
            <Slide src="./images/slide4.jpg" />
            <div className="caption">
              <h2 className="bolder">
                <Trans>Tytuł slajdu</Trans>
              </h2>
              <h4>
              <Trans i18nKey="slide1text2">
                  Ogólny opis slajdu, <br />rozwinięcie głównego tytułu
                </Trans>
              </h4>
            </div>
          </div>
        </section>
        <div className="pagination container">
          <div className="active">
            <h5>
              <Trans i18nKey="slidebutton1text1">
                SLAJD<br /> NUMER 1
              </Trans>
            </h5>
            <p>
              <Trans>Krótki opis do slajdu numer 1.</Trans>
            </p>
          </div>
          <div>
            <h5>
              <Trans i18nKey="slidebutton2text1">
              SLAJD<br /> NUMER 2
              </Trans>
            </h5>
            <p>
              <Trans>
              Krótki opis do slajdu numer 2.
              </Trans>
            </p>
          </div>
          <div>
            <h5>
              <Trans i18nKey="slidebutton3text1">
              SLAJD<br /> NUMER 3
              </Trans>
            </h5>
            <p>
              <Trans>
                Krótki opis do slajdu numer 3.
              </Trans>
            </p>
          </div>
          <div>
            <h5>
              <Trans i18nKey="slidebutton4text1">
              SLAJD<br /> NUMER 4
              </Trans>
            </h5>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {
    function onChangeCallback() {
      const btnDiv = document.querySelectorAll(".pagination div");
      let btnActive = document.querySelector(".pagination div.active");
      btnActive.classList.remove("active");
      btnDiv[this.currentSlide].classList.add("active");
      this.innerElements.forEach((slide, i) => {
        const addOrRemove = i === this.currentSlide ? "add" : "remove";
        this.innerElements[i].classList[addOrRemove]("show");
      });
    }

    function onInitCallback() {
      setTimeout(() => {
        this.innerElements[0].classList.add("show");
      }, 300);
    }

    const options = {
      selector: ".slider",
      easing: "cubic-bezier(0.55, 0.16, 0.59, 0.98)",
      duration: 600,
      loop: true,
      onInit: onInitCallback,
      onChange: onChangeCallback
    };

    const mySiema = (this.siema = new Siema(options));
    Siema.prototype.addPagination = function() {
      for (let i = 0; i < this.innerElements.length; i++) {
        const btn = document.createElement("span");

        const btnDiv = document.querySelectorAll(".pagination div");
        //btn.textContent = i;
        btn.setAttribute("class", "icon-cat" + i + " ");
        btn.addEventListener("click", () => this.goTo(i));

        btnDiv[i].appendChild(btn);
      }
    };

    mySiema.addPagination();

   // setInterval(() => mySiema.next(), 5000);
  }
}

class Process extends Home {
  render() {
    return (
      <section className="scrollspy" id="process">
        <div className="container">
          <h2 className="bolder">
            <Trans>Proces</Trans>,
          </h2>
          <h4>
            <Trans>który gwarantuje skuteczność</Trans>
          </h4>
          <div className="circle-list">
            <div className="circle">
              <h3>01</h3>
              <h6>
                <Trans>Krok 1</Trans>
              </h6>
              <p>
                <Trans>
                  Opis danego kroku określający konkretne działanie. 
                </Trans>
              </p>
            </div>
            <div className="circle">
              <h3>02</h3>
              <h6>
                <Trans>Krok 2</Trans>
              </h6>
              <p>
              <Trans>
                Opis danego kroku określający konkretne działanie. 
                </Trans>
              </p>
            </div>
            <div className="circle">
              <h3>03</h3>
              <h6>
                <Trans>Krok 3</Trans>
              </h6>
              <p>
                <Trans>
                Opis danego kroku określający konkretne działanie. 
                </Trans>
              </p>
            </div>
            <div className="circle">
              <h3>04</h3>
              <h6>
                <Trans>Krok 4</Trans>
              </h6>
              <p>
                <Trans>
                Opis danego kroku określający konkretne działanie. 
                </Trans>
              </p>
            </div>
            <div className="circle">
              <h3>05</h3>
              <h6>
                <Trans>Krok 5</Trans>
              </h6>
              <p>
                <Trans>
                Opis danego kroku określający konkretne działanie. 
                </Trans>
              </p>
            </div>
            <div className="circle">
              <h3>06</h3>
              <h6>
                <Trans>Krok 6</Trans>
              </h6>
              <p>
                <Trans>
                Opis danego kroku określający konkretne działanie. 
                </Trans>
              </p>
            </div>
            <div className="circle">
              <h3>07</h3>
              <h6>
                <Trans>Krok 7</Trans>
              </h6>
              <p>
                <Trans>
                Opis danego kroku określający konkretne działanie. 
                </Trans>
              </p>
            </div>
          </div>
          <h4>
            <Trans>
              MOŻEMY SKUTECZNIE ROZWIAZAĆ TWÓJ PROBLEM.
            </Trans>
          </h4>

          <h4 className="bolder">
            <Trans>
              JESTEŚMY JEDYNYM, SŁUSZNYM WYBOREM.
            </Trans>
          </h4>
        </div>
      </section>
    );
  }
}

class Counters extends Component {
  render() {
    return (
      <section className="scrollspy" id="counters">
        <div className="container">
          <div className="counters-list">
            <div>
              <span className="countup" cup-end="130">
                0
              </span>
              <p>
                <Trans>magazynów</Trans>
              </p>
            </div>
            <div>
              <span className="countup" cup-end="280">
                0
              </span>
              <p>
                <Trans>zadowolonych klientów</Trans>
              </p>
            </div>
            <div>
              <span className="countup" cup-end="52" cup-append=" 000">
                0
              </span>
              <p>
                <Trans>zrealizowanych zleceń</Trans>
              </p>
            </div>
            <div>
              <span>
                <Trans>ponad 1 miliard</Trans>
              </span>
              <p>
                <Trans>wygenerowanego obrotu</Trans>
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }

  componentDidMount() {
    let i = 0;
    const cu = new counterUp({
      start: 0,
      duration: 1500,
      intvalues: true,
      interval: 15,

      append: ""
    });
    const counter = document.getElementById("counters");
    if (counter.length !== 0) {
      window.addEventListener("scroll", function() {
        const scrollPosition =
          document.documentElement.scrollTop || document.body.scrollTop;

        if (counter.offsetTop <= scrollPosition + 370 && i === 0) {
          cu.start();

          i = 1;
        }
      });
    }
  }
}

class Clients extends Component {
  prev = () => {
    this.siema.prev();
  };

  next = () => {
    this.siema.next();
  };

  render() {
    return (
      <section className="scrollspy" id="clients">
        <div className="container">
          <h2>
            <Trans>Zaufali nam</Trans>
          </h2>
          <div className="carousel">
            <a href="#">
              <img src="./images/logo1.png" alt="" />
            </a>
            <a href="#">
              <img src="./images/logo2.png" alt="" />
            </a>
            <a href="#">
              <img src="./images/logo3.png" alt="" />
            </a>
            <a href="#">
              <img src="./images/logo4.png" alt="" />
            </a>
            <a href="#">
              <img src="./images/logo5.png" alt="" />
            </a>
            <a href="#">
              <img src="./images/logo6.png" alt="" />
            </a>
          </div>
          <span onClick={this.prev} className="icon-left" />

          <span onClick={this.next} className="icon-right" />
        </div>
      </section>
    );
  }

  componentDidMount() {
    const options = {
      selector: ".carousel",
      easing: "cubic-bezier(0.55, 0.16, 0.59, 0.98)",
      duration: 600,
      loop: true,
      perPage: {
        480: 2,
        768: 3,
        1024: 4
      }
    };

    this.siema = new Siema(options);
    setInterval(() => this.siema.next(), 2500);
  }
}

class CallToAction extends Component {
  render() {
    return (
      <section className="cta scrollspy" id="cta">
        <div className="container">
          <h3>
            <Trans>Chcesz rozwinąć swój biznes?</Trans>
          </h3>
          <NavLink className="btn" to="/contact">
            <Trans>Skontaktuj się z nami</Trans>
          </NavLink>
        </div>
      </section>
    );
  }
}

export default withTranslation(["translations"])(Home);


