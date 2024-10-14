import React from "react";
import Marquee from "react-fast-marquee";
const SlidingText = () => {
  return (
    <section className="w-full bg-black mt-9 pt-4 pb-6 overflow-hidden">
      <Marquee direction="right">
        {Array.from({ length: 100 }, (_, i) => (
          <p
            key={i}
            className="title-font mx-10 text-red-100 text-lg font-bold"
          >
            Buy Now
          </p>
        ))}
      </Marquee>
    </section>
  );
};

export default SlidingText;
