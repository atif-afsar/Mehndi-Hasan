import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Volume2, VolumeX, Play, Instagram } from 'lucide-react';

const videos = [
  

  {
    id: 3,
    chapter: "Chapter III",
    title: "Heritage Legacy",
    videoId: "CNgV8Yq_iCc",
  },
  {
    id: 5,
    chapter: "Chapter V",
    title: "Timeless Elegance",
    videoId: "aybjwlVWhpY",
  },
  {
    id: 6,
    chapter: "Chapter VI",
    title: "The Master's Touch",
    videoId: "Hy0hKPjzGvI",
  }
];

const instaReels = [
  {
    id: 1,
  
    reelId: "DT4_XytDwKW",
  },
  {
    id: 2,
  
    reelId: "DTKgbHQkftY",
  },
  {
    id: 3,
    reelId: "DS1v83okXaQ",
  },
  {
    id: 4,
    reelId: "DSuZqcJD-4d",
  }
];

// YouTube thumbnail URL helper — mqdefault is reliable for all videos
const getThumb = (videoId) =>
  `https://img.youtube.com/vi/${videoId}/mqdefault.jpg`;

// High-res thumb (may 404 for older/unlisted videos, used as preferred)
const getHQThumb = (videoId) =>
  `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

const HeritageInMotion = () => {
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [muted, setMuted] = useState(false);
  const [hoveredId, setHoveredId] = useState(null);

  const openVideo = (videoId) => {
    setSelectedVideo(videoId);
    document.body.style.overflow = 'hidden';
  };

  const closeVideo = () => {
    setSelectedVideo(null);
    setMuted(false);
    document.body.style.overflow = 'auto';
  };

  const toggleMute = (e) => {
    e.stopPropagation();
    setMuted((m) => !m);
  };

  return (
    <section
      style={{
        background: '#E8DBB3',
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        position: 'relative',
        overflow: 'hidden',
        padding: 'clamp(64px, 10vw, 96px) 0',
      }}
    >
      {/* Subtle ambient texture */}
      <div style={{
        position: 'absolute', inset: 0, pointerEvents: 'none', zIndex: 0,
        backgroundImage: `radial-gradient(ellipse 80% 60% at 50% 0%, rgba(197,160,89,0.07) 0%, transparent 70%)`,
      }} />

      {/* Thin gold top rule */}
      <div style={{
        position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)',
        width: '200px', height: '1px', background: 'linear-gradient(90deg, transparent, #c5a059, transparent)',
      }} />

      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px', position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 28 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          style={{ textAlign: 'center', marginBottom: 'clamp(48px, 8vw, 72px)' }}
        >
          <p style={{
            color: '#0b1510', letterSpacing: '0.3em', fontSize: 'clamp(10px, 2vw, 11px)',
            textTransform: 'uppercase', fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500, marginBottom: '16px', opacity: 0.9,
          }}>
            A Cinematic Archive
          </p>

          <h2 style={{
            color: '#0b1510', fontSize: 'clamp(32px, 6vw, 58px)',
            fontStyle: 'italic', fontWeight: 300, lineHeight: 1.15,
            letterSpacing: '0.02em', margin: '0 0 20px',
          }}>
            Heritage in Motion
          </h2>

          {/* Gold ornamental divider */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px', marginBottom: '20px' }}>
            <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, transparent, #c5a059)' }} />
            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#c5a059', opacity: 0.7 }} />
            <div style={{ width: '60px', height: '1px', background: 'linear-gradient(90deg, #c5a059, transparent)' }} />
          </div>

          <p style={{
            color: 'rgba(13,26,21,0.8)', fontSize: '17px', fontWeight: 300,
            lineHeight: 1.8, maxWidth: '520px', margin: '0 auto',
            fontStyle: 'italic',
          }}>
            Experience the artistry and legacy of Mehdi Hasan tailors through our detailed cinematic journeys.
          </p>
        </motion.div>

        {/* YouTube Videos Section */}
        <div style={{ marginBottom: 'clamp(64px, 12vw, 100px)' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ marginBottom: 'clamp(32px, 6vw, 48px)' }}
          >
           
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <div style={{ width: '50px', height: '1px', background: 'linear-gradient(90deg, transparent, #c5a059)' }} />
              <div style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#c5a059', opacity: 0.6 }} />
              <div style={{ width: '50px', height: '1px', background: 'linear-gradient(90deg, #c5a059, transparent)' }} />
            </div>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 320px), 1fr))',
            gap: 'clamp(24px, 5vw, 40px) clamp(16px, 3vw, 32px)',
            maxWidth: '1200px',
            margin: '0 auto',
          }}>
            {videos.map((video, index) => (
              <VideoCard
                key={video.id}
                video={video}
                index={index}
                hovered={hoveredId === video.id}
                onHover={() => setHoveredId(video.id)}
                onLeave={() => setHoveredId(null)}
                onClick={() => openVideo(video.videoId)}
              />
            ))}
          </div>
        </div>

        {/* Instagram Reels Section */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{ marginBottom: 'clamp(32px, 6vw, 48px)' }}
          >
            <h3 style={{
              color: '#0b1510',
              fontSize: 'clamp(26px, 3.5vw, 36px)',
              fontStyle: 'italic',
              fontWeight: 300,
              textAlign: 'center',
              marginBottom: '16px',
            }}>
              Stories on the Loom
            </h3>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '12px' }}>
              <div style={{ width: '50px', height: '1px', background: 'linear-gradient(90deg, transparent, #c5a059)' }} />
              <Instagram size={18} color="#0b1510" style={{ opacity: 0.8 }} />
              <div style={{ width: '50px', height: '1px', background: 'linear-gradient(90deg, #c5a059, transparent)' }} />
            </div>
          </motion.div>

          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 250px), 1fr))',
            gap: 'clamp(24px, 5vw, 32px) clamp(16px, 3vw, 24px)',
            maxWidth: '1200px',
            margin: '0 auto',
          }}>
            {instaReels.map((reel, index) => (
              <ReelCard
                key={reel.id}
                reel={reel}
                index={index}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Modal Container */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(4,7,5,0.98)',
              backdropFilter: 'blur(20px)',
              padding: '20px',
            }}
            onClick={closeVideo}
          >
            {/* Close Button - Premium Style */}
            <motion.button
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3 }}
              onClick={closeVideo}
              style={{
                position: 'fixed', top: '30px', right: '30px',
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid rgba(197,160,89,0.3)',
                width: '50px', height: '50px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: '#c5a059',
                transition: 'all 0.3s cubic-bezier(0.22, 1, 0.36, 1)',
                zIndex: 10001,
              }}
              whileHover={{ scale: 1.1, backgroundColor: 'rgba(197,160,89,0.1)', borderColor: '#c5a059' }}
            >
              <X size={22} strokeWidth={1.5} />
            </motion.button>

            {/* Video container */}
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 30 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 30 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
              style={{
                width: '100%',
                maxWidth: '1000px',
                aspectRatio: '16/9',
                background: '#000',
                boxShadow: '0 0 0 1px rgba(197,160,89,0.2), 0 50px 100px -20px rgba(0,0,0,0.9)',
                overflow: 'hidden',
                position: 'relative',
                borderRadius: '4px',
              }}
            >
              {/* Decorative Frame */}
              <div style={{
                position: 'absolute', inset: 0, border: '1px solid rgba(197,160,89,0.15)',
                pointerEvents: 'none', zIndex: 1
              }} />

              <iframe
                style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&mute=${muted ? 1 : 0}&rel=0&modestbranding=1&hd=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />

              {/* Sound Toggle for YouTube */}
              <button
                onClick={toggleMute}
                style={{
                  position: 'absolute', bottom: 'clamp(10px, 3vw, 20px)', right: 'clamp(10px, 3vw, 20px)',
                  background: 'rgba(0,0,0,0.5)', border: '1px solid rgba(197,160,89,0.3)',
                  width: '40px', height: '40px', borderRadius: '50%',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: '#c5a059',
                  transition: 'all 0.3s', zIndex: 10,
                }}
              >
                {muted ? <VolumeX size={18} /> : <Volume2 size={18} />}
              </button>
            </motion.div>

            {/* Background Narrative Text */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.15 }}
              transition={{ delay: 0.5 }}
              style={{
                position: 'absolute', bottom: '40px', left: '50%', transform: 'translateX(-50%)',
                color: '#c5a059', fontSize: '12px', letterSpacing: '0.4em', textTransform: 'uppercase',
                fontFamily: "'Montserrat', sans-serif", width: '100%', textAlign: 'center',
                pointerEvents: 'none'
              }}
            >
              Mehdi Hasan Cinematic Archive — MMXVI
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Thin gold bottom rule */}
      <div style={{
        position: 'absolute', bottom: 0, left: '50%', transform: 'translateX(-50%)',
        width: '200px', height: '1px', background: 'linear-gradient(90deg, transparent, #c5a059, transparent)',
      }} />
    </section>
  );
};

/* ─── Individual Video Card ─────────────────────────────── */
const VideoCard = ({ video, index, hovered, onHover, onLeave, onClick }) => {
  const [imgError, setImgError] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.13, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
      style={{ cursor: 'pointer' }}
      onClick={onClick}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      {/* Thumbnail wrapper */}
      <div style={{
        position: 'relative',
        aspectRatio: '16/9',
        overflow: 'hidden',
        background: '#0f1a15',
        boxShadow: hovered
          ? '0 20px 60px rgba(0,0,0,0.6), 0 0 0 1px rgba(197,160,89,0.35)'
          : '0 8px 32px rgba(0,0,0,0.4), 0 0 0 1px rgba(197,160,89,0.1)',
        transition: 'box-shadow 0.5s ease',
      }}>
        {/* YouTube thumbnail */}
        <img
          src={imgError ? getThumb(video.videoId) : getHQThumb(video.videoId)}
          alt={video.title}
          onError={() => setImgError(true)}
          style={{
            width: '100%', height: '100%', objectFit: 'cover',
            display: 'block',
            transform: hovered ? 'scale(1.07)' : 'scale(1)',
            transition: 'transform 0.7s cubic-bezier(0.22,1,0.36,1)',
            filter: hovered ? 'brightness(0.75)' : 'brightness(0.55) saturate(0.8)',
          }}
        />

        {/* Gradient overlay */}
        <div style={{
          position: 'absolute', inset: 0,
          background: 'linear-gradient(to top, rgba(8,13,11,0.85) 0%, transparent 55%)',
          transition: 'opacity 0.4s',
        }} />

        {/* Chapter label — top left */}
        <span style={{
          position: 'absolute', top: '14px', left: '14px',
          color: '#c5a059', fontSize: '10px', letterSpacing: '0.25em',
          textTransform: 'uppercase', fontFamily: "'Montserrat', sans-serif",
          fontWeight: 500, opacity: hovered ? 1 : 0.75,
          transition: 'opacity 0.3s',
        }}>
          {video.chapter}
        </span>

        {/* Play button — center */}
        <div style={{
          position: 'absolute', inset: 0,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <div style={{
            width: hovered ? '52px' : '44px',
            height: hovered ? '52px' : '44px',
            border: '1px solid rgba(197,160,89,0.6)',
            background: hovered ? 'rgba(197,160,89,0.15)' : 'rgba(0,0,0,0.25)',
            backdropFilter: 'blur(4px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            transition: 'all 0.4s cubic-bezier(0.22,1,0.36,1)',
            boxShadow: hovered ? '0 0 24px rgba(197,160,89,0.2)' : 'none',
          }}>
            <Play
              size={hovered ? 18 : 15}
              fill="#c5a059"
              color="#c5a059"
              style={{ marginLeft: '3px', transition: 'all 0.3s' }}
            />
          </div>
        </div>
      </div>

      {/* Text below (for YouTube only) */}
      <div style={{ paddingTop: '14px' }}>
        <h3 style={{
          color: hovered ? '#204a39' : '#0d1a15',
          fontSize: 'clamp(16px, 2.5vw, 18px)', fontWeight: 300, fontStyle: 'italic',
          letterSpacing: '0.02em', lineHeight: 1.3,
          margin: 0, transition: 'color 0.35s',
          fontFamily: "'Cormorant Garamond', Georgia, serif",
        }}>
          {video.title}
        </h3>
        {/* Micro underline */}
        <div style={{
          marginTop: '8px', height: '1px',
          background: 'linear-gradient(90deg, rgba(197,160,89,0.5), transparent)',
          width: hovered ? '60px' : '30px',
          transition: 'width 0.45s cubic-bezier(0.22,1,0.36,1)',
        }} />
      </div>
    </motion.div>
  );
};

/* ─── Instagram Reel Card ─────────────────────────────── */
const ReelCard = ({ reel, index }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{ display: 'flex', justifyContent: 'center' }}
    >
      <div style={{
        position: 'relative',
        aspectRatio: '9/16',
        width: '100%',
        maxWidth: '300px', // Prevents it from getting too large on big screens or single column
        borderRadius: '2px',
        overflow: 'hidden',
        background: '#0d1310',
        boxShadow: hovered
          ? '0 30px 60px -12px rgba(0,0,0,0.7), 0 0 0 1px rgba(197,160,89,0.3)'
          : '0 10px 30px -10px rgba(0,0,0,0.5), 0 0 0 1px rgba(197,160,89,0.08)',
        transition: 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
      }}>
        {/* We use Instagram's native iframe embed. This bypasses missing thumbnail issues and enables direct 1-click play inside the grid, while looking perfectly matched to the design. */}
        <iframe
          src={`https://www.instagram.com/p/${reel.reelId}/embed/`}
          style={{ width: '100%', height: '100%', border: 'none', display: 'block', transform: 'scale(1.01)', }}
          allowFullScreen
          allowTransparency
          scrolling="no"
        />
      </div>
      
      {/* Title block omitted since the titles were removed from the data object and the iframe has its own caption implicitly */}
    </motion.div>
  );
};

export default HeritageInMotion;