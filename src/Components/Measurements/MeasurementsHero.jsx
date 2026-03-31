import LazyImage from '../Common/LazyImage';

const MeasurementsHero = () => {
  return (
    <section className="bg-[#E8DBB3] pt-32 pb-24 px-6 md:px-14">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        
        {/* Text Side */}
        <div className="flex-1 space-y-8">
          <div className="space-y-4">
            <h1 className="font-['Cormorant_Garamond'] text-[4rem] md:text-[5.5rem] leading-[1] text-[#1a3d0f] font-semibold">
              Precision
            </h1>
            <h2 className="font-['Cormorant_Garamond'] text-[3rem] md:text-[4rem] leading-[1] text-[#234d12] italic font-medium">
              Is the Soul of Elegance
            </h2>
          </div>

          <p className="font-['Raleway'] text-[14px] text-[#234d12]/80 leading-[1.8] max-w-md font-normal tracking-wide uppercase">
            Our bespoke service requires an uncompromising level of detail. Follow the anatomical guide to ensure your garment reflects the unique architecture of your physique.
          </p>

          <div className="space-y-10 pt-10">
            <div className="flex gap-6">
              <span className="font-['Cormorant_Garamond'] text-[24px] text-[#234d12] font-semibold leading-none">01.</span>
              <div className="space-y-2">
                <h4 className="font-['Raleway'] text-[12px] text-[#1a3d0f] tracking-[0.2em] font-bold uppercase">Posture Check</h4>
                <p className="font-['Raleway'] text-[13px] text-[#234d12]/85 leading-relaxed max-w-sm">
                  Stand naturally. Do not pull in your stomach or puff out your chest. Comfort is paramount for a perfect fit.
                </p>
              </div>
            </div>

            <div className="flex gap-6">
              <span className="font-['Cormorant_Garamond'] text-[24px] text-[#234d12] font-semibold leading-none">02.</span>
              <div className="space-y-2">
                <h4 className="font-['Raleway'] text-[12px] text-[#1a3d0f] tracking-[0.2em] font-bold uppercase">Tape Tension</h4>
                <p className="font-['Raleway'] text-[13px] text-[#234d12]/85 leading-relaxed max-w-sm">
                   The tape should be snug but not restrictive. You should be able to fit one finger behind the tape at all times.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Image Side */}
        <div className="flex-1 w-full max-w-xl">
          <div className="relative group">
            {/* Dark inner Glow/Box */}
            <div className="bg-[#d4c89a] p-6 border-2 border-[#234d12]/30 rounded-lg shadow-xl relative">
              <div className="aspect-[4/5] overflow-hidden rounded-md">
                <LazyImage 
                  src="/Sherwanis/image3.webp" 
                  alt="Tailor's mannequin"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                />
              </div>
              
              {/* Reference Text (Bottom corner in image) */}
              <div className="absolute bottom-10 left-10 text-left border-l-2 border-[#234d12] pl-4">
                <h5 className="font-['Raleway'] text-[12px] text-[#FFFDEB] tracking-[0.2em] font-bold uppercase mb-1">Anatomical Reference</h5>
                <p className="font-['Raleway'] text-[9px] text-[#FFFDEB]/70 tracking-[0.1em] uppercase">Technical Archive: Size Module Guide</p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default MeasurementsHero;
