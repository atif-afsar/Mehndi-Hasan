import React from "react";
import { MapPin, Phone } from "lucide-react";

const AddressSection = () => {
  return (
    <section className="relative w-full bg-[#0a1310] py-16 md:py-24 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16">
          <div className="w-12 h-12 border border-[#c5a059]/30 rounded-full flex items-center justify-center mb-6">
            <MapPin size={20} className="text-[#c5a059]" />
          </div>
          <h3 className="text-[#c5a059] font-sans text-[10px] tracking-[0.4em] uppercase mb-3">
            Visit Our Stores
          </h3>
          <div className="h-[1px] w-16 bg-[#c5a059] opacity-30"></div>
        </div>

        {/* Address Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          
          {/* Aligarh Studio */}
          <div className="group relative bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5 p-8 transition-all duration-500 hover:border-[#c5a059]/30 hover:bg-white/[0.03]">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c5a059]/20 to-transparent"></div>
            
            <div className="flex items-start gap-3 mb-4">
              <MapPin size={16} className="text-[#c5a059] mt-1 shrink-0" />
              <h4 className="text-white font-sans text-sm tracking-[0.2em] uppercase">
                Aligarh Studio
              </h4>
            </div>
            
            <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
                               Tasveer Mahal, opp. Head Post Office, Civil Lines, <br/> Aligarh, Uttar Pradesh 202001

            </p>

            <div className="space-y-2 pt-4 border-t border-white/5">
              <a href="tel:+918266975779" className="flex items-center gap-2 text-white/50 hover:text-[#c5a059] transition-colors text-xs">
                <Phone size={12} className="text-[#c5a059]" />
                <span>+91 82669 75779</span>
              </a>
              <a href="tel:+919359784628" className="flex items-center gap-2 text-white/50 hover:text-[#c5a059] transition-colors text-xs">
                <Phone size={12} className="text-[#c5a059]" />
                <span>+91 93597 84628</span>
              </a>
            </div>
          </div>

          {/* Delhi Branch 1 */}
          <div className="group relative bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5 p-8 transition-all duration-500 hover:border-[#c5a059]/30 hover:bg-white/[0.03]">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c5a059]/20 to-transparent"></div>
            
            <div className="flex items-start gap-3 mb-4">
              <MapPin size={16} className="text-[#c5a059] mt-1 shrink-0" />
              <h4 className="text-white font-sans text-sm tracking-[0.2em] uppercase">
                Delhi - Okhla
              </h4>
            </div>
            
            <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
              A.J.N.S. PLAZA<br />
              New Shahji Sweet,<br />
              Jasola Road, Kalindi Kunj,<br />
              Okhla, New Delhi
            </p>

            <div className="space-y-2 pt-4 border-t border-white/5">
              <a href="tel:+918266975779" className="flex items-center gap-2 text-white/50 hover:text-[#c5a059] transition-colors text-xs">
                <Phone size={12} className="text-[#c5a059]" />
                <span>+91 82669 75779</span>
              </a>
            </div>
          </div>

          {/* Delhi Branch 2 */}
          <div className="group relative bg-gradient-to-b from-white/[0.02] to-transparent border border-white/5 p-8 transition-all duration-500 hover:border-[#c5a059]/30 hover:bg-white/[0.03]">
            <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-[#c5a059]/20 to-transparent"></div>
            
            <div className="flex items-start gap-3 mb-4">
              <MapPin size={16} className="text-[#c5a059] mt-1 shrink-0" />
              <h4 className="text-white font-sans text-sm tracking-[0.2em] uppercase">
                Delhi - Batla House
              </h4>
            </div>
            
            <p className="text-white/60 text-sm font-light leading-relaxed mb-6">
              Rehman Complex,<br />
              Batla House Chowk, Opp.<br />
              Jamia Cooperative Bank,<br />
              New Delhi-110025
            </p>

            <div className="space-y-2 pt-4 border-t border-white/5">
              <a href="tel:+918791630471" className="flex items-center gap-2 text-white/50 hover:text-[#c5a059] transition-colors text-xs">
                <Phone size={12} className="text-[#c5a059]" />
                <span>+91 87916 30471</span>
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Contact Info */}
        <div className="mt-12 pt-8 border-t border-white/5 text-center">
          <p className="text-white/40 text-xs tracking-wider mb-3">
            For inquiries and appointments
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8">
            <a href="tel:+919359784628" className="text-white/60 hover:text-[#c5a059] transition-colors text-sm flex items-center gap-2">
              <span className="text-[#c5a059] text-xs">Akhtar Mehdi</span>
              <span>+91 93597 84628</span>
            </a>
            <span className="hidden sm:block text-white/20">|</span>
            <a href="tel:+918791630471" className="text-white/60 hover:text-[#c5a059] transition-colors text-sm flex items-center gap-2">
              <span className="text-[#c5a059] text-xs">Usaid Mehdi</span>
              <span>+91 87916 30471</span>
            </a>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AddressSection;
