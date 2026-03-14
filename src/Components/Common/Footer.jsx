import { motion } from "framer-motion";
import { Share2, Mail, MapPin, ChevronDown } from "lucide-react";
import { useState } from "react";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, delay: i * 0.1, ease: "easeOut" },
  }),
};

const brandLinks = ["Our Story", "Craftsmanship", "Press & Media", "Testimonials"];
const serviceLinks = ["Bespoke Tailoring", "Wedding Consultations", "Corporate Gifting", "Global Shipping"];

export default function Footer() {
  const [expandedBrand, setExpandedBrand] = useState(false);
  const [expandedServices, setExpandedServices] = useState(false);

  return (
    <footer
      className="w-full"
      style={{
        background: "linear-gradient(180deg, #0a1a12 0%, #071310 100%)",
        fontFamily: "'Cormorant Garamond', serif",
      }}
    >
      {/* Top hairline */}
      <div
        className="w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.3) 30%, rgba(201,168,76,0.3) 70%, transparent)",
        }}
      />

      <div className="max-w-6xl mx-auto px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">

          {/* Col 1 — Brand */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={0}
            className="flex flex-col gap-5"
          >
            {/* Logo mark */}
            <div className="flex items-center gap-3">
              <img
                src="/logo.png"
                alt="Mehdi Hasan Logo"
                className="w-9 h-9 object-contain"
              />
              <span
                className="text-xl font-semibold tracking-wide"
                style={{ color: "#c9a84c", fontFamily: "'Playfair Display', serif" }}
              >
                Mehdi Hasan
              </span>
            </div>

            <p
              className="text-sm leading-relaxed"
              style={{ color: "rgba(255,255,255,0.45)", maxWidth: "220px" }}
            >
              Defining luxury through traditional craftsmanship and timeless design since 1972.
            </p>

            {/* Social icons */}
            <div className="flex items-center gap-4 mt-1">
              {[Share2, Mail, MapPin].map((Icon, i) => (
                <motion.button
                  key={i}
                  whileHover={{ scale: 1.15, color: "#c9a84c" }}
                  whileTap={{ scale: 0.93 }}
                  transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  className="p-0 bg-transparent border-none cursor-pointer"
                  style={{ color: "rgba(255,255,255,0.4)" }}
                >
                  <Icon size={17} />
                </motion.button>
              ))}
            </div>
          </motion.div>

          {/* Col 2 — The Brand (Collapsible on mobile) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={1}
          >
            <button
              onClick={() => setExpandedBrand(!expandedBrand)}
              className="md:pointer-events-none w-full md:w-auto flex items-center justify-between md:justify-start gap-2 mb-5"
            >
              <h4
                className="text-base font-semibold tracking-wide"
                style={{ color: "#fff", fontFamily: "'Playfair Display', serif" }}
              >
                The Brand
              </h4>
              <ChevronDown
                size={18}
                className="md:hidden transition-transform duration-300"
                style={{
                  transform: expandedBrand ? "rotate(180deg)" : "rotate(0deg)",
                  color: "#c9a84c",
                }}
              />
            </button>
            <ul
              className={`flex flex-col gap-3 overflow-hidden transition-all duration-300 md:flex md:flex-col md:gap-3 md:overflow-visible
              ${expandedBrand ? "max-h-96" : "max-h-0 md:max-h-96"}`}
            >
              {brandLinks.map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 4, color: "#c9a84c" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-sm inline-block"
                    style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 3 — Services (Collapsible on mobile) */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={2}
          >
            <button
              onClick={() => setExpandedServices(!expandedServices)}
              className="md:pointer-events-none w-full md:w-auto flex items-center justify-between md:justify-start gap-2 mb-5"
            >
              <h4
                className="text-base font-semibold tracking-wide"
                style={{ color: "#fff", fontFamily: "'Playfair Display', serif" }}
              >
                Services
              </h4>
              <ChevronDown
                size={18}
                className="md:hidden transition-transform duration-300"
                style={{
                  transform: expandedServices ? "rotate(180deg)" : "rotate(0deg)",
                  color: "#c9a84c",
                }}
              />
            </button>
            <ul
              className={`flex flex-col gap-3 overflow-hidden transition-all duration-300 md:flex md:flex-col md:gap-3 md:overflow-visible
              ${expandedServices ? "max-h-96" : "max-h-0 md:max-h-96"}`}
            >
              {serviceLinks.map((link) => (
                <li key={link}>
                  <motion.a
                    href="#"
                    whileHover={{ x: 4, color: "#c9a84c" }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="text-sm inline-block"
                    style={{ color: "rgba(255,255,255,0.45)", textDecoration: "none" }}
                  >
                    {link}
                  </motion.a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Col 4 — Flagship Studio */}
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            custom={3}
            className="flex flex-col gap-4"
          >
            <h4
              className="text-base font-semibold tracking-wide"
              style={{ color: "#fff", fontFamily: "'Playfair Display', serif" }}
            >
              Flagship Studio
            </h4>

            <p className="text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.45)" }}>
              12/A Royal Enclave, Heritage District
              <br />
              London, United Kingdom
            </p>

            <div className="flex flex-col gap-1 text-sm">
              <span style={{ color: "rgba(255,255,255,0.45)" }}>
                T:{" "}
                <motion.a
                  href="tel:+442079460123"
                  whileHover={{ color: "#c9a84c" }}
                  style={{ color: "#c9a84c", textDecoration: "none" }}
                >
                  +44 20 7946 0123
                </motion.a>
              </span>
              <span style={{ color: "rgba(255,255,255,0.45)" }}>
                E:{" "}
                <motion.a
                  href="mailto:concierge@mehdihasan.com"
                  whileHover={{ color: "#e8c96a" }}
                  style={{ color: "#c9a84c", textDecoration: "none" }}
                >
                  concierge@mehdihasan.com
                </motion.a>
              </span>
            </div>

            {/* Studio image */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 200, damping: 20 }}
              className="overflow-hidden mt-1"
              style={{ borderRadius: "2px" }}
            >
              <img
                src="https://images.unsplash.com/photo-1558769132-cb1aea458c5e?w=400&q=80"
                alt="Flagship Studio"
                className="w-full object-cover"
                style={{ height: "90px", filter: "grayscale(60%) brightness(0.75)" }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Bottom divider */}
        <div
          className="w-full h-px my-10"
          style={{ background: "rgba(255,255,255,0.07)" }}
        />

        {/* Bottom bar */}
        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          custom={4}
          className="flex flex-col items-center gap-3 text-center"
        >
          <p
            className="text-xs tracking-[0.2em] uppercase"
            style={{ color: "rgba(255,255,255,0.3)" }}
          >
            © 2024 Mehdi Hasan Tailors. All Rights Reserved.
          </p>
          <div className="flex items-center gap-6">
            {["Privacy Policy", "Terms of Service"].map((item) => (
              <motion.a
                key={item}
                href="#"
                whileHover={{ color: "#c9a84c" }}
                className="text-xs tracking-[0.15em] uppercase"
                style={{ color: "rgba(255,255,255,0.3)", textDecoration: "none" }}
              >
                {item}
              </motion.a>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Bottom hairline */}
      <div
        className="w-full h-px"
        style={{
          background: "linear-gradient(90deg, transparent, rgba(201,168,76,0.15) 50%, transparent)",
        }}
      />
    </footer>
  );
}
