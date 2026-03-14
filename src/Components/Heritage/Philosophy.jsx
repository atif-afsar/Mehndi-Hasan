import React from "react";

const Philosophy = () => {
  const values = [
    { title: "Authenticity", desc: "Honoring the original techniques of royal draping." },
    { title: "Precision", desc: "Every millimeter is measured for absolute perfection." },
    { title: "Soul", desc: "Hand-embroidery that breathes life into the fabric." }
  ];

  return (
    <section className="bg-[#0A120F] py-32 px-10 border-y border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          {values.map((v, i) => (
            <div key={i} className="text-center group">
              <div className="inline-flex items-center justify-center w-16 h-16 border border-[#e0b329]/30 rounded-full mb-8 group-hover:bg-[#e0b329]/10 transition-colors">
                <span className="text-[#e0b329] font-serif italic text-xl">0{i+1}</span>
              </div>
              <h3 className="text-white text-2xl font-light tracking-wide mb-4">
                {v.title}
              </h3>
              <p className="text-gray-500 font-light text-sm leading-relaxed max-w-xs mx-auto">
                {v.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Philosophy;
