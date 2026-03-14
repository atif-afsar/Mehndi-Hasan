import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#070d0b] py-24 px-6 md:px-20 text-white border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 md:gap-24 mb-20">
          
          {/* Brand */}
          <div className="col-span-1 md:col-span-2 space-y-8">
            <div className="w-12 h-12 bg-white/10 flex items-center justify-center p-2 mb-8">
              <img src="/logo.png" alt="M" className="w-full h-full object-contain invert opacity-50" />
            </div>
            <p className="text-gray-500 text-sm font-light leading-relaxed max-w-sm italic">
              Crafting elegance since 1972. The legacy of Mehdi Hasan 
              continues through every stitch and silhouette, serving the 
              world's most discerning patrons.
            </p>
            <div className="flex gap-6 text-gray-500">
                <a href="#" className="hover:text-white transition-colors">🌐</a>
                <a href="#" className="hover:text-white transition-colors">📧</a>
                <a href="#" className="hover:text-white transition-colors">🔗</a>
            </div>
          </div>

          {/* Links 1 */}
          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#c5a059]">Collections</h4>
            <ul className="space-y-4 text-xs font-light text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Wedding Sherwanis</li>
              <li className="hover:text-white cursor-pointer transition-colors">Indo-Western</li>
              <li className="hover:text-white cursor-pointer transition-colors">Kurta Pajama</li>
              <li className="hover:text-white cursor-pointer transition-colors">Custom Suits</li>
            </ul>
          </div>

          {/* Links 2 */}
          <div className="space-y-6">
            <h4 className="text-[10px] tracking-[0.3em] uppercase font-bold text-[#c5a059]">Heritage</h4>
            <ul className="space-y-4 text-xs font-light text-gray-400">
              <li className="hover:text-white cursor-pointer transition-colors">Our Story</li>
              <li className="hover:text-white cursor-pointer transition-colors">Bespoke Process</li>
              <li className="hover:text-white cursor-pointer transition-colors">Store Locator</li>
              <li className="hover:text-white cursor-pointer transition-colors">Privacy Policy</li>
            </ul>
          </div>

        </div>

        {/* Bottom */}
        <div className="pt-12 border-t border-white/5 flex flex-col items-center justify-center gap-6">
           <p className="text-[9px] tracking-[0.2em] font-light text-gray-600 uppercase">
             © 2024 Mehdi Hasan Tailors. All rights reserved. Crafted for royalty.
           </p>
           <div className="flex gap-6 text-gray-600 text-[10px] tracking-widest">
              <span>⚔️</span> <span>📷</span> <span>🌐</span>
           </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
