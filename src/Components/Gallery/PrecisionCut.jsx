import React from 'react';

const PrecisionCut = () => {
  return (
    <section className="bg-[#0a1310] py-24 px-6 md:px-14">
      <div className="max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Top Content Area */}
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto mb-16 space-y-6">
          <div className="flex items-center gap-4">
            <div className="h-[1px] w-8 bg-[#b8965a]"></div>
            <span className="font-['Cormorant_Garamond'] text-[24px] italic text-[#b8965a]">02</span>
            <div className="h-[1px] w-8 bg-[#b8965a]"></div>
          </div>
          
          <h3 className="font-['Cormorant_Garamond'] text-[2.5rem] md:text-[3rem] text-white leading-tight font-light">
            Precision in the <span className="text-[#b8965a] font-medium">Cut</span>
          </h3>

          <p className="font-['Raleway'] text-[13px] text-white/60 leading-[1.8] font-light tracking-wide">
            Pattern cutting is an architectural discipline. Each silhouette is mapped out by hand, ensuring that every angle complements the human form with mathematical precision.
          </p>
        </div>

        {/* Full width-ish Image */}
        <div className="w-full max-w-4xl mx-auto relative group">
          <div className="relative overflow-hidden border border-white/5 rounded-sm">
             <img 
               src="https://images.unsplash.com/photo-1596489392813-982823b12ea8?q=80&w=2070&auto=format&fit=crop" 
               alt="Tailor cutting pattern on fabric"
               className="w-full aspect-[2/1] md:aspect-[21/9] object-cover transition-transform duration-1000 group-hover:scale-105"
             />
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-700"></div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default PrecisionCut;
