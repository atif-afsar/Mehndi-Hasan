import React, { useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Collections", path: "/collections" },
    { name: "Bespoke", path: "/bespoke" },
    { name: "Heritage", path: "/heritage" },
    { name: "Book Appointment", path: "/contact", highlight: true },
  ];

  return (
    <>
      <nav className="w-full fixed top-0 left-0 z-[100] px-6 md:px-10 py-5 flex items-center justify-between text-white border-b border-white/5 bg-black backdrop-blur-lg transition-all duration-300">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-3 relative z-[110]">
          <div className="w-8 h-8 bg-white flex items-center justify-center p-1.5 rounded-sm">
            <img src="/logo.png" alt="M" className="w-full h-full object-contain invert" />
          </div>
          <h1 className="text-sm md:text-lg font-serif tracking-widest text-white font-medium uppercase">
            Mehdi Hasan <span className="text-[#c5a059]">Tailors</span>
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden xl:flex gap-10 text-[10px] items-center tracking-[0.2em] font-medium uppercase font-sans">
          {navLinks.map((link) => (
            <Link 
              key={link.name}
              to={link.path} 
              className={`hover:text-[#c5a059] transition-all duration-300 border-b border-transparent hover:border-[#c5a059] pb-1 ${link.highlight ? 'text-[#c5a059] font-bold' : ''}`}
            >
              {link.name}
            </Link>
          ))}
        </ul>

        {/* Action Icons & Hamburger */}
        <div className="flex items-center gap-4 md:gap-8 relative z-[110]">
          <div className="hidden sm:flex items-center gap-2 text-gray-400 opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
            <span className="text-sm">🔍</span>
            <span className="text-[9px] tracking-[0.2em] uppercase hidden lg:block">Search</span>
          </div>
          <div className="w-6 h-6 opacity-60 hover:opacity-100 cursor-pointer transition-opacity">
            <span className="text-lg">🛍️</span>
          </div>
          
          {/* Hamburger Menu Icon */}
          <button 
            className="xl:hidden flex flex-col gap-1.5 cursor-pointer p-2"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle Menu"
          >
            <div className={`w-6 h-[1px] bg-white transition-all duration-300 ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
            <div className={`w-6 h-[1px] bg-white transition-all duration-300 ${isOpen ? 'opacity-0' : ''}`}></div>
            <div className={`w-6 h-[1px] bg-white transition-all duration-300 ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <div className={`fixed inset-0 bg-[#07100b] z-[1000] flex flex-col transition-all duration-700 ease-[cubic-bezier(0.77,0,0.175,1)] ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>
          <div className="absolute inset-0 bg-gradient-to-br from-[#c5a059]/5 via-transparent to-transparent opacity-30 pointer-events-none"></div>
          
          {/* Mobile Header (Drawer) */}
          <div className="flex items-center justify-between px-6 py-6 border-b border-white/5">
            <Link to="/" onClick={() => setIsOpen(false)} className="flex items-center gap-3">
              <div className="w-8 h-8 bg-white flex items-center justify-center p-1.5 rounded-sm">
                <img src="/logo.png" alt="M" className="w-full h-full object-contain invert" />
              </div>
              <h1 className="text-sm font-serif tracking-widest text-white font-medium uppercase">
                Mehdi Hasan <span className="text-[#c5a059]">Tailors</span>
              </h1>
            </Link>
            <button 
              onClick={() => setIsOpen(false)}
              className="p-2 text-white/60 hover:text-[#c5a059] transition-colors"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          <div className="flex-1 flex flex-col items-start justify-center px-10 relative">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none">
              <div className="h-full w-full bg-[radial-gradient(#c5a059_1px,transparent_1px)] [background-size:40px_40px]"></div>
            </div>
            
            <ul className="flex flex-col gap-6 md:gap-10 relative z-20">
              {navLinks.map((link, i) => (
                <li 
                  key={link.name} 
                  className="overflow-hidden"
                >
                  <Link 
                    to={link.path} 
                    onClick={() => setIsOpen(false)}
                    className={`text-4xl md:text-6xl font-serif tracking-tight uppercase hover:text-[#c5a059] transition-all duration-500 block ${link.highlight ? 'text-[#c5a059]' : 'text-white'} transform ${isOpen ? 'translate-y-0' : 'translate-y-full'} transition-transform duration-700`}
                    style={{ transitionDelay: `${i * 100}ms` }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
            
            <div className={`mt-24 space-y-6 relative z-20 transform transition-all duration-700 delay-500 ${isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
               <div className="w-12 h-px bg-[#c5a059]/30 mb-8"></div>
               <p className="text-[10px] tracking-[0.5em] text-[#c5a059]/60 uppercase font-bold">Inquiries</p>
               <div className="flex flex-col gap-4">
                  <a href="#" className="text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors">Instagram</a>
                  <a href="#" className="text-xs tracking-[0.2em] uppercase text-gray-400 hover:text-white transition-colors">WhatsApp</a>
               </div>
            </div>
          </div>
          
          <div className="px-10 py-10 border-t border-white/5 text-[9px] text-gray-700 tracking-[0.4em] uppercase">
             © 2024 Mehdi Hasan • Lahore • London • Dubai
          </div>
        </div>

      </nav>
      {/* Spacer to prevent content jump if needed - currently using absolute positioning in some pages */}
    </>
  );
};

export default Navbar;