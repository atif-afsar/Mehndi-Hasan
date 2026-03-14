import React from "react";

const LegacyStory = () => {
  return (
    <section className="bg-[#0a1310] py-40 px-6 md:px-20 text-white">
      <div className="max-w-7xl mx-auto flex flex-col xl:flex-row gap-20 items-start">
        
        {/* Left Content */}
        <div className="flex-1 space-y-12">
          <header>
            <h2 className="text-4xl md:text-5xl font-medium leading-tight text-[#c5a059]">
              A Legacy of <br /> Master Craftsmanship
            </h2>
          </header>

          <div className="space-y-8 text-gray-400 font-light leading-relaxed text-sm md:text-base">
            <p>
              Founded in the pivotal year of 1947, Mehdi Hasan Tailors began as a small atelier 
              with a single sewing machine and a profound vision: to bring the precision of 
              Savile Row to the heart of South Asia.
            </p>
            <p>
              Every stitch we make is a dialogue between tradition and modernity. We don't just 
              make suits; we construct armor for the modern gentleman, using time-honored 
              techniques that have remained largely unchanged for a century.
            </p>
            <p className="italic font-normal text-[#c5a059] text-lg border-l border-[#c5a059]/30 pl-6 py-2">
              "The suit should whisper, never shout."
            </p>
          </div>
        </div>

        {/* Right Image Grid */}
        <div className="flex-1 grid grid-cols-2 gap-4">
          <div className="aspect-[4/5] bg-gray-900 overflow-hidden">
            <img src="https://images.unsplash.com/photo-1594938384824-0227160503ba?auto=format&fit=crop&q=80&w=800" alt="Suit" className="w-full h-full object-cover grayscale opacity-80" />
          </div>
          <div className="aspect-[4/5] bg-gray-900 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1593032465175-481ac7f40147?auto=format&fit=crop&q=80&w=800" alt="Fabric" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[4/5] bg-[#3a4539]"></div> {/* Dark olive block */}
          <div className="aspect-[4/5] bg-gray-900 overflow-hidden">
             <img src="https://images.unsplash.com/photo-1598460350580-e41209325da2?auto=format&fit=crop&q=80&w=800" alt="Store" className="w-full h-full object-cover opacity-60" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default LegacyStory;
