import React, { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const collections = [
  {
    title: "The Royal Sherwani",
    desc: "Velvet & Silk masterpieces",
    series: "01",
    tag: "Signature",
    image: "/Sherwanis/image1.png",
  },
  {
    title: "Classic Kurta",
    desc: "Heritage weaving techniques",
    series: "02",
    tag: "Heritage",
    image: "/kurta/kurta1.png",
  },
  {
    title: "Premium Suits",
    desc: "Structured elegance, reimagined",
    series: "03",
    tag: "Contemporary",
    image: "/Suits/suit7.png",
  },
  {
    title: "Bespoke Suiting",
    desc: "Precision in every stitch",
    series: "04",
    tag: "Couture",
    image:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=800",
  },
];

/* Stagger config */
const containerVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.13 } },
};
const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
};

const FeaturedCollections = () => {
  return (
    <section
      style={{
        background: "linear-gradient(180deg, #080e0b 0%, #0b1510 50%, #080e0b 100%)",
        padding: "clamp(64px, 10vw, 128px) clamp(20px, 5vw, 64px)",
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        position: "relative",
        overflow: "hidden",
        borderTop: "1px solid rgba(255,255,255,0.04)",
        borderBottom: "1px solid rgba(255,255,255,0.04)",
      }}
    >
      {/* Ambient gold glow top */}
      <div
        style={{
          position: "absolute",
          top: "-120px",
          left: "50%",
          transform: "translateX(-50%)",
          width: "600px",
          height: "300px",
          background:
            "radial-gradient(ellipse at center, rgba(197,160,89,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }}
      />

      {/* Vertical rule — decorative left */}
      <div
        style={{
          position: "absolute",
          left: "clamp(12px, 3vw, 40px)",
          top: "10%",
          bottom: "10%",
          width: "1px",
          background:
            "linear-gradient(180deg, transparent, rgba(197,160,89,0.2) 30%, rgba(197,160,89,0.2) 70%, transparent)",
          display: "none",
        }}
        className="vertical-rule"
      />

      <div style={{ maxWidth: "1240px", margin: "0 auto", position: "relative", zIndex: 1 }}>
        {/* ── Header ── */}
        <motion.header
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
          style={{
            display: "flex",
            flexWrap: "wrap",
            alignItems: "flex-end",
            justifyContent: "space-between",
            gap: "24px",
            marginBottom: "clamp(48px, 7vw, 96px)",
          }}
        >
          <div>
            <p
              style={{
                fontSize: "10px",
                letterSpacing: "0.45em",
                color: "#c5a059",
                textTransform: "uppercase",
                fontFamily: "'Montserrat', sans-serif",
                fontWeight: 600,
                marginBottom: "14px",
                opacity: 0.85,
              }}
            >
              Signature Series
            </p>
            <h2
              style={{
                fontSize: "clamp(40px, 6vw, 80px)",
                fontWeight: 400,
                color: "#f0ebe0",
                lineHeight: 1.08,
                letterSpacing: "-0.01em",
                margin: 0,
              }}
            >
              Curated{" "}
              <span style={{ color: "#c5a059", fontStyle: "italic" }}>Collections</span>
            </h2>
          </div>

          <Link
            to="/collections"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "10px",
              color: "#c5a059",
              fontSize: "10px",
              letterSpacing: "0.35em",
              textTransform: "uppercase",
              fontFamily: "'Montserrat', sans-serif",
              fontWeight: 600,
              textDecoration: "none",
              paddingBottom: "6px",
              borderBottom: "1px solid rgba(197,160,89,0.3)",
              transition: "all 0.3s",
              flexShrink: 0,
              alignSelf: "flex-end",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = "#fff";
              e.currentTarget.style.borderBottomColor = "rgba(255,255,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = "#c5a059";
              e.currentTarget.style.borderBottomColor = "rgba(197,160,89,0.3)";
            }}
          >
            View All Series
            <span style={{ fontSize: "14px", lineHeight: 1 }}>→</span>
          </Link>
        </motion.header>

        {/* ── Desktop Grid (2×2 editorial) ── */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-60px" }}
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(2, 1fr)",
            gap: "clamp(24px, 4vw, 56px)",
          }}
          className="collections-grid"
        >
          {collections.map((item, idx) => (
            <CollectionCard key={idx} item={item} idx={idx} />
          ))}
        </motion.div>
      </div>

      {/* Responsive style override */}
      <style>{`
        @media (max-width: 640px) {
          .collections-grid {
            grid-template-columns: 1fr !important;
            gap: 0 !important;
          }
        }
      `}</style>
    </section>
  );
};

