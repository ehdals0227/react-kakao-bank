import React from "react";
import "./styles/font.css";
import "./styles/reset.css";
import "./styles/default.css";
import Layout from "./components/Layout";
import Nav from "./components/Nav";
import SectionOne from "./components/SectionOne";
import SectionTwo from "./components/SectionTwo";
import SectionThree from "./components/SectionThree";
import SectionFour from "./components/SectionFour";
import SectionFive from "./components/SectionFive";
import SectionSix from "./components/SectionSix";
import Footer from "./components/Footer";

function App() {
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

        <Footer />
      </Layout>
    </div>
  );
}

export default App;
