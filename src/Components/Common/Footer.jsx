import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Mail, Phone, MapPin, ArrowUpRight, Instagram, Facebook, Youtube } from "lucide-react";
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

export default function Footer() {
  return (
    <footer className="relative w-full bg-[#051c12] pt-20 pb-10 overflow-hidden">
      {/* Decorative Background Element */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-7xl h-px bg-gradient-to-r from-transparent via-[#c5a059]/30 to-transparent" />
      
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Top Section: Brand Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-20">
          
          {/* Brand Identity */}
          <motion.div 
            custom={0} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-5 flex flex-col items-start"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 border border-[#c5a059]/40 rounded-full flex items-center justify-center">
                <LazyImage src="/logo.webp" alt="MH" className="w-full h-full object-contain brightness-125" />
              </div>
              <h2 className="text-[#c5a059] font-serif text-3xl tracking-widest uppercase">
               Mehdi Hasan Tailor
              </h2>
            </div>
            <p className="text-white/50 font-serif italic text-lg leading-relaxed max-w-md">
              "Every stitch tells a story of heritage, every garment a legacy of sartorial excellence."
            </p>
            
            <div className="flex gap-6 mt-8">
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

          {/* Navigation Links */}
          <div className="lg:col-span-4 grid grid-cols-2 gap-8">
            <motion.div custom={1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h4 className="text-[#c5a059] font-sans text-[10px] tracking-[0.3em] uppercase mb-8">The Brand</h4>
              <ul className="space-y-4">
                {brandLinks.map((link) => (
                  <li key={link.name}>
                    <Link to={link.path} className="group text-white/60 text-sm font-light hover:text-white transition-colors flex items-center gap-2">
                      <span>{link.name}</span>
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div custom={2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}>
              <h4 className="text-[#c5a059] font-sans text-[10px] tracking-[0.3em] uppercase mb-8">Services</h4>
              <ul className="space-y-4">
                {serviceLinks.map((link) => (
                  <li key={link}>
                    <a href="#" className="group text-white/60 text-sm font-light hover:text-white transition-colors flex items-center gap-2">
                      <span>{link}</span>
                      <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-all -translate-y-1" />
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          {/* Contact / Location */}
          <motion.div 
            custom={3} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
            className="lg:col-span-3 space-y-8"
          >
            <div>
              <h4 className="text-[#c5a059] font-sans text-[10px] tracking-[0.3em] uppercase mb-6 flex items-center gap-2">
                <MapPin size={12} /> Flagship Studio
              </h4>
              <p className="text-white/50 text-sm font-light leading-loose tracking-wide">
               Tasveer Mahal, opp. Head Post Office, Civil Lines, <br/> Aligarh, Uttar Pradesh 202001
              </p>
            </div>
            
            <div className="pt-4 border-t border-white/5 flex flex-col gap-2">
              <a href="mailto:tailormehdihasan@gmail.com" className="text-white/80 hover:text-[#c5a059] transition-colors font-serif italic tracking-wide">
                tailormehdihasan@gmail.com
              </a>
              <span className="text-white/30 text-xs tracking-widest">+91 82669 75779</span>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-10 border-t border-white/5 flex flex-col xl:flex-row justify-between items-center gap-6">
          <p className="text-white/20 text-[10px] tracking-[0.3em] uppercase w-full xl:w-1/3 text-center xl:text-left">
            © 2026 Mehdi Hasan. All Rights Reserved.
          </p>
          
          <div className="flex justify-center w-full xl:w-1/3">
            <p className="text-white/40 text-[10px] font-sans tracking-[0.15em] uppercase flex items-center gap-2">
              Website by <span className="text-white/80 font-medium">Atif Afsar</span> | 
              <span className="bg-white/95 px-1.5 py-0.5 rounded-[2px] font-bold tracking-widest flex items-center shadow-sm ml-1" title="The Brandsway">
                <span className="text-black text-[9px]">The Brands</span><span className="text-[#dc2626] text-[9px]">way</span>
              </span>
            </p>
          </div>

          <div className="flex gap-8 w-full xl:w-1/3 justify-center xl:justify-end">
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