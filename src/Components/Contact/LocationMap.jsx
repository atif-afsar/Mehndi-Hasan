import React from 'react';
import { motion } from 'framer-motion';

const LocationMap = () => {
  return (
    <section className="bg-[#0a1310] py-24 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="group"
        >
          <div className="relative overflow-hidden border border-white/10 bg-[#0d1815] aspect-video hover:border-[#c5a059]/40 transition-all duration-500">
            <iframe
              width="100%"
              height="100%"
              style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg)' }}
              loading="lazy"
              allowFullScreen=""
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7052.110623420139!2d78.0627243935791!3d27.900275899999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a4f3ea97ca0b%3A0xf53fb773d262bb31!2sM.HasanTailor%20(ESTD%3A1944%20Mehdi%20Hasan%20Tailor%20Aligarh)!5e0!3m2!1sen!2sin!4v1773733998392!5m2!1sen!2sin" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade">
            </iframe>
            
            <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0a1310]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default LocationMap;
