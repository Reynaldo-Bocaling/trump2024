import React from "react";
import { tokenomics } from "../constant/indedx";
import { motion } from "framer-motion";

const Tokenomics = () => {
  return (
    <section className="relative z-20 pt-12 p-5 mb-5">
      <div className="bg-blurry  mx-auto w-full flex flex-col gap-4 md:py-12 md:px-9 overflow-x-hidden">
        <motion.h1
          initial={{ x: 0, opacity: 0 }}
          whileInView={{
            x: [-100, 0],
            rotate: ["-150deg", 0],
            opacity: [0, 1],
          }}
          transition={{ duration: 1.5 }}
          className="gradient-text font-title text-[1.5em] md:text-[3em] text-center mb-7 text-4xl text-white font-bold py-7"
        >
          TOKENOMICS
        </motion.h1>
        <ul className="flex flex-col md:flex-row  gap-4 w-full justify-around">
          {tokenomics.map((item, index) => (
            <motion.li
              initial={{ x: 0, opacity: 0 }}
              whileInView={{ x: [100, 0], opacity: [0, 1] }}
              transition={{ duration: 1.5 }}
              key={index}
              className="  rounded-xl py-5 px-12  bg-[rgba(250,250,250,0.2)]"
            >
              <p className="text-4xl font-bold font-title gradient-text">
                {item}
              </p>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Tokenomics;
