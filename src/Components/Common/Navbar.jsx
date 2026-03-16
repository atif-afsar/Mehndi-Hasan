import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

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
    { name: "Bespoke", path: "/bespoke" },
    { name: "Heritage", path: "/heritage" },
    { name: "Gallery", path: "/gallery" },
  ];

  return (
    <>
      {/* ── MAIN NAV ── */}
      <nav
        className={`fixed top-0 left-0 w-full z-[100] flex items-center justify-between px-14 transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${scrolled
          ? "h-[68px] bg-[#0c0b09]/92 backdrop-blur-xl border-b border-[#b8965a]/12"
          : "h-[88px] bg-transparent"
        }`}
      >
        {/* Logo */}
        <Link to="/" className="flex items-center gap-[1.1rem] z-[110] group">
          <div className="relative w-[60px] h-[60px] border border-[#b8965a]/50 flex items-center justify-center transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:border-[#b8965a] group-hover:rotate-45 group-hover:scale-[0.88] overflow-hidden">
            <img src="/logo.png" alt="" />
            <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#b8965a]/15 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          </div>
          <div className="flex flex-col gap-[3px]">
            <span className="font-['Cormorant_Garamond'] font-light text-[13px] tracking-[0.35em] text-white uppercase leading-none">
              Mehdi Hasan
            </span>
            <span className="font-['Raleway'] font-[200] text-[8px] tracking-[0.5em] text-[#b8965a] uppercase">
              Tailors 
            </span>
          </div>
        </Link>

        {/* Desktop Links */}
        <ul className="hidden xl:flex items-center gap-12 list-none">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="relative font-['Raleway'] font-[300] text-[9.5px] tracking-[0.28em] uppercase text-white/65 hover:text-white transition-colors duration-300 py-1
                after:content-[''] after:absolute after:-bottom-[2px] after:left-0 after:w-0 after:h-[1px] after:bg-[#b8965a] after:transition-all after:duration-500 after:ease-[cubic-bezier(0.16,1,0.3,1)]
                hover:after:w-full"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Right cluster */}
        <div className="flex items-center gap-8 z-[110]">
          {/* CTA Button */}
          <Link
            to="/contact"
            className="hidden xl:inline-block relative overflow-hidden font-['Raleway'] font-[300] text-[9.5px] tracking-[0.28em] uppercase text-[#b8965a] px-[1.6rem] py-[0.7rem] border border-[#b8965a]/45
            before:content-[''] before:absolute before:inset-0 before:bg-[#b8965a] before:-translate-x-full before:transition-transform before:duration-500 before:ease-[cubic-bezier(0.16,1,0.3,1)]
            hover:text-[#0c0b09] hover:before:translate-x-0"
          >
            <span className="relative z-10">Book Appointment</span>
          </Link>

          {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="xl:hidden flex flex-col gap-[6px] p-1 bg-transparent border-none cursor-pointer"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-[28px] h-[1px] bg-white origin-center transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isOpen ? "rotate-45 translate-y-[3.5px]" : ""}`}
            />
            <span
              className={`block h-[1px] bg-white origin-right transition-all duration-600 ease-[cubic-bezier(0.16,1,0.3,1)]
              ${isOpen ? "w-[28px] -rotate-45 -translate-y-[3.5px] mr-0" : "w-[20px] ml-auto"}`}
            />
          </button>
        </div>
      </nav>

      {/* ── MOBILE DRAWER ── */}
      <div
        className={`fixed inset-0 z-[1000] bg-[#0c0b09] flex flex-col items-center justify-center transition-opacity duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
        ${isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
      >
        {/* Corner Accents */}
        <span className="absolute top-12 left-12 w-[80px] h-[80px] border-t border-l border-[#b8965a]/25 pointer-events-none" />
        <span className="absolute bottom-12 right-12 w-[80px] h-[80px] border-b border-r border-[#b8965a]/25 pointer-events-none" />

        {/* Ambient Glow */}
        <div className="absolute top-[30%] left-1/2 -translate-x-1/2 w-[40vw] h-[40vw] rounded-full bg-[#b8965a]/5 blur-[80px] pointer-events-none" />

        {/* Menu Links */}
        <ul className="list-none text-center space-y-1 relative z-10">
          {[...navLinks, { name: "Book Appointment", path: "/contact", highlight: true }].map((link, i) => (
            <li key={link.name} className="overflow-hidden">
              <Link
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`relative inline-block font-['Cormorant_Garamond'] font-[300] text-[clamp(2.2rem,5vw,3.5rem)] tracking-[0.05em] no-underline transition-all duration-700 ease-[cubic-bezier(0.16,1,0.3,1)]
                ${link.highlight ? "text-[#b8965a] not-italic font-[400]" : "italic text-white/75 hover:text-white"}
                ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 translate-y-[60px]"}`}
                style={{ transitionDelay: `${0.04 + i * 0.07}s` }}
              >
                {link.name}
                <span
                  className="absolute top-[0.4em] -right-8 font-['Raleway'] text-[10px] not-italic font-[200] tracking-[0.2em] text-[#b8965a]/60"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </Link>
            </li>
          ))}
        </ul>

        {/* Footer row */}
        <div
          className={`absolute bottom-14 left-0 right-0 flex items-center justify-center gap-10 transition-opacity duration-700 delay-500
          ${isOpen ? "opacity-100" : "opacity-0"}`}
        >
          {["Instagram", "WhatsApp", "London"].map((item, i) => (
            <React.Fragment key={item}>
              {i > 0 && <span className="w-[1px] h-[16px] bg-[#b8965a]/20" />}
              <a
                href="#"
                className="font-['Raleway'] font-[200] text-[9px] tracking-[0.4em] uppercase text-white/30 hover:text-[#b8965a] transition-colors duration-300 no-underline"
              >
                {item}
              </a>
            </React.Fragment>
          ))}
        </div>
      </div>
    </>
  );
};

export default Navbar;