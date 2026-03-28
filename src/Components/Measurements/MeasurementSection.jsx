import React from 'react';
import { motion } from 'framer-motion';
import LazyImage from '../Common/LazyImage';

const MeasurementSection = () => {
  return (
    <section className="bg-black py-16 px-6 md:px-14 text-neutral-100 overflow-hidden">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-10 lg:gap-20">
        
        {/* Left Column: Instructions (Flex-1) */}
        <motion.div
          className="w-full md:flex-1 space-y-8"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="space-y-3">
            <h2 className="font-['Cormorant_Garamond'] text-4xl md:text-5xl text-white font-light italic tracking-wide">
              Measurements
            </h2>
            <div className="h-[1px] w-12 bg-[#b8965a]"></div>
          </div>
          
          <div className="space-y-6 font-['Raleway']">
            <p className="text-[#b8965a] text-[9px] tracking-[0.3em] font-bold uppercase">
              Guidelines for a Perfect Fit
            </p>
            
            <ul className="space-y-3 text-[11px] md:text-[12px] tracking-widest text-white/70 leading-relaxed uppercase">
              {[
                "Measure yourself just prior to placing an order.",
                "Fill the measurements in inches.",
                "Fill in all measurements before ordering.",
                "If possible, have yourself measured by a professional.",
                "Do not make extra allowance.",
                "Do not put tape too tight."
              ].map((text, i) => (
                <li key={i} className="flex gap-3 items-start">
                  <span className="text-[#b8965a] font-bold">0{i + 1}</span>
                  {text}
                </li>
              ))}
            </ul>

            <div className="pt-6 border-t border-white/10 max-w-md">
              <p className="text-[10px] leading-relaxed text-white/40 tracking-[0.1em] uppercase">
                Submit your <span className="text-white">Name, Phone & Email</span> to sync these measurements with your bespoke profile.
              </p>
            </div>
          </div>
        </motion.div>
        
        {/* Right Column: Smaller, Responsive Image Container */}
        <motion.div
          className="w-full max-w-[320px] md:max-w-[380px] lg:max-w-[420px]"
          initial={{ opacity: 0, scale: 0.98 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="relative p-4 md:p-6 bg-neutral-900/40 rounded-sm border border-white/5 backdrop-blur-sm group">
            {/* Subtle Gold Corner Accents */}
            <div className="absolute top-0 left-0 w-4 h-4 border-t border-l border-[#b8965a]/40"></div>
            <div className="absolute bottom-0 right-0 w-4 h-4 border-b border-r border-[#b8965a]/40"></div>
            
            <div className="overflow-hidden rounded-sm">
              <LazyImage 
                src="/measurement.webp" 
                alt="Measurement Guide" 
                className="w-full h-auto object-contain transition-transform duration-1000 group-hover:scale-105"
              />
            </div>
            
            <div className="mt-4 flex justify-between items-center border-t border-white/5 pt-4">
              <span className="text-[8px] font-['Raleway'] tracking-[0.5em] uppercase text-[#b8965a]">
                Anatomical Chart
              </span>
              <span className="text-[8px] font-['Raleway'] tracking-[0.3em] uppercase text-white/30">
                Ref: MH-2026
              </span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default MeasurementSection;