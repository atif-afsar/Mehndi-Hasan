import React from "react";
import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Vikram Sethi",
    text: "The attention to detail in my wedding sherwani was beyond compare. It wasn't just a garment; it was a masterpiece of heritage.",
  },
  {
    name: "Alistair Graham",
    text: "A lineage of excellence that lives up to its reputation. The bespoke experience was seamless, and the final fit is absolute perfection.",
  },
  {
    name: "Zia-ul-Haq",
    text: "Carrying forward the Aligarh tradition with such grace is a feat. The only choice for true aristocratic elegance.",
  },
  {
    name: "Julian Vance",
    text: "The craftsmanship evokes a sense of timeless luxury that is rare to find in the modern world. Truly exceptional service.",
  },
];

const TestimonialSection = () => {
  // We double the array to ensure a seamless infinite loop
  const duplicatedTestimonials = [...testimonials, ...testimonials];

  return (
    <section className="bg-[#0a0f0d] py-20 overflow-hidden">
      <div className="container mx-auto px-4 mb-16 text-center">
        <h2 className="text-[#c5a059] font-serif text-4xl md:text-5xl italic mb-2">
          Patron Voices
        </h2>
        <div className="w-24 h-[1px] bg-[#c5a059]/40 mx-auto"></div>
      </div>

      {/* Marquee Container with Gradient Mask */}
      <div className="relative flex overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_20%,black_80%,transparent)]">
        <motion.div
          className="flex gap-8 pr-8"
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            ease: "linear",
            duration: 30,
            repeat: Infinity,
          }}
        >
          {duplicatedTestimonials.map((item, idx) => (
            <div
              key={idx}
              className="w-[350px] md:w-[450px] flex-shrink-0 flex flex-col items-center text-center p-8"
            >
              {/* Gold Quote Icon */}
              <span className="text-[#c5a059] text-4xl font-serif opacity-60 mb-6">
                &ldquo;
              </span>
              
              <p className="text-gray-300 text-lg md:text-xl font-light italic leading-relaxed mb-8">
                {item.text}
              </p>
              
              <h3 className="text-[#c5a059] uppercase tracking-[0.2em] text-sm font-semibold">
                {item.name}
              </h3>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default TestimonialSection;