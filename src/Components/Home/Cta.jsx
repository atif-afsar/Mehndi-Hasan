import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Link } from "react-router-dom";

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      ref={ref}
      className="relative w-full overflow-hidden flex items-center justify-center py-32 px-6"
      style={{
        background:
          "radial-gradient(ellipse at 60% 40%, #0d2b1e 0%, #071510 50%, #030d09 100%)",
        minHeight: "420px",
      }}
    >
      {/* Subtle noise texture overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
          backgroundSize: "200px 200px",
        }}
      />

      {/* Radial vignette edges */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(2,8,5,0.7) 100%)",
        }}
      />

      {/* Top faint border line */}
      <div
        className="absolute top-0 left-0 right-0 h-px opacity-20"
        style={{
          background:
            "linear-gradient(90deg, transparent, #c9a84c 30%, #c9a84c 70%, transparent)",
        }}
      />
      {/* Bottom faint border line */}
      <div
        className="absolute bottom-0 left-0 right-0 h-px opacity-20"
        style={{
          background:
            "linear-gradient(90deg, transparent, #c9a84c 30%, #c9a84c 70%, transparent)",
        }}
      />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-3xl">
        {/* Eyebrow tag */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mb-6"
        >
          <span
            className="text-xs tracking-[0.3em] uppercase font-medium"
            style={{ color: "#c9a84c", fontFamily: "'Cormorant Garamond', serif" }}
          >
            Est. 1924 · London
          </span>
        </motion.div>

        {/* Heading */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
          className="text-white font-bold leading-tight mb-5"
          style={{
            fontFamily: "'Playfair Display', serif",
            fontSize: "clamp(2rem, 5vw, 3.25rem)",
          }}
        >
          Become Part of Our History
        </motion.h2>

        {/* Decorative divider */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          animate={isInView ? { scaleX: 1, opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.25, ease: "easeOut" }}
          className="flex items-center gap-3 mb-6"
        >
          <div className="h-px w-12 opacity-40" style={{ background: "#c9a84c" }} />
          <div className="w-1.5 h-1.5 rounded-full" style={{ background: "#c9a84c", opacity: 0.6 }} />
          <div className="h-px w-12 opacity-40" style={{ background: "#c9a84c" }} />
        </motion.div>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          className="text-base md:text-lg leading-relaxed mb-10 max-w-lg"
          style={{ color: "rgba(255,255,255,0.55)", fontFamily: "'Cormorant Garamond', serif", fontSize: "1.125rem" }}
        >
          Experience the ultimate in bespoke tailoring. Book your consultation with
          our master tailor today.
        </motion.p>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
        >
          <Link to="/measurements">
            <motion.button
              whileHover={{ scale: 1.03, boxShadow: "0 8px 40px rgba(201,168,76,0.25)" }}
              whileTap={{ scale: 0.97 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="relative px-12 py-4 text-xs tracking-[0.25em] uppercase font-semibold cursor-pointer overflow-hidden group"
              style={{
                background: "#c9a84c",
                color: "#0d2b1e",
                fontFamily: "'Cormorant Garamond', serif",
                letterSpacing: "0.25em",
                border: "none",
              }}
            >
              {/* Shimmer sweep on hover */}
              <span
                className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-in-out"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 0%, rgba(255,255,255,0.25) 50%, transparent 100%)",
                }}
              />
              <span className="relative z-10">Book a Consultation</span>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}