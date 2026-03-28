import React, { useState } from 'react';
import { motion } from 'framer-motion';
import LazyImage from '../Common/LazyImage';

const marqueeItems = [
  { id: 1, image: "/Marquee/image1.webp", title: "The Imperial Maharaja", subtitle: "SIGNATURE GOLD ZARDOSI" },
  { id: 2, image: "/Marquee/image2.webp", title: "The Aligarh Classic", subtitle: "HERITAGE SILHOUETTE" },
  { id: 3, image: "/Marquee/image3.webp", title: "The Royal Velvet", subtitle: "EVENING NOBILITY" },
  { id: 4, image: "/Marquee/image4.webp", title: "The Viceroy Edition", subtitle: "MODERN BESPOKE" },
  { id: 5, image: "/Marquee/image5.webp", title: "The Monarch Suit", subtitle: "TAILORED PERFECTION" },
  { id: 6, image: "/Marquee/image6.webp", title: "The Regent Sherwani", subtitle: "ROYAL ENSEMBLE" },
  { id: 7, image: "/Marquee/image7.webp", title: "The Sovereign Tux", subtitle: "MIDNIGHT ELEGANCE" },
  { id: 8, image: "/Marquee/image8.webp", title: "The Dynasty Kurta", subtitle: "CRAFTED TRADITION" },
  { id: 9, image: "/Marquee/image9.webp", title: "The Emperor's Drape", subtitle: "LUXURY REDEFINED" },
  { id: 10, image: "/Marquee/image10.webp", title: "The Noble Charm", subtitle: "VINTAGE AESTHETIC" }
];

export default function Marquee() {
  const [isPaused, setIsPaused] = useState(false);

  return (
    <section 
      style={{
        background: '#0A1410', // Very deep, rich background
        padding: '80px 0',
        overflow: 'hidden',
        position: 'relative',
        fontFamily: "'Cormorant Garamond', Georgia, serif",
      }}
    >
      <style>
        {`
          @keyframes infiniteScroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); } 
          }
          
          .marquee-container {
            width: 100%;
            overflow: hidden;
            display: flex;
            position: relative;
          }

          /* Fading left/right edges for a seamless integration with the dark background */
          .marquee-container::before,
          .marquee-container::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            width: 150px;
            z-index: 10;
            pointer-events: none;
          }
          .marquee-container::before {
            left: 0;
            background: linear-gradient(to right, #040907 0%, transparent 100%);
          }
          .marquee-container::after {
            right: 0;
            background: linear-gradient(to left, #040907 0%, transparent 100%);
          }

          .marquee-track {
            display: flex;
            width: max-content;
            animation: infiniteScroll 45s linear infinite;
            /* Using padding instead of gap to perfectly divide by 2 for the infinite loop math */
            padding-left: 24px;
          }

          .marquee-track.paused {
            animation-play-state: paused;
          }

          .marquee-item-wrapper {
            padding-right: 24px; /* Acts as the gap */
          }

          .marquee-card {
            width: clamp(260px, 22vw, 340px);
            aspect-ratio: 3 / 4;
            position: relative;
            background: #08110d;
            border: 1px solid rgba(197, 160, 89, 0.15);
            overflow: hidden;
            cursor: pointer;
            transition: all 0.6s cubic-bezier(0.22, 1, 0.36, 1);
          }

          .marquee-card:hover {
            border-color: rgba(197, 160, 89, 0.5);
            box-shadow: 0 30px 60px -15px rgba(0,0,0,0.9), 0 0 30px -5px rgba(197,160,89,0.15);
            transform: translateY(-8px);
          }

          .marquee-card img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            transition: transform 1.5s cubic-bezier(0.22, 1, 0.36, 1);
            filter: brightness(0.85) contrast(1.1);
          }

          .marquee-card:hover img {
            transform: scale(1.08);
            filter: brightness(1) contrast(1.1);
          }

          /* The rich dark green/black overlay at the bottom */
          .marquee-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(to top, #06110b 0%, rgba(6,17,11,0.8) 15%, transparent 60%);
            pointer-events: none;
            transition: opacity 0.5s;
          }
          
          .marquee-card:hover .marquee-overlay {
            opacity: 0.9;
          }

          .marquee-text-container {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            padding: 24px;
            box-sizing: border-box;
            pointer-events: none;
            transform: translateY(0);
            transition: transform 0.5s ease;
          }

          .marquee-card:hover .marquee-text-container {
            transform: translateY(-5px);
          }
        `}
      </style>

      {/* Intro Header */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        style={{ textAlign: 'center', marginBottom: '60px', padding: '0 20px' }}
      >
        <p style={{
          color: '#c5a059',
          fontFamily: "'Montserrat', sans-serif",
          fontSize: '11px',
          letterSpacing: '0.3em',
          textTransform: 'uppercase',
          marginBottom: '16px',
          fontWeight: 500,
          opacity: 0.9
        }}>
          Signature Collections
        </p>
        <h2 style={{
          color: '#c5a059',
          fontSize: 'clamp(32px, 5vw, 48px)',
          fontStyle: 'italic',
          fontWeight: 300,
          margin: 0,
          lineHeight: 1.1
        }}>
          The Style Gallery
        </h2>
        <div style={{
          width: '50px',
          height: '1px',
          background: 'linear-gradient(90deg, transparent, #c5a059, transparent)',
          margin: '24px auto 0'
        }} />
      </motion.div>

      {/* Marquee Track */}
      <div className="marquee-container">
        <div 
          className={`marquee-track ${isPaused ? 'paused' : ''}`}
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onClick={() => setIsPaused(!isPaused)} /* Allows tap to pause on touch devices */
        >
          {/* We spread the array twice so that right before the first set completely scrolls out of view, the second set seamlessly slides in from the right, preventing any gaps. The -50% translation logic makes an invisible perfect loop. */}
          {[...marqueeItems, ...marqueeItems].map((item, index) => (
            <div key={`${item.id}-${index}`} className="marquee-item-wrapper">
              <div className="marquee-card">
                <LazyImage src={item.image} alt={item.title} />
                <div className="marquee-overlay" />
                <div className="marquee-text-container">
                  <h3 style={{
                    color: '#e4c88a', // A slightly brighter gold for readability
                    fontFamily: "'Cormorant Garamond', Georgia, serif",
                    fontSize: 'clamp(20px, 2vw, 24px)',
                    fontWeight: 400,
                    margin: '0 0 6px 0',
                    lineHeight: 1.2
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    color: 'rgba(255, 255, 255, 0.55)',
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: '9px',
                    letterSpacing: '0.15em',
                    textTransform: 'uppercase',
                    margin: 0,
                    fontWeight: 500
                  }}>
                    {item.subtitle}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
