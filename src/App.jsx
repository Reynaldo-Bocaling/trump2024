import React from "react";
import Header from "./components/header";
import Hero from "./view/Hero";
import About from "./view/About";
import Tokenomics from "./view/Tokenomics";
import Contact from "./view/Contact";
import Footer from "./components/Footer";
import HowToBuy from "./view/HowToBuy";
import Photo from "./view/Photo";

const App = () => {
  return (
    <main className="overflow-hidden">
      {/* <Header /> */}
      <Hero />
      <HowToBuy />
      <About />
      <Tokenomics />
      <Contact />
      {/* <Photo /> */}
      <img
        src="/img/bodyBg.jpg"
        className=" fixed w-full h-full top-0 left-0"
        alt=""
      />
    </main>
  );
};

export default App;
