import React from "react";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="relative z-20 p-5">
      <div className="relative max-w-full  bg-blurry mx-auto py-4 md:py-12 md:px-9 ">
        <motion.h1
          initial={{ x: 0, opacity: 0 }}
          whileInView={{ y: [100, 0], scale: [0, 1], opacity: [0, 1] }}
          transition={{ duration: 1.5 }}
          className="gradient-text text-[1.5em] md:text-[3em] font-title text-4xl text-white font-bold py-7 text-center"
        >
          ABOUT TRUMP
        </motion.h1>
        <div className="about max-w-7xl mx-auto">
          <motion.img
            initial={{ y: 0, opacity: 0 }}
            whileInView={{
              y: [-250, 0],
              rotate: ["550deg", 0],
              scale: [0, 1],
              opacity: [0.5, 1],
            }}
            transition={{ duration: 1.5 }}
            src="/imgs/trump1.png"
            alt=""
            className="float-left w-[350px]"
          ></motion.img>
          <motion.p
            initial={{ y: 0, opacity: 0 }}
            whileInView={{
              x: [100, 0],

              opacity: [0, 1],
            }}
            transition={{ duration: 1, delay: 1 }}
            className="text-white text-xl m-auto"
          >
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            ducimus voluptatum voluptate aperiam incidunt, eligendi fuga est
            odio ad enim libero quod porro assumenda, quasi quas corrupti
            nostrum dolorem commodi. <br /> <br /> Lorem, ipsum dolor sit amet
            consectetur adipisicing elit. Assumenda earum voluptatem impedit quo
            quisquam quis fuga alias perspiciatis recusandae. Culpa non rem,
            vitae possimus sint dolor fugit omnis voluptate, sunt quod quae
            officiis quis soluta?
            <br />
            <br />
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolore
            odio cupiditate dicta soluta expedita voluptates exercitationem ex
            repellat praesentium quas?
            <span className="text-[#72ff0d] text-2xl font-bold">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nam,
              impedit.
            </span>
          </motion.p>
        </div>
        <Marquee direction="right" className="absolute bottom-7">
          {Array.from({ length: 100 }, (_, i) => (
            <p
              key={i}
              className="title-font mx-10 text-red-100 text-lg font-bold"
            >
              Buy Now
            </p>
          ))}
        </Marquee>
        <img
          src="/imgs/trump2.png"
          className="w-[320px] ml-auto -mt-12"
          alt=""
        />
      </div>

      <img
        src={window.innerWidth < 768 ? "/imgs/mobile.jpg" : "/img/bodyBg.jpg"}
        className=" absolute w-full h-full top-0 left-0"
        alt=""
      />
      <div className="neon-line"></div>
    </section>
  );
};

export default About;
