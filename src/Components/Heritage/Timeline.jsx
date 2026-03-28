import React from "react";

const Timeline = () => {
  const events = [
    { year: "1944", title: "The First Atelier", desc: "Late Mehdi Hasan opened his first workshop in Anarkali, Lahore, specializing in Sherwanis.", icon: "⎈" },
    { year: "1965", title: "Royal Appointment", desc: "Appointed as the official tailors for diplomacy and heads of state visiting the region.", icon: "♛" },
    { year: "1990", title: "Global Presence", desc: "Opening our first international trunk show in London, bringing Eastern craft to the West.", icon: "◈" },
    { year: "Today", title: "Modern Mastery", desc: "Combining AI-assisted measurements with 100% hand-crafted assembly for a perfect fit.", icon: "✦" }
  ];

  return (
    <section className="bg-[#0a1310] py-24 md:py-48 px-6 text-white border-y border-white/5 relative overflow-hidden">
      <div className="max-w-6xl mx-auto relative z-10">
        <div className="text-center mb-24 md:mb-40">
            <h2 className="text-4xl md:text-6xl font-serif font-medium mb-4 tracking-tight">The Golden <span className="italic text-[#c5a059]">Timeline</span></h2>
            <p className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase font-bold opacity-60">Chronicles of Excellence</p>
        </div>

        <div className="relative">
          {/* Vertical Line - Hidden on small mobile or centered */}
          <div className="absolute left-1/2 -translate-x-px top-0 bottom-0 w-[1px] bg-gradient-to-b from-transparent via-[#c5a059]/20 to-transparent hidden md:block"></div>

          <div className="space-y-24 md:space-y-48 relative">
            {events.map((e, i) => (
              <div key={i} className={`flex flex-col md:flex-row items-center gap-8 md:gap-20 ${i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}>
                {/* Text Side */}
                <div className={`flex-1 w-full ${i % 2 === 0 ? 'md:text-right' : 'md:text-left'} text-center`}>
                  <p className="text-4xl md:text-5xl font-serif italic text-[#c5a059] mb-4 opacity-50">{e.year}</p>
                  <h3 className="text-lg md:text-xl font-medium tracking-widest uppercase mb-4 text-white">{e.title}</h3>
                  <p className="text-gray-500 text-sm font-light leading-relaxed tracking-wide max-w-sm mx-auto md:mx-0 inline-block">
                    {e.desc}
                  </p>
                </div>

                {/* Center Circle */}
                <div className="hidden md:flex w-16 h-16 rounded-full border border-[#c5a059]/30 bg-[#0a1310] items-center justify-center z-10 transition-all duration-500 hover:scale-110 hover:border-[#c5a059]">
                  <span className="text-xl text-[#c5a059] opacity-80">{e.icon}</span>
                </div>

                {/* Empty Side for spacing */}
                <div className="flex-1 hidden md:block"></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
