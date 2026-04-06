import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Phone, MapPin, ArrowUpRight, Instagram, Facebook, Youtube, ChevronDown } from "lucide-react";
import LazyImage from './LazyImage';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] },
  }),
};

const brandLinks = [
  { name: "Collections", path: "/collections" },
  { name: "Journals", path: "/journals" },
  { name: "Measurements", path: "/measurements" },
  { name: "Gallery", path: "/gallery" },
];
const serviceLinks = ["Bespoke Tailoring", "Wedding Consultations", "Corporate Gifting", "Global Shipping"];

const MobileAccordion = ({ title, children, isOpen, onClick }) => (
  <div className="border-b border-white/5 py-4 lg:py-0 lg:border-none lg:h-full flex flex-col">
    <button 
      onClick={onClick}
      className="w-full flex justify-between items-center lg:cursor-default lg:pointer-events-none"
      aria-expanded={isOpen}
    >
      <h4 className="text-[#c5a059] font-sans text-[10px] tracking-[0.3em] uppercase lg:mb-8">{title}</h4>
      <ChevronDown 
        size={14} 
        className={`text-[#c5a059] transition-transform duration-300 lg:hidden ${isOpen ? 'rotate-180' : ''}`} 
      />
    </button>
    <div className="lg:hidden">
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="pt-4 pb-2">
              {children}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
    <div className="hidden lg:block pt-0 flex-1">
      {children}
    </div>
  </div>
);

