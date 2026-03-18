import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] },
  }),
};

const Terms = () => {
  return (
    <div className="bg-[#051c12] min-h-screen font-sans text-white/80 selection:bg-[#c5a059]/30 pt-32">
      {/* Decorative effect */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#c5a059]/10 via-transparent to-transparent pointer-events-none" />

      <main className="max-w-5xl mx-auto px-6 md:px-12 pb-32 relative z-10">
        <motion.div 
          custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-[#c5a059]/40" />
            <h4 className="text-[#c5a059] text-[10px] tracking-[0.3em] uppercase">Refined Sartorial Standards</h4>
            <div className="h-px w-8 bg-[#c5a059]/40" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8">
            Terms of Service
          </h1>
          <p className="text-white/50 text-sm md:text-base font-light font-serif italic max-w-2xl mx-auto leading-relaxed">
            Last updated: October 24, 2023. Ensuring the highest standards of craftsmanship and client relations in the Aligarh tradition.
          </p>
          <div className="w-16 h-px bg-[#c5a059]/30 mx-auto mt-12" />
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20">
          {/* Sidebar */}
          <motion.div 
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="md:col-span-3 hidden md:block"
          >
            <div className="sticky top-32 space-y-6">
              {[
                { num: "01", text: "ACCEPTANCE", id: "acceptance" },
                { num: "02", text: "BESPOKE ORDERS", id: "bespoke" },
                { num: "03", text: "FINANCIALS", id: "financials" },
                { num: "04", text: "INTELLECTUAL PROPERTY", id: "ip" },
                { num: "05", text: "GOVERNING LAW", id: "governing" }
              ].map((item, idx) => (
                <a href={`#${item.id}`} key={idx} className="flex gap-4 text-[10px] tracking-[0.2em] uppercase cursor-pointer hover:text-[#c5a059] transition-colors group">
                  <span className="text-[#c5a059] opacity-50 group-hover:opacity-100 transition-opacity">{item.num}</span>
                  <span className="text-white/50 group-hover:text-white transition-colors">{item.text}</span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Content */}
          <div className="md:col-span-9 space-y-24">
            {[
              {
                id: "acceptance",
                num: "I.",
                title: "Acceptance of Terms",
                content: (
                  <div className="space-y-4">
                    <p>By commissioning the services of Mehdi Hasan Tailors – Aligarh, you acknowledge that you have read, understood, and agreed to be bound by the following terms. Our services represent a commitment to the heritage of Aligarh's sartorial excellence.</p>
                    <p>These terms apply to all clients, visitors, and others who access or use our bespoke tailoring services, whether in-person at our Aligarh atelier or through digital consultation.</p>
                  </div>
                )
              },
              {
                id: "bespoke",
                num: "II.",
                title: "Bespoke Orders & Fittings",
                content: (
                  <div className="space-y-6">
                    <p>Each garment is a unique creation tailored specifically to the individual client's measurements and design preferences.</p>
                    <div className="space-y-4 text-white/50">
                      <div className="flex gap-4 items-start">
                        <span className="text-[#c5a059] mt-1 shrink-0 text-xs">◈</span>
                        <p><strong className="text-white/80 font-medium">Fittings:</strong> A minimum of three fittings is standard for our bespoke garments. Failure to attend scheduled fittings may result in delays for which the Atelier is not liable.</p>
                      </div>
                      <div className="flex gap-4 items-start">
                        <span className="text-[#c5a059] mt-1 shrink-0 text-xs">◈</span>
                        <p><strong className="text-white/80 font-medium">Alterations:</strong> Requests for design changes after the fabric has been cut may incur additional costs and require a revised timeline.</p>
                      </div>
                      <div className="flex gap-4 items-start">
                        <span className="text-[#c5a059] mt-1 shrink-0 text-xs">◈</span>
                        <p><strong className="text-white/80 font-medium">Final Approval:</strong> Upon final fitting and collection, the client's acceptance constitutes satisfaction with the garment's fit and finish.</p>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                id: "financials",
                num: "III.",
                title: "Payments & Deposits",
                content: (
                  <div className="space-y-6">
                    <div className="border border-white/10 rounded bg-white/5 p-8 backdrop-blur-sm">
                      <p className="font-serif italic text-white/70 mb-8 border-b border-white/5 pb-6">"Our craftsmanship requires a commitment from both the tailor and the patron."</p>
                      <div className="space-y-4 text-xs tracking-widest uppercase">
                        <div className="flex justify-between items-center text-white/60">
                          <span>INITIAL DEPOSIT</span>
                          <span className="text-white font-medium">50% NON-REFUNDABLE</span>
                        </div>
                        <div className="flex justify-between items-center text-white/60">
                          <span>INTERMEDIATE FITTING</span>
                          <span className="text-white font-medium">25% DUE</span>
                        </div>
                        <div className="flex justify-between items-center text-white/60">
                          <span>FINAL COLLECTION</span>
                          <span className="text-white font-medium">REMAINING BALANCE</span>
                        </div>
                      </div>
                    </div>
                  </div>
                )
              },
              {
                id: "ip",
                num: "IV.",
                title: "Intellectual Property",
                content: (
                  <div className="space-y-4">
                    <p>All designs, patterns, and creative directions developed by Mehdi Hasan Tailors remain the exclusive intellectual property of the Atelier. No reproduction of our unique Aligarh-style cuts or patterns is permitted without express written consent.</p>
                  </div>
                )
              },
              {
                id: "governing",
                num: "V.",
                title: "Governing Law",
                content: (
                  <div className="space-y-4">
                    <p>These terms and any disputes arising from our services shall be governed by and construed in accordance with the laws of the State of Uttar Pradesh, India, with exclusive jurisdiction held by the courts in Aligarh.</p>
                  </div>
                )
              }
            ].map((section, idx) => (
              <motion.div 
                key={section.id} id={section.id}
                custom={idx + 2} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
              >
                <h2 className="text-2xl font-serif text-white mb-6 flex gap-4 items-baseline">
                  <span className="text-[#c5a059]">{section.num}</span> {section.title}
                </h2>
                <div className="text-white/60 font-light leading-relaxed text-sm md:text-base">
                  {section.content}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Terms;
