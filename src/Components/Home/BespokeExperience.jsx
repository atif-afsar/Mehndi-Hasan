import React from "react";
import { motion } from "framer-motion";

const fadeSlideUp = (delay = 0) => ({
  initial: { opacity: 0, y: 32 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.9, delay, ease: [0.16, 1, 0.3, 1] },
});

const fadeIn = (delay = 0) => ({
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  transition: { duration: 1, delay, ease: "easeOut" },
});

const features = [
  "Over 500 premium fabric selections",
  "Hand-stitched gold zardosi embroidery",
  "Multiple fitting sessions for precision",
];

const BespokeExperience = () => {
  return (
    <section className="relative w-full bg-[#1a3428] overflow-hidden">

      {/* ── Subtle diagonal background shape (top-right geometric accent) ── */}
      <div
        className="absolute top-0 right-0 w-[45%] h-full pointer-events-none"
        style={{
          background: "linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.03) 100%)",
          clipPath: "polygon(30% 0%, 100% 0%, 100% 100%, 0% 100%)",
        }}
      />
      <div
        className="absolute top-0 right-0 w-[38%] h-[60%] pointer-events-none opacity-30"
        style={{
          background: "linear-gradient(160deg, rgba(255,255,255,0.05), transparent)",
          clipPath: "polygon(20% 0%, 100% 0%, 100% 100%, 0% 60%)",
        }}
      />

      {/* ── Main Grid ── */}
      <div className="relative z-10 max-w-[1300px] mx-auto px-6 md:px-12 lg:px-20 py-20 md:py-28 lg:py-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          {/* ══ LEFT — Text Content ══ */}
          <div className="flex flex-col items-start">

            {/* Eyebrow tag */}
            <motion.div
              className="flex items-center gap-3 mb-6"
              {...fadeIn(0.2)}
            >
              <span
                className="uppercase text-[#c5a059]"
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 200,
                  fontSize: "8.5px",
                  letterSpacing: "0.5em",
                }}
              >
                The Process
              </span>
              <span className="w-8 h-[1px] bg-[#c5a059]/40" />
            </motion.div>

            {/* Heading */}
            <motion.h2
              className="mb-6 leading-[1.08] tracking-[-0.01em]"
              style={{
                fontFamily: "'Cormorant Garamond', serif",
                fontWeight: 400,
                fontStyle: "italic",
                fontSize: "clamp(2.4rem, 5vw, 3.8rem)",
                color: "#ffffff",
              }}
              {...fadeSlideUp(0.3)}
            >
              Bespoke Experience
            </motion.h2>

            {/* Body text */}
            <motion.p
              className="mb-10 leading-[1.85]"
              style={{
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 300,
                fontSize: "clamp(12px, 1.3vw, 14px)",
                color: "rgba(255,255,255,0.52)",
                maxWidth: "420px",
                letterSpacing: "0.02em",
              }}
              {...fadeSlideUp(0.45)}
            >
              Your journey begins with a private consultation. We measure not
              just your silhouette, but your personality, ensuring the final
              garment is a true reflection of your stature.
            </motion.p>

            {/* Feature list */}
            <motion.ul
              className="flex flex-col gap-4 mb-12"
              {...fadeSlideUp(0.6)}
            >
              {features.map((f, i) => (
                <li key={i} className="flex items-center gap-4">
                  {/* Gold dot */}
                  <span
                    className="shrink-0 w-5 h-5 rounded-full flex items-center justify-center"
                    style={{ border: "1px solid rgba(197,160,89,0.5)", background: "rgba(197,160,89,0.08)" }}
                  >
                    <span
                      className="w-[5px] h-[5px] rounded-full bg-[#c5a059]"
                    />
                  </span>
                  <span
                    style={{
                      fontFamily: "'Raleway', sans-serif",
                      fontWeight: 300,
                      fontSize: "clamp(11px, 1.2vw, 13px)",
                      color: "rgba(255,255,255,0.70)",
                      letterSpacing: "0.02em",
                    }}
                  >
                    {f}
                  </span>
                </li>
              ))}
            </motion.ul>

            {/* CTA Button */}
            <motion.button
              className="group relative overflow-hidden px-9 py-[14px] cursor-pointer"
              style={{
                background: "transparent",
                border: "1px solid rgba(197,160,89,0.55)",
                fontFamily: "'Raleway', sans-serif",
                fontWeight: 300,
                fontSize: "9px",
                letterSpacing: "0.38em",
                textTransform: "uppercase",
                color: "#c5a059",
                transition: "color 0.45s, letter-spacing 0.4s",
              }}
              onMouseEnter={e => {
                e.currentTarget.style.color = "#0a0906";
                e.currentTarget.style.letterSpacing = "0.48em";
              }}
              onMouseLeave={e => {
                e.currentTarget.style.color = "#c5a059";
                e.currentTarget.style.letterSpacing = "0.38em";
              }}
              {...fadeSlideUp(0.75)}
            >
              {/* gold fill sweep */}
              <span
                className="absolute inset-0 bg-[#c5a059] -translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:translate-x-0"
              />
              <span className="relative z-10">Request an Appointment</span>
            </motion.button>

          </div>

          {/* ══ RIGHT — Image + Stat Badge ══ */}
          <motion.div
            className="relative"
            {...fadeIn(0.5)}
          >
            {/* Outer decorative border frame */}
            <div
              className="absolute pointer-events-none"
              style={{
                inset: "-14px 14px 14px -14px",
                border: "1px solid rgba(197,160,89,0.18)",
                zIndex: 0,
              }}
            />

            {/* Image container */}
            <div
              className="relative overflow-hidden w-full"
              style={{
                aspectRatio: "4 / 3",
                background: "#0f2219",
                zIndex: 1,
              }}
            >
              {/* ── Replace src with your actual image ── */}
              <img
                src="/Home/homeLagacy.png"
                alt="Bespoke tailoring — master craftsman at work"
                className="w-full h-full object-cover object-center"
                style={{ opacity: 0.92 }}
              />

             
            </div>

            {/* ── Stat Badge — overlapping bottom-left ── */}
            <motion.div
              className="absolute z-20 flex flex-col justify-center"
              style={{
                bottom: "-1px",
                left: "-1px",
                background: "#0f2219",
                border: "1px solid rgba(197,160,89,0.2)",
                padding: "1.1rem 1.6rem",
                minWidth: "130px",
              }}
              {...fadeSlideUp(0.9)}
            >
              <span
                style={{
                  fontFamily: "'Cormorant Garamond', serif",
                  fontWeight: 400,
                  fontSize: "2rem",
                  color: "#c5a059",
                  letterSpacing: "0.04em",
                  lineHeight: 1,
                }}
              >
                40+
              </span>
              <span
                style={{
                  fontFamily: "'Raleway', sans-serif",
                  fontWeight: 200,
                  fontSize: "7.5px",
                  letterSpacing: "0.42em",
                  color: "rgba(255,255,255,0.38)",
                  textTransform: "uppercase",
                  marginTop: "6px",
                }}
              >
                Years of Mastery
              </span>
            </motion.div>

          </motion.div>

        </div>
      </div>

    </section>
  );
};

export default BespokeExperience;