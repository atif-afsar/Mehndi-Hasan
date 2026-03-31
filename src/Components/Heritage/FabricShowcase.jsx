import { useState } from 'react';
import { motion } from 'framer-motion';

const fabrics = [
  { id: 1, src: "/fabric/image1.png", title: "Royal Velvet" },
  { id: 2, src: "/fabric/image2.png", title: "Woven Silk" },
  { id: 3, src: "/fabric/image3.png", title: "Bespoke Thread" },
  { id: 4, src: "/fabric/image4.png", title: "Golden Embroidery" },
  { id: 5, src: "/fabric/image5.png", title: "Heritage Weave" },
  { id: 6, src: "/fabric/image6.png", title: "Timeless Texture" },
  { id: 7, src: "/fabric/image7.png", title: "Artisan Craft" }
];

const FabricShowcase = () => {
  return (
    <section style={{
      background: '#E8DBB3',
      fontFamily: "'Cormorant Garamond', Georgia, serif",
      position: 'relative',
      overflow: 'hidden',
      padding: 'clamp(64px, 10vw, 96px) 24px',
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', position: 'relative', zIndex: 1 }}>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          style={{ marginBottom: 'clamp(32px, 6vw, 48px)' }}
        >
          <h3 style={{
            color: '#2d5016',
            fontSize: 'clamp(26px, 3.5vw, 36px)',
            fontStyle: 'italic',
            fontWeight: 600,
            textAlign: 'center',
            marginBottom: '16px',
          }}>
            The Fabric of Legacy
          </h3>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
            <div style={{ width: '50px', height: '1px', background: 'linear-gradient(90deg, transparent, #3d6b1f)' }} />
            <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#3d6b1f', opacity: 0.8 }} />
            <div style={{ width: '50px', height: '1px', background: 'linear-gradient(90deg, #3d6b1f, transparent)' }} />
          </div>
          <p style={{
            color: '#2d5016',
            fontSize: '15px',
            fontWeight: 400,
            lineHeight: 1.8,
            maxWidth: '520px',
            margin: '20px auto 0',
            fontStyle: 'italic',
            textAlign: 'center',
          }}>
            Explore the exquisite textures and materials curated to hand-construct our timeless garments.
          </p>
        </motion.div>

        {/* Grid of Images */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 260px), 1fr))',
          gap: 'clamp(16px, 3vw, 24px)',
          maxWidth: '1200px',
          margin: '0 auto',
        }}>
          {fabrics.map((fabric, index) => (
            <FabricCard key={fabric.id} fabric={fabric} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const FabricCard = ({ fabric, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: (index % 4) * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: 'relative',
        aspectRatio: '3/4',
        overflow: 'hidden',
        background: '#d4c89a',
        borderRadius: '8px',
        boxShadow: hovered
          ? '0 20px 40px -12px rgba(0,0,0,0.3), 0 0 0 2px rgba(61,107,31,0.4)'
          : '0 10px 20px -10px rgba(0,0,0,0.2), 0 0 0 1px rgba(61,107,31,0.15)',
        transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
      }}
    >
      <img
        src={fabric.src}
        alt={fabric.title}
        loading="lazy"
        style={{
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          display: 'block',
          transform: hovered ? 'scale(1.08)' : 'scale(1)',
          transition: 'transform 0.8s cubic-bezier(0.22, 1, 0.36, 1)',
          filter: hovered ? 'brightness(0.95) grayscale(0)' : 'brightness(0.7) grayscale(20%)',
        }}
        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1605289982774-9a6fef564df8?auto=format&fit=crop&q=80&w=800'; }}
      />
      
      {/* Vignette Overlay */}
      <div style={{
        position: 'absolute',
        inset: 0,
        background: 'linear-gradient(to top, rgba(232,219,179,0.85) 0%, transparent 40%)',
        opacity: hovered ? 0.8 : 0.6,
        transition: 'opacity 0.6s',
      }} />

      {/* Decorative Border */}
      <div style={{
        position: 'absolute',
        inset: '12px',
        border: '1px solid rgba(61,107,31,0.4)',
        opacity: hovered ? 1 : 0,
        transform: hovered ? 'scale(1)' : 'scale(0.95)',
        transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        pointerEvents: 'none',
      }} />

      {/* Title */}
      <div style={{
        position: 'absolute',
        bottom: '24px',
        left: '24px',
        right: '24px',
        transform: hovered ? 'translateY(0)' : 'translateY(8px)',
        opacity: hovered ? 1 : 0.8,
        transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
      }}>
        <h4 style={{
          color: '#2d5016',
          fontSize: '18px',
          fontStyle: 'italic',
          fontWeight: 600,
          margin: '0 0 6px 0',
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          letterSpacing: '0.04em',
          textShadow: '0 1px 2px rgba(255,255,255,0.3)',
        }}>
          {fabric.title}
        </h4>
        <div style={{
          height: '1px',
          background: 'linear-gradient(90deg, #3d6b1f, transparent)',
          width: hovered ? '100%' : '30%',
          opacity: hovered ? 0.8 : 0.5,
          transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        }} />
      </div>
    </motion.div>
  );
};

export default FabricShowcase;
