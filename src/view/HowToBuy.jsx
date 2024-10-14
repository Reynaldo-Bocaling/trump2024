import React from "react";
import { hwoToBuy } from "../constant/indedx";
import Marquee from "react-fast-marquee";
import { motion } from "framer-motion";

const HowToBuy = () => {
  return (
    <section id="howtobuy" className="relative z-20 p-5">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: [0, 1] }}
        transition={{ duration: 1.5 }}
        className="max-w-full w-full bg-blurry mx-auto py-4 md:py-12 md:px-9  relative z-20"
      >
        <div className="">
          <motion.h1
            initial={{ x: 0, opacity: 0 }}
            whileInView={{
              x: [-100, 0],
              rotate: ["-150deg", 0],
              opacity: [0, 1],
            }}
            transition={{ duration: 1.2, delay: 1.7 }}
            className="gradient-text font-title text-[1.5em]  md:text-[3em] mb-3 py-5"
          >
            TerminatorEagleTrump2024MAGA
          </motion.h1>
          <motion.p
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5, delay: 2.2 }}
            className="text-white text-xs md:text-2xl py-3 "
          >
            CONTRACT ADDRESS :{" "}
            <span className="text-[#0dffef] font-medium text-wrap ">
              0X0000000000000000
            </span>
          </motion.p>
          <motion.p
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5, delay: 2.5 }}
            className="text-white text-xs md:text-2xl py-3"
          >
            BITCOIN on BASE:{" "}
            <span className="text-[#0dffef] font-medium">
              0x2XSD7DD8999DD7SSS8SS88CCDSDS0
            </span>
          </motion.p>
          <motion.p
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5, delay: 2.7 }}
            className="text-lg md:text-2xl text-white py-2"
          >
            <span className="text-[#0dffef]">*</span>Lorem ipsum dolor, sit amet
            consectetur adipisicing elit. Nam animi ex excepturi numquam amet
            rerum.
          </motion.p>
          <motion.h1
            initial={{ x: 0, opacity: 0 }}
            whileInView={{ y: [100, 0], opacity: [0, 1] }}
            transition={{ duration: 1.5, delay: 3 }}
            className="text-3xl md:text-4xl text-white font-bold py-5 pb-7"
          >
            RoadMap to $100bn ( + ∞% )
          </motion.h1>
        </div>
        <motion.img
          initial={{ y: 0, opacity: 0 }}
          whileInView={{
            y: [-750, 0],
            rotate: ["350deg", 0],
            scale: [0, 1],
            opacity: [0.5, 1],
          }}
          transition={{ duration: 1.5 }}
          src="/imgs/banner.png"
          className="w-full md:h-[35rem] border-[2px] border-red-500"
          alt=""
        ></motion.img>
        <ul className="mt-5 max-w-2xl ">
          {hwoToBuy.map((item, index) => (
            <motion.li
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ y: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 1.5, delay: 2.8 }}
              key={index}
              className="md:text-2xl text-white py-3"
            >
              {`${index + 1}. ${item}`}
            </motion.li>
          ))}
        </ul>
      </motion.div>
      <img
        src={window.innerWidth < 768 ? "/imgs/mobile.jpg" : "/img/bodyBg.jpg"}
        className=" absolute w-full h-full top-0 left-0"
        alt=""
      />
      <div className="neon-line"></div>
    </section>
  );
};

export default HowToBuy;
