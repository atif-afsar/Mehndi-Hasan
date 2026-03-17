import React from "react";

const BespokeProcess = () => {
  const steps = [
    {
      title: "The Consultation",
      desc: "A dialogue between you and the master tailor to understand your lifestyle, preferences, and the occasion.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuD4YqOAEd6VzXEzF-AYrazLr9u3xb1gd5FoMppPP82G2CycNbZmUfinRo7Yz02bWSKf7kHBxpTVxn5I0d-eQb_5WFse60tA58rFZ26wPK1vb6GsFV71hQXHyw7ZSJEoc0FTkP3n5uSHtihVyJkbjXCZH6wMIQdvedGgZlztXMb8i9fsAPyVSPErFUUWjeHfLZ2UoP-FGHbLFCs5wrO5j-NYu7tp6E4k8iXVCxdz8oBBNccjZosSCgp-zRLDwoFZKAZi7cL4AbJokwGF"
    },
    {
      title: "The Measurement",
      desc: "With over 40 precise measurements taken, we create a unique paper pattern that captures your personal silhouette.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHlK3HFocGGOkLPvgViQCgmLywZq60iXs76jkJ7t_JOrQAxjp8M3myx13EDz1V2bddj8ii1fDd-W-9P19ULeOFzzojchwYQytBQXZK65ZFGuUGyPJOqyzNnzqTEU5Ax4uOfkFTmGVtihSPEpZvp-FiDUSdFgn8klRREsi5XYqOS5IehUVVo1734mduSPk1Cudt737kLBdWRN2ABNUokt8Sn3_tmeYProprgomt1ka8qikyrHP_Z9WRfmaPnyvZVvRs0poj7HE2ESJX"
    },
    {
      title: "The First Fitting",
      desc: "An interim 'baste' garment is created to sculpt the fabric to your body, ensuring the drape is absolutely perfect.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDLYi9PQvPHum3YvEfq8TmW_Kk-hUP0xEE1grWuSifJDbln4N6nTdpfFoaI-hFNFDto0ggM9PwP8hi8vXn73SuHlkx7lfdqyZ4HuvePSI5DMkGE4SQ3Vy1aTucSXVkiCh3xdoIvYQOFVmPHyBKuJ-QKk7kkTtPx5VLQDpZz0Ll4Up82yyBWyFEoH-mxrkkyXqzMCnYL3ci7EW7cuChzWZ3zKaq4j3UFGE88OwBHcUZu_KTSQjk5RTVRvOkHxl8_pjEsQoGGWRAWd4AD"
    },
    {
      title: "The Final Stitch",
      desc: "Dozens of hours are spent on hand-finishing, from the silk-lined interior to the functional buttonholes.",
      image: "https://lh3.googleusercontent.com/aida-public/AB6AXuC_tlkhEpMk9YhGOQJGjlAsn3KCdpOcZA3wiQ_zno1J881AxBqNu2tGQ92yu_Qtsg7SKBGBZATXaMsMr5XrY7ZQvwskuJdhjPWpUBLzpPCBKAH1nt41NuFa8n9T1wHkJV4DhOCVdWxH-GYX-NTXS4pVdly7EZBEx2UDAgww8lZEteud0NvrtHFuKM3yPtS-ckOoMfo-ltNVk37nqkZYQ9OiLbDoaDDei475euFnZPzUy48wKKOncB9qWGWvAdLnKNw4AN0hSyvHEULi"
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
                    className="w-full h-full object-cover md:grayscale md:opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 ease-out"
                  />
                </div>
                {/* Accent frames - Hidden on mobile */}
                <div className={`hidden md:block absolute -inset-4 md:-inset-10 border border-[#c5a059]/10 -z-10 transition-transform duration-700 group-hover:scale-110 ${i % 2 !== 0 ? 'translate-x-4 translate-y-4' : '-translate-x-4 -translate-y-4'}`}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BespokeProcess;
