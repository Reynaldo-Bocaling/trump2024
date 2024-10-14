import React from "react";
import { motion } from "framer-motion";
import { socials } from "../constant/indedx";

const Contact = () => {
  return (
    <section id="contact" className="relative z-20 p-5">
      <div className=" bg-blurry mx-auto flex items-end justify-between pt-12  relative z-20">
        <div className="flex-1 flex flex-col items-center justify-center gap-5  pb-12 px-2">
          <motion.img
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            src="/imgs/trump2.png"
            className="w-[12rem]"
            alt=""
          />
          <motion.h1
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="text-[#72ff0d] font-title  text-2xl md:text-6xl z-30 whitespace-nowrap"
          >
            $TRUMP
          </motion.h1>
          <motion.h1
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="relative  font-title text-3xl text-orange-100 whitespace-nowrap mt-12"
          >
            Join Us
          </motion.h1>
          <motion.div
            initial={{ y: 0, opacity: 0 }}
            whileInView={{ y: [-50, 0], opacity: [0, 1] }}
            transition={{ duration: 1 }}
            className="relative flex items-center justify-center gap-2 md:gap-9 w-full mt-7 z-20"
          >
            {socials.map((item, index) => (
              <a
                href={item.url}
                key={index}
                className="w-16 h-16 relative flex items-center justify-center  bg-[#72ff0d] z-20 rounded-full"
              >
                <img
                  src={item.img}
                  className="w-12 h-12 z-30"
                  alt="link icons"
                />
              </a>
            ))}
          </motion.div>
        </div>
      </div>
      <img
        src="/img/waveLine.svg"
        className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 opacity-25"
      />
      <img
        src="/imgs/logo3.png"
        className="w-[7rem] md:w-[25em] absolute -bottom-0 -left-12 opacity-60s"
        alt=""
      />
      <img
        src="/imgs/logo2.png"
        className="hidden w-[12rem] absolute md:-bottom-3 md:-right-12 md:flex"
        alt=""
      />
      <img
        src={window.innerWidth < 768 ? "/imgs/mobile.jpg" : "/img/bodyBg.jpg"}
        className=" absolute w-full h-full top-0 left-0"
        alt=""
      />
    </section>
  );
};

export default Contact;
