import React, { useMemo } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { journalById, journals } from "./journalData";

const JournalDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const article = journalById[id];
  const related = useMemo(() => {
    if (!article?.relatedIds?.length) return [];
    const set = new Set(article.relatedIds);
    return journals.filter((j) => set.has(j.id));
  }, [article]);

  if (!article) {
    return (
      <div className="bg-black min-h-screen flex items-center justify-center px-6 text-center">
        <div>
          <p className="text-white text-xl mb-4">Article not found</p>
          <button
            type="button"
            onClick={() => navigate("/journals")}
            className="text-[#c5a059] text-[10px] tracking-[0.3em] uppercase font-bold hover:text-white transition-colors"
          >
            Back to journals
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-black min-h-screen">
      {/* Back Button (avoids fixed navbar overlap) */}
      <div className="absolute left-0 right-0 z-40">
        <motion.button
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={() => navigate("/journals")}
          className="mt-[110px] md:mt-[120px] ml-6 md:ml-12 inline-flex items-center gap-2 text-[#c5a059] hover:text-white transition-colors text-[10px] tracking-[0.35em] uppercase font-bold"
        >
          <ArrowLeft size={16} />
          <span>Back</span>
        </motion.button>
      </div>

      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="relative h-[62vh] md:h-[74vh] overflow-hidden"
      >
        <img
          src={article.heroImage}
          alt={article.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/15 to-black"></div>

        <div className="absolute inset-0 flex flex-col justify-end p-6 md:p-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="max-w-5xl"
          >
            <p className="text-[#c5a059] text-[10px] tracking-[0.4em] font-bold uppercase mb-4">
              {article.category} / {article.date}
            </p>
            <h1 className="text-4xl md:text-6xl font-serif font-medium text-white leading-tight mb-6">
              {article.title}
            </h1>
            <div className="flex flex-wrap items-center gap-x-8 gap-y-3">
              <p className="text-gray-300 text-[9px] tracking-[0.35em] uppercase">
                {article.readTime}
              </p>
              <p className="text-gray-400 text-[9px] tracking-[0.35em] uppercase">
                The Mehdi Hasan Chronicle
              </p>
            </div>
          </motion.div>
        </div>
      </motion.section>

      {/* Content Section */}
      <section className="py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-14">
          {article.content.map((block, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              {block.type === 'intro' && (
                <div className="lg:col-span-1">
                  <p className="text-lg md:text-xl text-gray-300 font-light leading-relaxed mb-10 tracking-wide">
                    {block.text}
                  </p>
                  {article.excerpt && (
                    <div className="mb-12 border-y border-white/10 py-8">
                      <p className="text-gray-400 text-sm md:text-base font-light leading-relaxed tracking-widest opacity-85">
                        {article.excerpt}
                      </p>
                    </div>
                  )}
                </div>
              )}

              {block.type === 'section' && (
                <div className="mb-12">
                  <h2 className="text-3xl md:text-4xl font-serif font-medium text-white mb-6">
                    {block.title}
                  </h2>
                  <p className="text-gray-400 text-base md:text-lg font-light leading-relaxed tracking-wide">
                    {block.text}
                  </p>
                </div>
              )}

              {block.type === 'image' && (
                <div className="my-16">
                  <div className="relative overflow-hidden aspect-[4/3] mb-4">
                    <img
                      src={block.src}
                      alt={block.caption}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 border border-white/10"></div>
                  </div>
                  {block.caption && (
                    <p className="text-center text-gray-500 text-sm italic">
                      {block.caption}
                    </p>
                  )}
                </div>
              )}

              {block.type === 'highlight' && (
                <div className="my-12 pl-6 border-l-2 border-[#c5a059]">
                  <p className="text-xl md:text-2xl font-serif text-[#c5a059] font-light italic">
                    "{block.text}"
                  </p>
                </div>
              )}
            </motion.div>
          ))}

          {/* Sidebar */}
          <aside className="hidden lg:block">
            <div className="sticky top-[120px] border border-white/10 bg-black/30 backdrop-blur-sm p-8">
              <p className="text-[#c5a059] text-[10px] tracking-[0.5em] uppercase font-bold mb-6">
                Article details
              </p>
              <div className="space-y-5">
                <div className="flex items-center justify-between gap-6">
                  <span className="text-[9px] tracking-[0.35em] uppercase text-gray-500">Category</span>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-white/80">{article.category}</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-center justify-between gap-6">
                  <span className="text-[9px] tracking-[0.35em] uppercase text-gray-500">Date</span>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-white/80">{article.date}</span>
                </div>
                <div className="h-px bg-white/10" />
                <div className="flex items-center justify-between gap-6">
                  <span className="text-[9px] tracking-[0.35em] uppercase text-gray-500">Read</span>
                  <span className="text-[10px] tracking-[0.25em] uppercase text-white/80">{article.readTime}</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => navigate("/journals")}
                className="mt-10 w-full border border-[#c5a059]/40 text-[#c5a059] hover:bg-[#c5a059] hover:text-black transition-colors py-4 text-[10px] tracking-[0.35em] uppercase font-bold"
              >
                Explore more
              </button>
            </div>
          </aside>
        </div>
      </section>

      {/* Related Articles */}
      <section className="py-24 md:py-32 px-6 md:px-12 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-serif font-medium text-white mb-16"
          >
            Continue Reading
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
            {related.map((item, idx) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="group"
              >
                <button
                  type="button"
                  onClick={() => navigate(`/journals/${item.id}`)}
                  className="w-full text-left"
                  aria-label={`Open article: ${item.title}`}
                >
                  <div className="relative overflow-hidden aspect-[4/5] mb-6">
                    <img
                      src={item.coverImage}
                      alt={item.title}
                      className="w-full h-full object-cover grayscale opacity-60 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-1000"
                    />
                    <div className="absolute inset-0 border border-white/10 group-hover:border-[#c5a059]/30 transition-colors"></div>
                  </div>
                  <h3 className="text-xl md:text-2xl font-serif font-medium text-white group-hover:text-[#c5a059] transition-colors leading-tight">
                    {item.title}
                  </h3>
                  <div className="mt-4 flex items-center gap-3 text-[#c5a059] text-[10px] tracking-[0.3em] uppercase font-bold">
                    <span>Explore</span>
                    <ArrowUpRight size={14} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  </div>
                </button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default JournalDetail;
