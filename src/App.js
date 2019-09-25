import React from 'react';
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

class App extends Component {

  state = {
    score: 0,
    images: [
      {
        id: 0,
        image: "./assets/images/done.jpg",
        alt: "Kris Jenner is so done."
      },
      {
        id: 1,
        image: "./assets/images/kim-cant-stop-crying.jpg",
        alt: "Kim can't stop crying."
      },
      {
        id: 2,
        src: "./assets/images/kim-kardashian-crying-on-phone.jpg",
        alt: "Kim Kardashian crying on the phone."
      },
      {
        id: 3,
        src: "./assets/images/kourtney.jpg",
        alt: "Kourtney Kardashian."
      },
      {
        id: 4,
        src: "./assets/images/kris-crying-header.jpg",
        alt: "Kris Jenner sobbing."
      },
      {
        id: 5,
        src: "./assets/images/kris-jenner-cries-about-bruce.jpg",
        alt: "Kris Jenner cries about Bruce."
      },
      {
        id: 6,
        src: "./assets/images/kris-jenner.jpg",
        alt: "Kris Jenner crying."
      },
      {
        id: 7,
        src: "./assets/images/tissue.jpg",
        alt: "Kris Jenner wiping tears with tissue."
      },
      {
        id: 8,
        src: "./assets/images/joanne.jpg",
        alt: "Joanne the Scammer."
      }
    ]
  }

  render() {
    return (
      <div>
        <Header />
        <Main />
        <Footer />
      </div>
    )
  }
}

export default App;