/* ─── Card Component ─────────────────────────────────────── */
const CollectionCard = ({ item, idx }) => {
  const [hovered, setHovered] = useState(false);

  // Alternate: even-indexed cards have image on left side text stacked on desktop
  // All cards use same column layout but vary spacing for rhythm
  const isEven = idx % 2 === 0;

  return (
    <motion.div variants={itemVariants}>
      <Link
        to="/collections"
        style={{ textDecoration: "none", display: "block" }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {/* ── Mobile: compact horizontal row ── */}
        <div className="mobile-card" style={{ display: "none" }}>
          <MobileCard item={item} idx={idx} hovered={hovered} />
        </div>

        {/* ── Desktop: stacked card ── */}
        <div className="desktop-card">
          <DesktopCard item={item} idx={idx} hovered={hovered} />
        </div>

        <style>{`
          @media (max-width: 640px) {
            .mobile-card { display: block !important; }
            .desktop-card { display: none !important; }
          }
        `}</style>
      </Link>
    </motion.div>
  );
};

/* ─── Desktop stacked card ─────────────────────────────── */
const DesktopCard = ({ item, idx, hovered }) => (
  <div style={{ cursor: "pointer" }}>
    {/* Image */}
    <div
      style={{
        position: "relative",
        overflow: "hidden",
        aspectRatio: "3/4",
        background: "#0d1a15",
        border: "1px solid rgba(197,160,89,0.08)",
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          transform: hovered ? "scale(1.06)" : "scale(1)",
          filter: hovered
            ? "grayscale(0%) brightness(0.82)"
            : "grayscale(30%) brightness(0.65)",
          transition: "transform 0.9s cubic-bezier(0.22,1,0.36,1), filter 0.7s ease",
        }}
      />

      {/* Series number — top left */}
      <span
        style={{
          position: "absolute",
          top: "18px",
          left: "18px",
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "10px",
          fontWeight: 600,
          letterSpacing: "0.3em",
          color: hovered ? "#c5a059" : "rgba(197,160,89,0.5)",
          textTransform: "uppercase",
          transition: "color 0.35s",
        }}
      >
        {item.series}
      </span>

      {/* Tag badge — top right */}
      <span
        style={{
          position: "absolute",
          top: "18px",
          right: "18px",
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "9px",
          fontWeight: 500,
          letterSpacing: "0.25em",
          color: "rgba(197,160,89,0.75)",
          textTransform: "uppercase",
          padding: "4px 10px",
          border: "1px solid rgba(197,160,89,0.2)",
          background: "rgba(8,14,11,0.6)",
          backdropFilter: "blur(4px)",
          opacity: hovered ? 1 : 0,
          transition: "opacity 0.4s",
        }}
      >
        {item.tag}
      </span>

      {/* Bottom scrim for text contrast */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          background: hovered
            ? "linear-gradient(to top, rgba(8,14,11,0.6) 0%, transparent 50%)"
            : "linear-gradient(to top, rgba(8,14,11,0.4) 0%, transparent 45%)",
          transition: "background 0.5s",
          pointerEvents: "none",
        }}
      />
    </div>

    {/* Text */}
    <div
      style={{
        paddingTop: "20px",
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "space-between",
        gap: "12px",
      }}
    >
      <div>
        <h3
          style={{
            fontFamily: "'Cormorant Garamond', Georgia, serif",
            fontSize: "clamp(20px, 2.2vw, 28px)",
            fontWeight: 400,
            color: hovered ? "#c5a059" : "#f0ebe0",
            letterSpacing: "0.01em",
            margin: "0 0 8px",
            transition: "color 0.35s",
          }}
        >
          {item.title}
        </h3>
        <p
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "11px",
            fontWeight: 400,
            color: "rgba(200,190,170,0.5)",
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            margin: 0,
          }}
        >
          {item.desc}
        </p>
      </div>

      {/* Arrow */}
      <div
        style={{
          flexShrink: 0,
          width: "36px",
          height: "36px",
          border: "1px solid",
          borderColor: hovered ? "rgba(197,160,89,0.6)" : "rgba(197,160,89,0.15)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "2px",
          transition: "all 0.35s",
          background: hovered ? "rgba(197,160,89,0.08)" : "transparent",
        }}
      >
        <span
          style={{
            color: hovered ? "#c5a059" : "rgba(197,160,89,0.4)",
            fontSize: "14px",
            transition: "color 0.3s",
            transform: hovered ? "translate(2px, -2px)" : "translate(0,0)",
            display: "inline-block",
            transition: "all 0.35s",
          }}
        >
          →
        </span>
      </div>
    </div>

    {/* Animated gold underline */}
    <div
      style={{
        marginTop: "14px",
        height: "1px",
        background: "linear-gradient(90deg, #c5a059, rgba(197,160,89,0.2))",
        width: hovered ? "100%" : "32px",
        transition: "width 0.55s cubic-bezier(0.22,1,0.36,1)",
      }}
    />
  </div>
);

