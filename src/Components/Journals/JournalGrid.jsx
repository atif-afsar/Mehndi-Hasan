import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const journals = [
  {
    id: "1",
    category: "HERITAGE",
    title: "The Art of the Aligarh Sherwani: A Legacy in Every Stitch",
    excerpt: "Discover the centuries-old tradition and technical mastery behind our signature sherwanis. A deep dive into the heritage that defines our craft.",
    image: "/Sherwanis/image13.webp",
    date: "MARCH 15, 2026",
    readTime: "8 MIN READ"
  },
  {
    id: "2",
    category: "CRAFTSMANSHIP",
    title: "The Secret of Gold Zardosi: Our Traditional Embroidery",
    excerpt: "An exploration of the intricate art of gold thread embroidery. Learn how our artisans preserve this ancient technique with modern precision.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDahr_lgXrD5KQ7TGWlQ74b74R2rgldDGPLUkSmbF63NuooMq7HAaDqaobXqgsQ7CPMm968ehv4edMeiTudiOv3D09_jbet2kwMgNAGNDAf-O8QCzs2wBGG_DF8bWOtMX9OVSezmQ-1e2bOM9raYUYHsXGKQ-sFdG6nyMN2hPppJwBmN_tLCnHPECQ3uKCFB-0NLXIy_UsMKDktF0sVjlG7ZG5W6DKXQBzNMPshzYdnVHJcTMPZSFR8ThV8Q-mJwpXwRlbX-izqKoA2",
    date: "MARCH 10, 2026",
    readTime: "6 MIN READ"
  },
  {
    id: "3",
    category: "STYLE",
    title: "Mastering the Fit: The Bespoke Experience Explained",
    excerpt: "Understanding the meticulous process of creating a garment that fits perfectly. From measurement to final stitch, we reveal our bespoke methodology.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuB-z2NAW2VS_YDnn6zM-MuxFucEy3Cmm5JcsHgLh1ih0x87u0EKqsiHRZNkoEJswCXBBBBvkc8bf9lojlJx5wO2WkzePBNLAtTU_e7GVgQlNsvt6D8wSnDO2Cl6kM9J5YtpsRvLyxRyBstbjicLNXsFE--UxjaZcSonpJ9OaqQverri0TXQtNypA1yoKahQNUkMiyZv4n2bgz7DMOGK9Mwm51dSn3oBd94QZB9vyPeUWUmWT_yuwkRdcUC0z7Fo43J0bfGy7YaYajdd",
    date: "MARCH 5, 2026",
    readTime: "7 MIN READ"
  },
  {
    id: "4",
    category: "HERITAGE",
    title: "Choosing Your Wedding Attire: A Guide for the Modern Groom",
    excerpt: "Navigating the nuances of traditional elegance in contemporary times. Expert advice on selecting the perfect wedding ensemble.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBbG_MHsrDl7IN3sodJMkgOHc8A04-z99wFOe0QWwR12aenpLiCMnZRJTv32fZS2nyQ1Jo65J11eI_xOxT5dOjIM_2l0GGqJYNq4Yf4TSUpyzuUY8J7YLAKqChT-1v3CszwQOc0OA3C4X6oy3eYXprPrDwl2HODVBrs0G8Dlj8qROMkcTCCCcFTdY28OAXD6Q0otNlM4eNsDs8RmCnUbRTaiSXCK-rYO7qh2LGPwrbjfecQ2aSvmYkwhHQo4qfsjOUKG82vjdmFbb_-",
    date: "FEBRUARY 28, 2026",
    readTime: "5 MIN READ"
  }
];

const JournalGrid = () => {
  const navigate = useNavigate();
  return (
    <section className="bg-[#0a1310] py-24 md:py-48 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Featured Article */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-20 mb-24 md:mb-32"
        >
          <div className="relative overflow-hidden aspect-[4/5] md:aspect-[3/4]">
            <img 
              src={journals[0].image}
              alt={journals[0].title}
              onClick={() => navigate(`/journals/${journals[0].id}`)}
              className="w-full h-full object-cover hover:grayscale-0 hover:opacity-100 transition-all duration-1000 cursor-pointer"
            />
            <div className="absolute inset-0 border border-white/10"></div>
          </div>

          <div className="flex flex-col justify-center space-y-8">
            <div>
              <p className="text-[#c5a059] text-[10px] tracking-[0.4em] font-bold uppercase mb-4">
                {journals[0].category} / {journals[0].date}
              </p>
              <h2 className="text-4xl md:text-5xl font-serif font-medium text-white mb-6 leading-tight">
                {journals[0].title}
              </h2>
              <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed tracking-widest opacity-80">
                {journals[0].excerpt}
              </p>
            </div>

            <div className="flex items-center gap-8">
              <span className="text-[9px] tracking-[0.3em] uppercase text-gray-500 font-light">
                {journals[0].readTime}
              </span>
              <button 
                onClick={() => navigate(`/journals/${journals[0].id}`)}
                className="group flex items-center gap-3 text-[#c5a059] text-[10px] tracking-[0.3em] uppercase font-bold hover:text-white transition-colors"
              >
                <span>Read Article</span>
                <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </motion.div>

        {/* Grid Articles */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {journals.slice(1).map((journal, idx) => (
            <motion.div
              key={journal.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              viewport={{ once: true }}
              className="group cursor-pointer"
              onClick={() => navigate(`/journals/${journal.id}`)}
            >
              <div className="relative overflow-hidden aspect-[4/5] mb-6">
                <img 
                  src={journal.image}
                  alt={journal.title}
                  className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000 cursor-pointer"
                />
                <div className="absolute inset-0 border border-white/10 group-hover:border-[#c5a059]/30 transition-colors"></div>
              </div>

              <div className="space-y-4">
                <p className="text-[#c5a059] text-[9px] tracking-[0.3em] font-bold uppercase">
                  {journal.category} / {journal.date}
                </p>
                <h3 className="text-xl md:text-2xl font-serif font-medium text-white group-hover:text-[#c5a059] transition-colors leading-tight">
                  {journal.title}
                </h3>
                <p className="text-gray-500 text-sm font-light leading-relaxed opacity-70 group-hover:opacity-100 transition-opacity">
                  {journal.excerpt}
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-white/5">
                  <span className="text-[8px] tracking-[0.2em] uppercase text-gray-600 font-light">
                    {journal.readTime}
                  </span>
                  <ArrowUpRight size={12} className="text-[#c5a059] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default JournalGrid;
