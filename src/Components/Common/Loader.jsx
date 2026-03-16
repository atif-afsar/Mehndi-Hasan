import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const PremiumLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Lock scroll while loading
    if (loading) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    const timer = setTimeout(() => setLoading(false), 2000);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'unset';
    };
  }, [loading]);

  const containerVariants = {
    exit: {
      y: "-100%",
      transition: { 
        duration: 1.2, 
        ease: [0.85, 0, 0.15, 1], 
        when: "afterChildren" 
      }
    }
  };

  const textVariants = {
    initial: { y: "100%", opacity: 0 },
    animate: { 
      y: 0, 
      opacity: 1,
      transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] }
    },
    exit: { 
      y: "-20%", 
      opacity: 0, 
      transition: { duration: 0.5 } 
    }
  };

  return (
    <>
      <AnimatePresence mode="wait">
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-[#051c12] px-6 text-center"
            variants={containerVariants}
            initial="initial"
            exit="exit"
          >
            {/* Responsive Gold Frame - Smaller inset on mobile (4) vs desktop (8) */}
            <div className="absolute inset-4 md:inset-8 border border-[#c5a059]/20 pointer-events-none transition-all duration-700" />

            {/* Brand Name with Responsive Sizing */}
            <div className="overflow-hidden mb-6 md:mb-8">
              <motion.h2 
                variants={textVariants}
                initial="initial"
                animate="animate"
                className="text-[#c5a059] font-serif text-2xl sm:text-3xl md:text-5xl lg:text-6xl tracking-[0.15em] sm:tracking-[0.25em] uppercase leading-tight"
              >
                Mehdi Hasan Tailor
              </motion.h2>
            </div>

            {/* Animated Divider - Responsive width */}
            <motion.div 
              initial={{ width: 0 }}
              animate={{ width: "60px" }} // Default mobile width
              whileInView={{ width: "120px" }} // Expanding on desktop-like feel
              transition={{ duration: 1.5, delay: 0.5, ease: "easeInOut" }}
              className="h-[1px] bg-[#c5a059]/60 mb-6 md:mb-8 w-[60px] md:w-[120px]"
            />

            {/* Tagline - Responsive text and letter spacing */}
            <motion.div className="overflow-hidden">
              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1.2, duration: 0.8 }}
                className="text-[#c5a059]/80 font-light tracking-[0.2em] sm:tracking-[0.4em] text-[10px] sm:text-xs uppercase"
              >
                Crafting Royalty Since 1972
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: loading ? 0 : 1 }}
        transition={{ duration: 1 }}
      >
        {!loading && children}
      </motion.div>
    </>
  );
};

export default PremiumLoader;