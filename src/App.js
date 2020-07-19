import React from "react";

// common styles
import "./styles/font.css";
import "./styles/reset.css";
import "./styles/default.css";

// slick-slider styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Layout from "./components/Layout";
import Nav from "./components/Nav";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import SectionSeven from "./components/SectionSeven";
import SectionEight from "./components/SectionEight";
import SectionNine from "./components/SectionNine";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div className="App">
      <Layout>
        <Nav />
        <SectionOne />
        <SectionTwo />
        <SectionThree />
        <SectionFour />
        <SectionFive />
        <SectionSix />
        <SectionSeven />
        <SectionEight />
        <SectionNine />
        <Footer />
      </Layout>
    </div>
  );
};

export default App;
