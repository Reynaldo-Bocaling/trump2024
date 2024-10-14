import React from "react";
import { gallery } from "../constant/indedx";
import { motion } from "framer-motion";
const Photo = () => {
  return (
    <section id="gallery" className="w-full relative my-12">
      <div className="relative max-w-6xl mx-auto flexColCenter gap-9 z-[998]">
        <motion.img
          initial={{ x: 0, opacity: 0 }}
          whileInView={{
            x: [-100, 0],

            opacity: [0, 1],
          }}
          transition={{ duration: 1.5 }}
          src="/img/p1.jpg"
          className="w-full"
          alt=""
        ></motion.img>
        <motion.img
          initial={{ x: 0, opacity: 0 }}
          whileInView={{
            x: [100, 0],

            opacity: [0, 1],
          }}
          src="/img/p2.jpg"
          alt=""
        />
        <motion.div
          initial={{ x: 0, opacity: 0 }}
          whileInView={{
            x: [-500, 0],

            opacity: [0, 1],
          }}
          transition={{ duration: 1.5 }}
          className="w-full columns-2 gap-5 lg:gap-8 sm:columns-2 lg:columns-3 xl:columns-4 [&>div:not(:first-child)]:mt-5 lg:[&>img:not(:first-child)]:mt-8 mt-12"
        >
          {gallery.map((item, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg shadow-ms cursor-cell z-[99]"
            >
              <img
                src={item}
                alt=""
                className="hover:scale-[1.1] duration-500 transition-all ease-in-out border-[2px] border-red-500"
              />
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Photo;