export default function Footer() {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="relative w-full bg-[#051c12] pt-12 lg:pt-20 pb-10 overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#c5a059]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section: Brand Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 lg:gap-8 mb-12 lg:mb-20">
          
          {/* Brand Identity */}
          <motion.div 
            custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-4 flex flex-col items-start lg:pr-8 mb-8 lg:mb-0 border-b border-white/5 pb-8 lg:border-none lg:pb-0"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-12 h-12 lg:w-14 lg:h-14 border border-[#c5a059]/40 rounded-full flex items-center justify-center shrink-0">
                <LazyImage src="/logo.webp" alt="MH" className="w-full h-full object-contain brightness-125" />
              </div>
              <h2 className="text-[#c5a059] font-serif text-2xl lg:text-3xl tracking-widest uppercase">
               Mehdi Hasan Tailor
              </h2>
            </div>
            <p className="text-white/50 font-serif italic text-base lg:text-lg leading-relaxed max-w-md">
              "Every stitch tells a story of heritage, every garment a legacy of sartorial excellence."
            </p>
            
            <div className="flex gap-6 mt-6 lg:mt-8">
              <motion.a 
                href="https://www.instagram.com/mehdihasanaligarh/" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#c5a059" }}
                className="text-white/30 transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </motion.a>
              <motion.a 
                href="https://www.facebook.com/Aligarhsherwani/"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#c5a059" }}
                className="text-white/30 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={20} />
              </motion.a>
              <motion.a 
                href="https://www.youtube.com/@mehdihasantailoraligarh43" 
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ y: -3, color: "#c5a059" }}
                className="text-white/30 transition-colors"
                aria-label="YouTube"
              >
                <Youtube size={20} />
              </motion.a>
            </div>
          </motion.div>

          {/* Navigation Links Accordions */}
          <div className="lg:col-span-4 flex flex-col lg:grid lg:grid-cols-2 lg:gap-8">
            <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <MobileAccordion 
                title="The Brand" 
                isOpen={openSection === 'brand'} 
                onClick={() => toggleSection('brand')}
              >
                <ul className="space-y-4">
                  {brandLinks.map((link) => (
                    <li key={link.name}>
                      <Link to={link.path} className="group text-white/60 text-sm font-light hover:text-white transition-colors flex items-center gap-2">
                        <span>{link.name}</span>
                        <ArrowUpRight size={12} className="opacity-0 lg:group-hover:opacity-100 transition-all -translate-y-1 hidden lg:block" />
                      </Link>
                    </li>
                  ))}
                </ul>
              </MobileAccordion>
            </motion.div>

            <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <MobileAccordion 
                title="Services" 
                isOpen={openSection === 'services'} 
                onClick={() => toggleSection('services')}
              >
                <ul className="space-y-4">
                  {serviceLinks.map((link) => (
                    <li key={link}>
                      <a href="#" className="group text-white/60 text-sm font-light hover:text-white transition-colors flex items-center gap-2">
                        <span>{link}</span>
                        <ArrowUpRight size={12} className="opacity-0 lg:group-hover:opacity-100 transition-all -translate-y-1 hidden lg:block" />
                      </a>
                    </li>
                  ))}
                </ul>
              </MobileAccordion>
            </motion.div>
          </div>

          {/* Contact / Location - Always Open */}
          <div className="lg:col-span-4">
            <motion.div 
              custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="h-full border-b border-white/5 py-4 lg:py-0 lg:border-none"
            >
              <h4 className="text-[#c5a059] font-sans text-[10px] tracking-[0.3em] uppercase lg:mb-8">Contact / Location</h4>
              <div className="pt-4 lg:pt-0 space-y-6">
                <div>
                  <h4 className="text-[#c5a059] font-sans text-[10px] tracking-[0.3em] uppercase mb-3 flex items-center gap-2">
                    <MapPin size={12} /> Aligarh Studio
                  </h4>
                  <p className="text-white/50 text-[13px] font-light leading-relaxed tracking-wide">
                  Tasveer Mahal, opp. Head Post Office, Civil Lines, <br/> Aligarh, Uttar Pradesh 202001
                  </p>
                </div>

                <div>
                  <h4 className="text-[#c5a059] font-sans text-[10px] tracking-[0.3em] uppercase mb-3 flex items-center gap-2">
                    <MapPin size={12} /> Delhi Branches
                  </h4>
                  <p className="text-white/50 text-[13px] font-light leading-relaxed tracking-wide mb-2.5">
                  A.J.N.S. Plaza, New Shahji Sweet, Jasola Road, Kalindi Kunj, Okhla, New Delhi
                  </p>
                  <p className="text-white/50 text-[13px] font-light leading-relaxed tracking-wide">
                  Rehman Complex, Batla House Chowk, Opp. Jamia Cooperative Bank, New Delhi-110025
                  </p>
                </div>
                
                <div className="pt-4 border-t border-white/5 flex flex-col gap-2">
                  <a href="mailto:tailormehdihasan@gmail.com" className="text-white/80 hover:text-[#c5a059] transition-colors font-serif italic tracking-wide mb-1 text-sm">
                    tailormehdihasan@gmail.com
                  </a>
                  <div className="flex flex-col gap-1.5">
                    <a href="tel:+919359784628" className="text-white/50 hover:text-[#c5a059] transition-colors text-xs tracking-widest flex items-center gap-2">
                      <Phone size={10} className="text-[#c5a059]" /> +91 93597 84628 <span className="text-white/30 text-[10px]">(Akhtar Mehdi)</span>
                    </a>
                    <a href="tel:+918791630471" className="text-white/50 hover:text-[#c5a059] transition-colors text-xs tracking-widest flex items-center gap-2">
                      <Phone size={10} className="text-[#c5a059]" /> +91 87916 30471 <span className="text-white/30 text-[10px]">(Usaid Mehdi)</span>
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
          
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 lg:pt-10 border-t border-white/5 flex flex-col xl:flex-row justify-between items-center gap-4 lg:gap-6">
          <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase w-full xl:w-1/3 text-center xl:text-left order-3 xl:order-1">
            © 2026 Mehdi Hasan. All Rights Reserved.
          </p>
          
          <div className="flex justify-center w-full xl:w-1/3 order-1 xl:order-2">
            <p className="text-white/40 text-[10px] font-sans tracking-[0.15em] uppercase flex items-center gap-2 flex-wrap justify-center text-center">
              Website by <span className="text-white/80 font-medium">Atif Afsar</span> | 
              <span className="bg-white/95 px-1.5 py-0.5 rounded-[2px] font-bold tracking-widest flex items-center shadow-sm ml-1" title="The Brandsway">
                <span className="text-black text-[9px]">The Brands</span><span className="text-[#dc2626] text-[9px]">way</span>
              </span>
            </p>
          </div>

          <div className="flex gap-6 lg:gap-8 w-full xl:w-1/3 justify-center xl:justify-end order-2 xl:order-3 pt-2 pb-2 xl:py-0">
            <Link to="/privacy" className="text-white/20 hover:text-[#c5a059] text-[10px] tracking-[0.2em] uppercase transition-colors">
              Privacy
            </Link>
            <Link to="/terms" className="text-white/20 hover:text-[#c5a059] text-[10px] tracking-[0.2em] uppercase transition-colors">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}