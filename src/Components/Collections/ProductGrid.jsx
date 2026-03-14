import React, { useState } from "react";

const ProductGrid = () => {
  const [filter, setFilter] = useState("Wedding Sherwanis");

  const categories = ["Wedding Sherwanis", "Indo-Western", "Kurta Pajama", "Custom Suits"];
  
  const products = [
    { 
        id: 1, 
        title: "The Imperial Sherwani", 
        category: "Wedding Sherwanis", 
        desc: "Deep Green & Gold Silk Brocade",
        price: "$2,450", 
        image: "https://images.unsplash.com/photo-1594932224828-b4b059b6f68c?auto=format&fit=crop&q=80&w=800",
        badge: "Bespoke"
    },
    { 
        id: 2, 
        title: "Zardosi Fusion Set", 
        category: "Indo-Western", 
        desc: "Indo-Western Luxe Velvet",
        price: "$1,850", 
        image: "https://images.unsplash.com/photo-1595180182604-e0b23021f10d?auto=format&fit=crop&q=80&w=800" 
    },
    { 
        id: 3, 
        title: "Royal Silk Kurta", 
        category: "Kurta Pajama", 
        desc: "Hand-embroidered Muga Silk",
        price: "$950", 
        image: "https://images.unsplash.com/photo-1593032465175-481ac7f40147?auto=format&fit=crop&q=80&w=800" 
    },
    { 
        id: 4, 
        title: "Bespoke Midnight Suit", 
        category: "Custom Suits", 
        desc: "Premium Italian Super 150s Wool",
        price: "$3,200", 
        image: "https://images.unsplash.com/photo-1594938384824-0227160503ba?auto=format&fit=crop&q=80&w=800",
        badge: "Limited"
    },
  ];

  const filteredProducts = products; // Using all for display as per screenshot

  return (
    <section className="bg-[#0a1310] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Categories */}
        <div className="flex flex-wrap justify-start gap-8 md:gap-12 mb-20 border-b border-white/5 pb-6">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`text-[10px] tracking-[0.2em] uppercase font-bold transition-all duration-300 relative pb-6 ${
                filter === cat ? "text-[#c5a059]" : "text-gray-500 hover:text-white"
              }`}
            >
              {cat}
              {filter === cat && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c5a059]"></div>}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              <div className="aspect-[3/4] overflow-hidden bg-[#0d1815] relative mb-6">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-90"
                />
                {product.badge && (
                    <div className="absolute top-4 left-4 bg-[#c5a059]/90 text-black text-[8px] font-bold uppercase py-1 px-3 tracking-widest">
                        {product.badge}
                    </div>
                )}
              </div>
              
              <div className="space-y-2 relative">
                <div className="flex justify-between items-start">
                    <h3 className="text-white text-md font-serif font-light">{product.title}</h3>
                </div>
                <p className="text-gray-500 text-[10px] italic font-light">{product.desc}</p>
                <div className="flex justify-between items-center pt-2">
                    <p className="text-white text-sm font-bold">{product.price}</p>
                    <button className="text-gray-600 hover:text-[#c5a059] transition-colors">
                        <span className="text-lg">♥</span>
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ProductGrid;
