import React, { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const Heritage = () => {
  const containerRef = useRef(null);
  
  // Text to be animated
  const quote = "For decades, Mehdi Hasan Tailors has been the custodian of sartorial excellence. We blend time-honored techniques passed down through generations with a contemporary vision of royalty. Every stitch tells a story of precision, passion, and the pursuit of perfection.";

  // Track scroll progress of this specific section
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 0.8", "end 0.5"], // Animation starts when section is 80% visible
  });

  return (
    <section 
      ref={containerRef}
      className="py-32 px-6 lg:px-20 bg-[#07100b] overflow-hidden"
    >
      <div className="mx-auto max-w-5xl text-center">
        {/* Animated Heading */}
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
          className="font-serif text-3xl md:text-5xl font-light mb-8 text-white tracking-[0.2em] uppercase"
        >
          Our <span className="text-[#c5a059]">Heritage</span>
        </motion.h2>

        <motion.div 
          initial={{ width: 0 }}
          whileInView={{ width: "96px" }}
          transition={{ duration: 1.5, delay: 0.5 }}
          viewport={{ once: true }}
          className="h-[1px] bg-[#c5a059]/50 mx-auto mb-16"
        ></motion.div>

        {/* Scroll-Filling Text Container */}
        <div className="relative">
          <p className="text-white/10 text-xl md:text-3xl leading-[1.8] font-serif italic tracking-wide">
            {quote.split(" ").map((word, i) => (
              <Word key={i} progress={scrollYProgress} range={[i / quote.split(" ").length, (i + 1) / quote.split(" ").length]}>
                {word}
              </Word>
            ))}
          </p>
        </div>
      </div>
    </section>
  );
};

// Sub-component to handle individual word opacity
const Word = ({ children, progress, range }) => {
  const opacity = useTransform(progress, range, [0.1, 1]); // Fills from 10% to 100% opacity
  
  return (
    <span className="relative mx-1.5 inline-block">
      <motion.span style={{ opacity }} className="text-[#c5a059]">
        {children}
      </motion.span>
    </span>
  );
};

export default Heritage;