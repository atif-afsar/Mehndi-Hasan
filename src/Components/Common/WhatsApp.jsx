import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform } from 'framer-motion';

const PremiumContactSupport = () => {
  const [isOpen, setIsOpen] = useState(false);

  const phoneNumber = "+918266975779";
  const message = "Hello Mehdi Hasan Tailor, I would like to inquire about a bespoke consultation.";
  const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
  const callUrl = `tel:${phoneNumber}`;

  const menuItems = [
    {
      href: callUrl,
      label: "Call Us",
      sublabel: "Speak directly",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      ),
      delay: 0.12,
      target: "_self",
    },
    {
      href: whatsappUrl,
      label: "WhatsApp",
      sublabel: "Message us now",
      icon: (
        <svg viewBox="0 0 24 24" className="w-5 h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.885-9.885 9.885m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.335-1.662c1.72.937 3.659 1.432 5.628 1.433h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.415-8.411" />
        </svg>
      ),
      delay: 0,
      target: "_blank",
    },
  ];

  return (
    <>
      {/* Inject keyframes */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;1,300&display=swap');

        @keyframes goldSpin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
        @keyframes goldPulse {
          0%, 100% { opacity: 0.15; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.08); }
        }
        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }
        .gold-shimmer {
          background: linear-gradient(90deg, #c5a059 0%, #e8c87a 40%, #f5dfa0 50%, #e8c87a 60%, #c5a059 100%);
          background-size: 200% auto;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          animation: shimmer 3s linear infinite;
        }
        .btn-glow {
          box-shadow: 0 0 0 1px rgba(197,160,89,0.25), 0 8px 32px rgba(0,0,0,0.6), 0 2px 8px rgba(197,160,89,0.2);
        }
        .btn-glow:hover {
          box-shadow: 0 0 0 1px rgba(197,160,89,0.5), 0 12px 40px rgba(0,0,0,0.7), 0 4px 20px rgba(197,160,89,0.35);
        }
        .card-glow {
          box-shadow: 0 0 0 1px rgba(197,160,89,0.15), 0 20px 60px rgba(0,0,0,0.8), 0 4px 16px rgba(197,160,89,0.1);
        }
      `}</style>

      <div className="fixed bottom-8 right-8 z-[9999] flex flex-col items-end">

        {/* Expanded Contact Card */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, scale: 0.88, y: 16, transformOrigin: "bottom right" }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.88, y: 12 }}
              transition={{ type: "spring", stiffness: 340, damping: 30 }}
              className="card-glow mb-4 rounded-2xl overflow-hidden"
              style={{
                background: "linear-gradient(145deg, #0e1a13 0%, #0a120d 60%, #07100b 100%)",
                border: "1px solid rgba(197,160,89,0.18)",
                width: "260px",
              }}
            >
              {/* Card header */}
              <div className="px-5 pt-5 pb-4 border-b border-white/5">
                <h3
                  className="text-white/90 text-base font-light tracking-wide"
                  style={{ fontFamily: "'Cormorant Garamond', serif" }}
                >
                  Begin Your{" "}
                  <span className="gold-shimmer font-normal italic">Consultation</span>
                </h3>
              </div>

              {/* Action buttons */}
              <div className="p-3 flex flex-col gap-2">
                {menuItems.map((item, i) => (
                  <motion.a
                    key={item.label}
                    href={item.href}
                    target={item.target}
                    rel={item.target === "_blank" ? "noopener noreferrer" : undefined}
                    initial={{ opacity: 0, x: 12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: item.delay + 0.08, type: "spring", stiffness: 300, damping: 26 }}
                    whileHover={{ x: 3 }}
                    className="group flex items-center gap-3.5 px-4 py-3 rounded-xl transition-all duration-300 cursor-pointer"
                    style={{
                      background: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(197,160,89,0.08)",
                    }}
                    onMouseEnter={e => {
                      e.currentTarget.style.background = "rgba(197,160,89,0.07)";
                      e.currentTarget.style.borderColor = "rgba(197,160,89,0.25)";
                    }}
                    onMouseLeave={e => {
                      e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                      e.currentTarget.style.borderColor = "rgba(197,160,89,0.08)";
                    }}
                  >
                    {/* Icon circle */}
                    <div
                      className="w-9 h-9 rounded-full flex items-center justify-center flex-shrink-0 transition-all duration-300"
                      style={{
                        background: "linear-gradient(135deg, rgba(197,160,89,0.15) 0%, rgba(197,160,89,0.05) 100%)",
                        border: "1px solid rgba(197,160,89,0.2)",
                        color: "#c5a059",
                      }}
                    >
                      {item.icon}
                    </div>

                    {/* Text */}
                    <div className="flex flex-col">
                      <span
                        className="text-white/85 text-sm font-light tracking-wide"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {item.label}
                      </span>
                      <span
                        className="text-[#c5a059]/45 text-[10px] tracking-[0.15em] uppercase"
                        style={{ fontFamily: "'Cormorant Garamond', serif" }}
                      >
                        {item.sublabel}
                      </span>
                    </div>

                    {/* Arrow */}
                    <motion.div
                      className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity"
                      style={{ color: "#c5a059" }}
                    >
                      <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M2 7h10M8 3l4 4-4 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </motion.div>
                  </motion.a>
                ))}
              </div>

              {/* Card footer */}
              <div className="px-5 pb-4 pt-1 flex items-center gap-2">
                <div className="w-1 h-1 rounded-full bg-emerald-400" style={{ boxShadow: "0 0 6px #34d399" }} />
                <p className="text-white/25 text-[9px] tracking-[0.2em] uppercase" style={{ fontFamily: "'Cormorant Garamond', serif" }}>
                  Available ·
                </p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main FAB Button */}
        <motion.button
          onClick={() => setIsOpen(!isOpen)}
          whileHover={{ scale: 1.06 }}
          whileTap={{ scale: 0.94 }}
          transition={{ type: "spring", stiffness: 400, damping: 20 }}
          className="btn-glow relative w-14 h-14 rounded-full overflow-hidden cursor-pointer"
          style={{
            background: "linear-gradient(135deg, #1a2a1f 0%, #0e1a13 100%)",
            border: "1px solid rgba(197,160,89,0.3)",
          }}
        >
          {/* Rotating gold border arc */}
          <motion.div
            className="absolute inset-0 rounded-full pointer-events-none"
            animate={{ rotate: isOpen ? 180 : 360 }}
            transition={{ duration: isOpen ? 0.6 : 8, ease: isOpen ? [0.16,1,0.3,1] : "linear", repeat: isOpen ? 0 : Infinity }}
            style={{
              background: "conic-gradient(from 0deg, transparent 70%, rgba(197,160,89,0.6) 100%)",
              borderRadius: "50%",
            }}
          />

          {/* Pulse ring (idle only) */}
          <AnimatePresence>
            {!isOpen && (
              <motion.span
                key="pulse"
                className="absolute inset-[-4px] rounded-full pointer-events-none"
                initial={{ opacity: 0 }}
                animate={{ opacity: [0, 0.3, 0], scale: [0.9, 1.2, 1.4] }}
                exit={{ opacity: 0 }}
                transition={{ duration: 2.5, repeat: Infinity, ease: "easeOut" }}
                style={{ border: "1px solid rgba(197,160,89,0.5)" }}
              />
            )}
          </AnimatePresence>

          {/* Inner icon area */}
          <div className="absolute inset-[1px] rounded-full flex items-center justify-center"
            style={{ background: "linear-gradient(145deg, #1c2e21 0%, #0e1a13 100%)" }}
          >
            <AnimatePresence mode="wait">
              {!isOpen ? (
                <motion.div
                  key="open"
                  initial={{ rotate: -60, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 60, opacity: 0, scale: 0.6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  style={{ color: "#c5a059" }}
                >
                  {/* Elegant scissors / needle icon — chat bubble */}
                  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                      d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                    />
                  </svg>
                </motion.div>
              ) : (
                <motion.div
                  key="close"
                  initial={{ rotate: 60, opacity: 0, scale: 0.6 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -60, opacity: 0, scale: 0.6 }}
                  transition={{ type: "spring", stiffness: 300, damping: 22 }}
                  style={{ color: "#c5a059" }}
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.button>
      </div>
    </>
  );
};

export default PremiumContactSupport;