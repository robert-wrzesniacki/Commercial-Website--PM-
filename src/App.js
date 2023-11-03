import React, { Component } from "react";
import "./css/style.css";
import "./css/bootstrap.css"
import { Route, HashRouter } from "react-router-dom";
import SimpleReactLightbox from "simple-react-lightbox";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import News from "./components/News";
class App extends Component {
  render() {
    return (
      <HashRouter>
        <SimpleReactLightbox>
        <div className="App">
          <Route exact path="/" component={Home} />
          <Route path="/contact" component={Contact} />
          <Route path="/news" component={News} />
          <Footer />
        </div>
        </SimpleReactLightbox>
      </HashRouter>
    );
  }
}

export default App;

