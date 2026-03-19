import React, { useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Volume2, VolumeX, Play } from 'lucide-react';

const videos = [
  {
    id: 1,
    chapter: "Chapter I",
    title: "The Art of Bespoke",
    videoId: "Sf6S3HFtZI8",
  },
  {
    id: 2,
    chapter: "Chapter II",
    title: "Golden Threads",
    videoId: "YvSeDOJD4iM",
  },
  {
    id: 3,
    chapter: "Chapter III",
    title: "Heritage Legacy",
    videoId: "CNgV8Yq_iCc",
  },
  {
    id: 4,
    chapter: "Chapter IV",
    title: "Craftsmanship Unveiled",
    videoId: "4UCjNzMUEjI",
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
        background: 'linear-gradient(180deg, #080d0b 0%, #0c1410 60%, #080d0b 100%)',
        fontFamily: "'Cormorant Garamond', Georgia, serif",
        position: 'relative',
        overflow: 'hidden',
        padding: '96px 0',
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
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <p style={{
            color: '#c5a059', letterSpacing: '0.3em', fontSize: '11px',
            textTransform: 'uppercase', fontFamily: "'Montserrat', sans-serif",
            fontWeight: 500, marginBottom: '16px', opacity: 0.9,
          }}>
            A Cinematic Archive
          </p>

          <h2 style={{
            color: '#c5a059', fontSize: 'clamp(36px, 5vw, 58px)',
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
            color: 'rgba(200,200,190,0.65)', fontSize: '17px', fontWeight: 300,
            lineHeight: 1.8, maxWidth: '520px', margin: '0 auto',
            fontStyle: 'italic',
          }}>
            Experience the artistry and legacy of Mehdi Hasan tailors through our detailed cinematic journeys.
          </p>
        </motion.div>

        {/* Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fill, minmax(min(100%, 260px), 1fr))',
          gap: '32px 28px',
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

      {/* Modal */}
      <AnimatePresence>
        {selectedVideo && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.35 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 9999,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(4,8,6,0.97)',
              backdropFilter: 'blur(12px)',
              padding: '24px',
            }}
            onClick={closeVideo}
          >
            {/* Close */}
            <button
              onClick={closeVideo}
              style={{
                position: 'absolute', top: '24px', right: '28px',
                background: 'transparent', border: '1px solid rgba(197,160,89,0.25)',
                width: '44px', height: '44px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: 'rgba(255,255,255,0.6)',
                transition: 'all 0.25s', zIndex: 10001,
              }}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#c5a059';
                e.currentTarget.style.color = '#c5a059';
                e.currentTarget.style.background = 'rgba(197,160,89,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(197,160,89,0.25)';
                e.currentTarget.style.color = 'rgba(255,255,255,0.6)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              <X size={18} strokeWidth={1.5} />
            </button>

            {/* Sound Toggle */}
            <button
              onClick={toggleMute}
              style={{
                position: 'absolute', top: '24px', right: '84px',
                background: 'transparent', border: '1px solid rgba(197,160,89,0.25)',
                width: '44px', height: '44px', borderRadius: '50%',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                cursor: 'pointer', color: muted ? 'rgba(255,255,255,0.35)' : '#c5a059',
                transition: 'all 0.25s', zIndex: 10001,
              }}
              title={muted ? 'Unmute' : 'Mute'}
              onMouseEnter={e => {
                e.currentTarget.style.borderColor = '#c5a059';
                e.currentTarget.style.background = 'rgba(197,160,89,0.08)';
              }}
              onMouseLeave={e => {
                e.currentTarget.style.borderColor = 'rgba(197,160,89,0.25)';
                e.currentTarget.style.background = 'transparent';
              }}
            >
              {muted ? <VolumeX size={18} strokeWidth={1.5} /> : <Volume2 size={18} strokeWidth={1.5} />}
            </button>

            {/* Video container */}
            <motion.div
              initial={{ scale: 0.93, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.95, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              onClick={e => e.stopPropagation()}
              style={{
                width: '100%', maxWidth: '900px',
                aspectRatio: '16/9',
                background: '#000',
                boxShadow: '0 0 0 1px rgba(197,160,89,0.15), 0 40px 120px rgba(0,0,0,0.8)',
                overflow: 'hidden',
                position: 'relative',
              }}
            >
              {/* Gold corner accents */}
              {['top-0 left-0', 'top-0 right-0', 'bottom-0 left-0', 'bottom-0 right-0'].map((pos, i) => (
                <div key={i} style={{
                  position: 'absolute',
                  top: pos.includes('top') ? 0 : 'auto',
                  bottom: pos.includes('bottom') ? 0 : 'auto',
                  left: pos.includes('left') ? 0 : 'auto',
                  right: pos.includes('right') ? 0 : 'auto',
                  width: '20px', height: '20px', zIndex: 2, pointerEvents: 'none',
                  borderTop: pos.includes('top') ? '1px solid rgba(197,160,89,0.5)' : 'none',
                  borderBottom: pos.includes('bottom') ? '1px solid rgba(197,160,89,0.5)' : 'none',
                  borderLeft: pos.includes('left') ? '1px solid rgba(197,160,89,0.5)' : 'none',
                  borderRight: pos.includes('right') ? '1px solid rgba(197,160,89,0.5)' : 'none',
                }} />
              ))}

              <iframe
                style={{ width: '100%', height: '100%', border: 'none', display: 'block' }}
                src={`https://www.youtube.com/embed/${selectedVideo}?autoplay=1&mute=${muted ? 1 : 0}&rel=0&modestbranding=1`}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </motion.div>

            {/* Hint label */}
            <p style={{
              position: 'absolute', bottom: '24px',
              color: 'rgba(197,160,89,0.35)', fontSize: '11px',
              letterSpacing: '0.25em', textTransform: 'uppercase',
              fontFamily: "'Montserrat', sans-serif",
            }}>
              Click outside to close
            </p>
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

      {/* Text below */}
      <div style={{ paddingTop: '14px' }}>
        <h3 style={{
          color: hovered ? '#c5a059' : 'rgba(240,235,220,0.88)',
          fontSize: '18px', fontWeight: 300, fontStyle: 'italic',
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

export default HeritageInMotion;