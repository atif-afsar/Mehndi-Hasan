import React from "react";
import { Link } from "react-router-dom";

const FeaturedCollections = () => {
  const collections = [
    {
      title: "The Royal Sherwani",
      desc: "Velvet & Silk masterpieces",
      image: "/Sherwanis/image1.png",
    },
    {
      title: "Classic Kurta",
      desc: "Heritage weaving techniques",
      image: "/kurta/kurta1.png",
    },
    {
      title: "Premium suits",
      desc: "Structured elegance, reimagined",
      image: "/Suits/suit2.png",
    },
    {
      title: "Bespoke Suiting",
      desc: "Precision in every stitch",
      image: "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800",
    },
    
  ];

  return (
    <section className="bg-[#0a1310] py-24 md:py-40 px-6 md:px-12 text-white border-y border-white/5">
      <div className="max-w-7xl mx-auto">

        {/* Header */}
        <header className="flex flex-col sm:flex-row items-start sm:items-end justify-between mb-16 md:mb-24 gap-8">
          <div className="max-w-2xl">
            <p className="text-[9px] md:text-[10px] tracking-[0.5em] text-[#c5a059] uppercase mb-4 font-bold">
              Signature Series
            </p>
            <h2 className="text-4xl md:text-7xl font-serif font-medium tracking-tight leading-tight">
              Curated{" "}
              <span className="italic text-[#c5a059]">Collections</span>
            </h2>
          </div>
          <Link to="/collections" className="text-[#c5a059] text-[10px] tracking-[0.3em] uppercase cursor-pointer hover:text-white transition-all duration-300 border-b border-[#c5a059]/20 hover:border-white pb-1 font-bold">
            View All Series
          </Link>
        </header>

        {/* Grid — 1 col mobile, 2 col desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-x-12 md:gap-y-20">
          {collections.map((item, idx) => (
            <Link
              to="/collections"
              key={idx}
              className="group cursor-pointer flex flex-col md:block border-b border-white/5 md:border-none py-10 md:py-0 first:pt-0 last:border-none md:last:border-none"
            >
              {/* Mobile: horizontal row layout */}
              <div className="flex gap-5 md:block">

                {/* Image container */}
                <div
                  className="
                    overflow-hidden
                    w-24 h-32 flex-shrink-0
                    md:w-full md:h-auto md:aspect-[4/5]
                    mb-0 md:mb-8
                    relative
                    border border-white/5
                    bg-[#0d1815]
                  "
                >
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-[1.5s] ease-out"
                  />
                  {/* Overlay — desktop only */}
                  <div className="hidden md:block absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                </div>

                {/* Text content */}
                <div className="flex flex-col justify-center md:block">
                  <p className="text-[9px] tracking-[0.4em] text-[#c5a059] uppercase mb-2 md:mb-3 font-bold opacity-60">
                    Series 0{idx + 1}
                  </p>
                  <h3 className="text-base md:text-2xl font-serif font-medium tracking-wide mb-1 md:mb-3 text-white group-hover:text-[#c5a059] transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-xs md:text-sm text-gray-500 font-light tracking-wide leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>

      </div>
    </section>
  );
};

export default FeaturedCollections;