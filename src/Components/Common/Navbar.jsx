import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import LazyImage from './LazyImage';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isOpen]);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: "Heritage", path: "/heritage" },
    { name: "Journals", path: "/journals" },
    { name: "Measurements", path: "/measurements" },
    { name: "Gallery", path: "/gallery" },
    
  ];

  return (
    <>
      {/* ── MAIN NAV ── */}
      <nav
        className={`fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-6 md:px-14 transition-all duration-700
        ${scrolled
          ? "h-[70px] bg-[#E8DBB3]/95 backdrop-blur-md border-b border-[#0d2b1e]/15 shadow-sm"
          : "h-[80px] bg-[#E8DBB3]"
        }`}
      >
        {/* REFINED LOGO AREA */}
        <Link to="/" className="flex items-center gap-4 z-[110] group">
          <div className="relative w-12 h-12 md:w-14 md:h-14 flex items-center justify-center">
            {/* Elegant Outer Ring */}
            <div className="absolute inset-0 border border-[#b8965a]/30 rounded-full group-hover:scale-110 group-hover:border-[#b8965a] transition-all duration-700 ease-out" />
            
            {/* Logo Image / Monogram */}
            <div className="relative w-14 h-14 md:w-14 md:h-14 overflow-hidden rounded-full">
               <LazyImage src="/logo.webp" alt="M" width="56" height="56" className="w-full h-full object-contain filter brightness-110" priority />
            </div>
          </div>
          
          <div className="flex flex-col">
            <span className="font-serif text-[14px] md:text-[18px] tracking-[0.25em] text-[#0d2b1e] uppercase leading-tight group-hover:text-[#204a39] transition-colors duration-500">
              Mehdi Hasan Tailor
            </span>
            <span className="font-sans font-normal text-[10px] md:text-[9px] tracking-[0.5em] text-[#0d2b1e]/70 uppercase">
              Estd. 1944
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden xl:flex items-center gap-10 list-none">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="relative font-sans font-bold text-[11px] tracking-[0.3em] uppercase text-[#0d2b1e]/70 hover:text-[#0d2b1e] transition-colors duration-300 py-1"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right Action Area */}
        <div className="flex items-center gap-6 z-[110]">
          <Link
            to="/contact"
            className="hidden sm:inline-block font-sans font-medium text-[10px] tracking-[0.2em] uppercase text-[#0d2b1e] px-6 py-3 border border-[#0d2b1e]/40 hover:bg-[#0d2b1e] hover:text-[#E8DBB3] transition-all duration-500"
          >
            Book Appointment
          </Link>

          {/* Hamburger Icon - Hidden on XL */}
          <button
            onClick={() => setIsOpen(true)}
            className="xl:hidden flex flex-col gap-1.5 p-2 focus:outline-none"
          >
            <span className="w-6 h-[1px] bg-[#0d2b1e]" />
            <span className="w-4 h-[1px] bg-[#0d2b1e] ml-auto" />
          </button>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[1000] bg-[#E8DBB3] flex flex-col p-10 shadow-none"
            style={{ boxShadow: "none" }}
          >
            {/* Close Button Inside Drawer */}
            <div className="flex justify-end">
              <button 
                onClick={() => setIsOpen(false)}
                className="group p-4 flex items-center gap-3"
              >
                <span className="font-sans text-[10px] tracking-[0.3em] uppercase text-[#0d2b1e] opacity-0 group-hover:opacity-100 transition-opacity">Close</span>
                <div className="relative w-8 h-8 flex items-center justify-center">
                  <span className="absolute w-full h-[1px] bg-[#0d2b1e] rotate-45" />
                  <span className="absolute w-full h-[1px] bg-[#0d2b1e] -rotate-45" />
                </div>
              </button>
            </div>

            <div className="flex flex-col justify-center h-full">
              <ul className="space-y-6">
                {navLinks.map((link, i) => (
                  <motion.li 
                    key={link.name}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 + i * 0.1 }}
                  >
                    <Link
                      to={link.path}
                      onClick={() => setIsOpen(false)}
                      className="font-serif text-5xl text-[#0d2b1e] hover:text-[#204a39] italic transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.li>
                ))}
              </ul>

              {/* Contact Button in Mobile Drawer */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 + navLinks.length * 0.1 }}
                className="mt-10"
              >
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="inline-block font-sans font-light text-[10px] tracking-[0.2em] uppercase text-[#0d2b1e] px-6 py-3 border border-[#0d2b1e]/40 hover:bg-[#0d2b1e] hover:text-[#E8DBB3] transition-all duration-500"
                >
                  Book Appointment
                </Link>
              </motion.div>

              {/* Sidebar Footer Info */}
              <div className="mt-20 border-t border-[#b8965a]/20 pt-10">
              </div>
            </div>

            {/* Background Accent */}
            <div className="absolute bottom-0 right-0 p-10 opacity-10 pointer-events-none">
              <h1 className="text-[15vw] font-serif text-[#0d2b1e]">MH</h1>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;