import React from "react";
import SlidingText from "../components/SlidingText";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <section id="heros" className="relative -mt-10 z-30">
      <SlidingText />
      <img src="/img/heroBg.jpg" alt="" className="h-[100vh]x w-full" />
    </section>
  );
};

export default Hero;