/* ─── Mobile horizontal card ───────────────────────────── */
const MobileCard = ({ item, idx, hovered }) => (
  <div
    style={{
      display: "flex",
      gap: "16px",
      padding: "22px 0",
      borderBottom: "1px solid rgba(255,255,255,0.05)",
      alignItems: "center",
    }}
  >
    {/* Thumbnail */}
    <div
      style={{
        flexShrink: 0,
        width: "90px",
        height: "112px",
        overflow: "hidden",
        border: "1px solid rgba(197,160,89,0.1)",
        background: "#0d1a15",
        position: "relative",
      }}
    >
      <img
        src={item.image}
        alt={item.title}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "cover",
          display: "block",
          filter: "grayscale(20%) brightness(0.75)",
          transform: hovered ? "scale(1.07)" : "scale(1)",
          transition: "transform 0.7s ease",
        }}
      />
    </div>

    {/* Info */}
    <div style={{ flex: 1, minWidth: 0 }}>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          marginBottom: "8px",
        }}
      >
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "9px",
            fontWeight: 600,
            letterSpacing: "0.35em",
            color: "rgba(197,160,89,0.6)",
            textTransform: "uppercase",
          }}
        >
          {item.series}
        </span>
        <span
          style={{
            fontFamily: "'Montserrat', sans-serif",
            fontSize: "8px",
            fontWeight: 500,
            letterSpacing: "0.2em",
            color: "rgba(197,160,89,0.5)",
            textTransform: "uppercase",
            padding: "3px 8px",
            border: "1px solid rgba(197,160,89,0.15)",
          }}
        >
          {item.tag}
        </span>
      </div>

      <h3
        style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: "19px",
          fontWeight: 400,
          color: "#f0ebe0",
          letterSpacing: "0.01em",
          margin: "0 0 6px",
          lineHeight: 1.2,
        }}
      >
        {item.title}
      </h3>

      <p
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "10px",
          fontWeight: 400,
          color: "rgba(200,190,170,0.45)",
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          margin: "0 0 12px",
        }}
      >
        {item.desc}
      </p>

      {/* Gold line */}
      <div
        style={{
          height: "1px",
          width: "28px",
          background: "rgba(197,160,89,0.45)",
        }}
      />
    </div>

    {/* Arrow */}
    <span
      style={{
        color: "rgba(197,160,89,0.4)",
        fontSize: "16px",
        flexShrink: 0,
        paddingRight: "4px",
      }}
    >
      →
    </span>
  </div>
);

export default FeaturedCollections;