import React from "react";
import LazyImage from "../Common/LazyImage";

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
          <div className="aspect-[4/5] overflow-hidden">
            <LazyImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuDoXUJ861zHg0Ms2zFiL0kvyj3uKtFuk9RPsDrI_sDtiHeh4J3HIdT-CiG514MeiTqC4ngrZD8Dm-XueCoTKbuSBNJat0ctd1axotaYmxLhJOghVUZA5igwhOq_WmhF8NCJf2xbbBOdpiEpKJ8f15kgs-9NoFQtbM5ZWPX-1acZHP-dwPIp8sOx7isxXmQWxleqKV9dPTC4jKlt12rKM5P4bNjomnDEf72Lruz08MIDxFYfiEAMSFty2FqYGFTR9SuNCv0XTTSm1s1X" alt="Suit" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[4/5] overflow-hidden">
             <LazyImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9P67rZMf7Sac48MIbPblxBrSElQrMfjWb-k6VUg9rt2KgwCtRGlQ9GQEiZz9vktL68ojrqwm8a17HuQ7WO7w9BK5IxbxP-q--tLHFPRrnrVESqkb2obDtn0oOx71kUFjqbWtzI8Uo9vYKi1Bk4cCoGyJ40h9PejWx3ERgbvcRyoDyfNzpk2t_W-9XdIHcKJQfADWtFVbRCqM1E3qpTDIkQwsyk5jw-mRZpRSEVR2_4pwclienXiL0wNN5kXmMmzc5tRSO2ALa7IGB" alt="Fabric" className="w-full h-full object-cover" />
          </div>
          <div className="aspect-[4/5] bg-[#3a4539]"></div> {/* Dark olive block */}
          <div className="aspect-[4/5] overflow-hidden">
             <LazyImage src="https://lh3.googleusercontent.com/aida-public/AB6AXuArdwPZRGD-Whlz4fGnNScysEk6yczVYOl2HS1YswylLfu-DXBWVq9J7ZUND-CAy8eXxQw5KTFCy57j-AJXZYIGQJ5DxWIGUhJeppVUJ9KA3D7qatP_ZieDLle8fFisxepZHIirWXiIzwOJfr1CVjK44AbPTwLYutPCyaT1BhjL9kP2i7Vt1RVv6cOKQVT06dUEbtuwhMAD1i68mKsumqCKGG-EmqTMC3KXnQ5XO92KfATuL_IeSLmctGdx-TNrEY0NhrugKa8X8TGd" alt="Store" className="w-full h-full object-cover opacity-60" />
          </div>
        </div>

      </div>
    </section>
  );
};

export default LegacyStory;
