import React from 'react';
import { motion } from 'framer-motion';

const JournalsHero = () => {
  return (
    <section className="relative h-screen w-full flex items-center justify-center text-white overflow-hidden bg-[#0A1310]">
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30 grayscale"
        style={{ backgroundImage: "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBl993WLsnGDQKuVGWF4PnCnAdFloxS0QUnXtTS08dQ9C086fxuV20WLJNnJiS9qEh2zXW0O5Qxrv_OxRu_H7T6XjvwampIXjdfAFiJ5zZcF_qQTVQmaifo6d02VKX8Z5GJjd2ASqoPZ_E6_ZtfX5oHtnGfXQqtob3tKysGzWyEDQ92tYRrimwaoM5-AYgrXKAegKL3gIs3hAhcc0jOUyaePwkwZqn8vBLJ7wvTkgoerNER3MY7WPSprhj0m78MzyZ_-N-UZRC1Qf_P')" }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a1310] via-transparent to-[#0a1310]"></div>
      
      <div className="relative text-center z-10 px-6 max-w-4xl">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[10px] tracking-[0.8em] text-[#c5a059] uppercase font-bold mb-6"
        >
          Reflections on Heritage, Craft, and Style
        </motion.p>
        
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-6xl sm:text-7xl md:text-8xl font-serif font-medium tracking-tight mb-8 leading-[1.1]"
        >
          The <br />
          <span className="italic text-[#c5a059]">Journal</span>
        </motion.h1>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-gray-400 max-w-2xl mx-auto text-sm md:text-lg font-light leading-relaxed tracking-widest mb-12 opacity-80"
        >
          Explore stories of craftsmanship, heritage, and the artistry behind every creation. Discover the philosophy that guides our work.
        </motion.p>
      </div>
    </section>
  );
};

export default JournalsHero;
