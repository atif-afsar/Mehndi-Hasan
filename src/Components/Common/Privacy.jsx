import React from 'react';
import { motion } from 'framer-motion';
import Footer from './Footer';
import SEO from './SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay: i * 0.1, ease: [0.215, 0.61, 0.355, 1] },
  }),
};

const Privacy = () => {
  return (
    <div className="bg-[#051c12] min-h-screen font-sans text-white/80 selection:bg-[#c5a059]/30 pt-32">
      <SEO 
        title="Privacy Policy - Mehdi Hasan Tailor"
        description="Read our privacy policy to understand how we collect, use, and protect your personal information at Mehdi Hasan Tailor."
        keywords="privacy policy, data protection, customer privacy, Mehdi Hasan tailor privacy"
        ogImage="/Home/hero.webp"
      />
      {/* Decorative effect */}
      <div className="absolute top-0 left-0 w-full h-[500px] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#c5a059]/10 via-transparent to-transparent pointer-events-none" />

      <main className="max-w-4xl mx-auto px-6 md:px-12 pb-32 relative z-10">
        <motion.div 
          custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="text-center mb-24"
        >
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="h-px w-8 bg-[#c5a059]/40" />
            <h4 className="text-[#c5a059] text-[10px] tracking-[0.3em] uppercase">Legal Excellence</h4>
            <div className="h-px w-8 bg-[#c5a059]/40" />
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-white mb-8">
            Privacy Policy
          </h1>
          <p className="text-white/50 text-sm md:text-base font-light font-serif italic max-w-2xl mx-auto leading-relaxed">
            Last updated: October 2023. Our commitment to your privacy is as precise as our measurements. Mehdi Hasan Tailors – Aligarh ensures your data is handled with the utmost discretion.
          </p>
        </motion.div>

        <div className="space-y-20">
          {[
            {
              num: "01",
              title: "Introduction",
              content: (
                <div className="space-y-4">
                  <p>At Mehdi Hasan Tailors, we value the trust you place in us. This Privacy Policy describes how we collect, use, and protect your personal information when you engage with our luxury tailoring services in Aligarh and through our digital platforms.</p>
                  <p>By utilizing our services, you consent to the data practices described in this statement. We are committed to ensuring that your private information remains secure and is used only in accordance with this privacy statement.</p>
                </div>
              )
            },
            {
              num: "02",
              title: "Data Collection",
              content: (
                <div className="space-y-4">
                  <p>We may collect personally identifiable information, such as your:</p>
                  <ul className="space-y-3 pl-4">
                    {["Full Name and Contact Information", "Anatomical measurements and fit preferences", "Billing and shipping addresses", "Historical purchase data and fabric selections"].map((item, i) => (
                      <li key={i} className="flex flex-start gap-3 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#c5a059] mt-2 block shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )
            },
            {
              num: "03",
              title: "Use of Information",
              content: (
                <div className="space-y-4">
                  <p>The information we collect is used exclusively to provide a personalized bespoke experience. This includes tailoring garments to your exact specifications, processing transactions, and maintaining your unique "Style Profile" for future commissions.</p>
                  <p>We may also use your information to notify you of seasonal collection launches, trunk shows in Aligarh, or exclusive updates regarding the House of Mehdi Hasan Tailors.</p>
                </div>
              )
            },
            {
              num: "04",
              title: "Cookies",
              content: (
                <div className="space-y-4">
                  <p>Our website uses "cookies" to help personalize your online experience. A cookie is a text file that is placed on your hard disk by a web page server. Cookies cannot be used to run programs or deliver viruses to your computer.</p>
                  <p>You have the ability to accept or decline cookies. Most Web browsers automatically accept cookies, but you can usually modify your browser setting to decline cookies if you prefer.</p>
                </div>
              )
            }
          ].map((section, idx) => (
            <motion.div 
              key={idx}
              custom={idx + 1} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-12"
            >
              <div className="md:col-span-3 flex gap-4 text-[#c5a059] font-serif text-xl border-b border-white/10 md:border-none pb-4 md:pb-0 h-fit">
                <span className="opacity-50 font-sans tracking-widest text-sm mt-1">{section.num}</span>
                <h2>{section.title}</h2>
              </div>
              <div className="md:col-span-9 text-white/60 font-light leading-relaxed text-sm md:text-base">
                {section.content}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Contact block */}
        <motion.div 
          custom={5} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
          className="mt-24 p-8 md:p-12 border border-white/10 rounded-lg bg-white/5 flex flex-col md:flex-row justify-between items-center md:items-start gap-8 backdrop-blur-sm"
        >
          <div className="text-center md:text-left">
            <h3 className="text-white font-serif text-2xl mb-2">Inquiries & Contact</h3>
            <p className="text-white/50 text-sm font-light">For questions regarding your data or our privacy practices.</p>
          </div>
          <div className="flex flex-col items-center md:items-end gap-4">
            <a href="mailto:privacy@mehdihasan.com" className="bg-[#c5a059] hover:bg-[#d4b06a] text-black text-[10px] tracking-[0.2em] uppercase px-8 py-4 font-medium transition-colors flex items-center gap-3 w-full md:w-auto justify-center">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
              Contact Privacy Officer
            </a>
            <div className="text-right">
              <div className="text-[#c5a059] text-[10px] tracking-[0.2em] uppercase font-medium">Aligarh Atelier</div>
              <div className="text-white/30 text-[9px] tracking-widest uppercase mt-1">Uttar Pradesh, India</div>
            </div>
          </div>
        </motion.div>

      </main>

      <Footer />
    </div>
  );
};

export default Privacy;
