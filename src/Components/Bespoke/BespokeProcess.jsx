import React from "react";

const BespokeProcess = () => {
  const steps = [
    {
      title: "The Consultation",
      desc: "A dialogue between you and the master tailor to understand your lifestyle, preferences, and the occasion.",
      image: "https://images.unsplash.com/photo-1507679799987-c7377ec48696?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "The Measurement",
      desc: "With over 40 precise measurements taken, we create a unique paper pattern that captures your personal silhouette.",
      image: "https://images.unsplash.com/photo-1594938384824-0227160503ba?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "The First Fitting",
      desc: "An interim 'baste' garment is created to sculpt the fabric to your body, ensuring the drape is absolutely perfect.",
      image: "https://images.unsplash.com/photo-1598460350580-e41209325da2?auto=format&fit=crop&q=80&w=800"
    },
    {
      title: "The Final Stitch",
      desc: "Dozens of hours are spent on hand-finishing, from the silk-lined interior to the functional buttonholes.",
      image: "https://images.unsplash.com/photo-1593032465175-481ac7f40147?auto=format&fit=crop&q=80&w=800"
    }
  ];

  return (
    <section className="bg-[#0a1310] py-24 md:py-48 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col gap-32 md:gap-64">
          {steps.map((step, i) => (
            <div key={i} className={`flex flex-col lg:flex-row items-center gap-16 md:gap-32 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="flex-1 space-y-8 text-center lg:text-left">
                <div className="inline-block px-6 py-2 border border-[#c5a059]/20 rounded-full mb-4">
                   <p className="text-[9px] md:text-[10px] tracking-[0.4em] text-[#c5a059] font-bold uppercase">Phase 0{i+1}</p>
                </div>
                <h3 className="text-4xl sm:text-5xl md:text-7xl font-serif font-medium tracking-tight text-white leading-tight">
                    {step.title.split(' ').slice(0, -1).join(' ')} <br className="hidden md:block" /> 
                    <span className="italic text-[#c5a059]">{step.title.split(' ').slice(-1)}</span>
                </h3>
                <p className="text-gray-500 text-sm md:text-lg font-light leading-relaxed tracking-widest max-w-lg mx-auto lg:mx-0 opacity-80">
                  {step.desc}
                </p>
              </div>

              <div className="flex-1 w-full relative group">
                <div className="aspect-[4/5] md:aspect-[4/3] overflow-hidden border border-white/5 bg-[#0d1815] transform transition-all duration-1000 group-hover:scale-105">
                  <img 
                    src={step.image} 
                    alt={step.title} 
                    className="w-full h-full object-cover grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out"
                  />
                </div>
                {/* Accent frames */}
                <div className={`absolute -inset-4 md:-inset-10 border border-[#c5a059]/10 -z-10 transition-transform duration-700 group-hover:scale-110 ${i % 2 !== 0 ? 'translate-x-4 translate-y-4' : '-translate-x-4 -translate-y-4'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BespokeProcess;
