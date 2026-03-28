import { Link } from "react-router-dom";

const MasterTailoring = () => {
  return (
    <section className="bg-[#0a1310] py-24 md:py-56 px-6 text-center border-t border-white/5 relative overflow-hidden">
      {/* Decorative texture */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[40vw] font-serif italic text-white opacity-[0.01] select-none pointer-events-none">
        Bespoke
      </div>

      <div className="max-w-5xl mx-auto relative z-10">
        <p className="text-[9px] md:text-[10px] tracking-[0.6em] text-[#c5a059] uppercase font-bold mb-8">
          Master Tailoring
        </p>
        <h2 className="text-4xl sm:text-5xl md:text-8xl font-serif font-medium text-white mb-10 leading-[1.1] tracking-tight">
          Experience Royal <br className="hidden md:block" /> 
          Tailoring <span className="italic text-[#c5a059]">In Person</span>
        </h2>
        <p className="text-gray-500 max-w-2xl mx-auto text-sm md:text-lg font-light leading-relaxed tracking-widest mb-16 opacity-80">
          Book a private consultation with our master tailors for a personalized fitting 
          experience that honors tradition and excellence.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-8">
          <Link to="/measurements" className="w-full sm:w-auto px-12 py-5 bg-[#c5a059] text-black text-[10px] tracking-[0.3em] font-bold uppercase transition-all duration-500 hover:bg-white hover:tracking-[0.4em] text-center">
            Book Appointment
          </Link>
          <Link to="/gallery" className="w-full sm:w-auto px-12 py-5 border border-[#c5a059]/30 text-[#c5a059] text-[10px] tracking-[0.3em] font-bold uppercase transition-all duration-500 hover:border-white hover:text-white text-center">
            View Bespoke Process
          </Link>
        </div>
      </div>
    </section>
  );
};

export default MasterTailoring;
