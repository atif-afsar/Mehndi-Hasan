import React from "react";

const ValuesGrid = () => {
  const values = [
    { 
      title: "The Golden Ratio", 
      desc: "We believe every body is a canvas. Our master cutters use ancestral geometry to ensure proportions that enhance your natural silhouette.",
      icon: "📐"
    },
    { 
      title: "Ethical Sourcing", 
      desc: "Our wool is sourced from the finest mills in Italy and Scotland, ensuring sustainable practices and superior durability.",
      icon: "🍃"
    },
    { 
      title: "A Lifetime Stitch", 
      desc: "A Mehdi Hasan suit is built to last. We provide complimentary lifetime adjustments to ensure your legacy remains sharp.",
      icon: "🧵"
    }
  ];

  return (
    <section className="bg-[#0a1310] py-40 px-10">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {values.map((v, i) => (
          <div key={i} className="p-12 border border-white/5 hover:border-[#c5a059]/20 transition-all group bg-[#0d1815]">
            <div className="mb-8 opacity-60 group-hover:opacity-100 transition-opacity">
               <span className="text-3xl text-[#c5a059]">{v.icon}</span>
            </div>
            <h3 className="text-white text-xl font-medium tracking-wide mb-6">
              {v.title}
            </h3>
            <p className="text-gray-500 font-light text-xs leading-relaxed">
              {v.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ValuesGrid;
