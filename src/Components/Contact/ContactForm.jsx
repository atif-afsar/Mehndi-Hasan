import React from "react";
import { motion } from "framer-motion";

const ContactForm = () => {
  return (
    <section className="bg-[#0a1310] py-24 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 md:gap-32">
        
        {/* Contact Info */}
        <div className="space-y-16 md:space-y-24">
          <header className="text-center lg:text-left">
            <h2 className="text-4xl md:text-7xl font-serif font-medium text-white mb-8 tracking-tight">Visit Our <br /><span className="italic text-[#c5a059]">Ateliers</span></h2>
            <p className="text-gray-500 text-sm md:text-base font-light tracking-widest leading-relaxed opacity-80">Visit us for a personal consultation at our flagship locations.</p>
          </header>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-12 md:gap-16">
            {[
              { city: "Lahore, Pakistan", address: "Flagship Atelier, Anarkali Market, Lahore 54000", phone: "+92 42 3735 1234" },
            ].map((loc, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="flex items-center gap-4 mb-4">
                    <div className="h-[1px] w-6 bg-[#c5a059]/40 group-hover:w-12 transition-all duration-500"></div>
                    <h4 className="text-[#c5a059] text-[10px] md:text-[11px] font-bold uppercase tracking-[0.4em]">{loc.city}</h4>
                </div>
                <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed tracking-widest pl-10 opacity-70 group-hover:opacity-100 transition-opacity">{loc.address}</p>
                <p className="text-white text-sm md:text-base font-medium pl-10 mt-3 tracking-widest">{loc.phone}</p>
              </div>
            ))}
          </div>

          <div className="pt-16 border-t border-white/5 text-center lg:text-left">
             <h4 className="text-white text-[10px] font-bold uppercase tracking-[0.4em] mb-8 text-[#c5a059]/60">Digital Inquiries</h4>
             <div className="space-y-4">
                <p className="text-gray-400 text-sm md:text-base font-light tracking-widest hover:text-[#c5a059] transition-colors cursor-pointer">atelier@mehdi-hasan.com</p>
                <p className="text-gray-400 text-sm md:text-base font-light tracking-widest hover:text-[#c5a059] transition-colors cursor-pointer">custom@mehdi-hasan.com</p>
             </div>
          </div>

          {/* Small Map */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="group pt-16 border-t border-white/5"
          >
            <div className="relative overflow-hidden border border-white/10 bg-[#0d1815] aspect-video hover:border-[#c5a059]/40 transition-all duration-500 rounded-sm">
              <iframe
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(0.9) hue-rotate(180deg)' }}
                loading="lazy"
                allowFullScreen=""
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d7052.110623420139!2d78.0627243935791!3d27.900275899999993!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3974a4f3ea97ca0b%3A0xf53fb773d262bb31!2sM.HasanTailor%20(ESTD%3A1944%20Mehdi%20Hasan%20Tailor%20Aligarh)!5e0!3m2!1sen!2sin!4v1773733998392!5m2!1sen!2sin"
              ></iframe>
              
              <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-[#0a1310]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            </div>
          </motion.div>
        </div>

        {/* Contact Form */}
        <div className="bg-[#0d1815] p-8 md:p-16 border border-white/5 relative group">
          <div className="absolute top-0 right-0 w-24 h-24 border-t border-r border-[#c5a059]/20 group-hover:border-[#c5a059]/40 transition-colors pointer-events-none"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 border-b border-l border-[#c5a059]/20 group-hover:border-[#c5a059]/40 transition-colors pointer-events-none"></div>

          <form className="space-y-8 md:space-y-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
              <div className="space-y-3">
                <label className="text-[9px] tracking-[0.4em] text-gray-500 uppercase font-bold">First Name</label>
                <input type="text" className="w-full bg-[#0a1310] border-b border-white/10 p-4 text-white text-sm focus:border-[#c5a059] outline-none transition-all placeholder:text-gray-800" placeholder="Ahmad" />
              </div>
              <div className="space-y-3">
                <label className="text-[9px] tracking-[0.4em] text-gray-500 uppercase font-bold">Last Name</label>
                <input type="text" className="w-full bg-[#0a1310] border-b border-white/10 p-4 text-white text-sm focus:border-[#c5a059] outline-none transition-all placeholder:text-gray-800" placeholder="Khan" />
              </div>
            </div>
            
            <div className="space-y-3">
               <label className="text-[9px] tracking-[0.4em] text-gray-500 uppercase font-bold">Email Address</label>
               <input type="email" className="w-full bg-[#0a1310] border-b border-white/10 p-4 text-white text-sm focus:border-[#c5a059] outline-none transition-all placeholder:text-gray-800" placeholder="ahmad.k@luxury.com" />
            </div>

            <div className="space-y-3">
               <label className="text-[9px] tracking-[0.4em] text-gray-500 uppercase font-bold">Inquiry Type</label>
               <select className="w-full bg-[#0a1310] border-b border-white/10 p-4 text-white text-sm focus:border-[#c5a059] outline-none transition-all appearance-none cursor-pointer">
                  <option>Bespoke Consultation</option>
                  <option>Trunk Show Inquiry</option>
                  <option>Product Information</option>
                  <option>Other</option>
               </select>
            </div>

            <div className="space-y-3">
               <label className="text-[9px] tracking-[0.4em] text-gray-500 uppercase font-bold">Your Message</label>
               <textarea rows="4" className="w-full bg-[#0a1310] border-b border-white/10 p-4 text-white text-sm focus:border-[#c5a059] outline-none transition-all resize-none placeholder:text-gray-800" placeholder="Describe your vision..."></textarea>
            </div>

            <button className="w-full py-6 bg-[#c5a059] text-black text-[10px] tracking-[0.4em] font-bold uppercase transition-all duration-500 hover:bg-white hover:tracking-[0.5em]">
              Send Inquiry
            </button>
          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;
