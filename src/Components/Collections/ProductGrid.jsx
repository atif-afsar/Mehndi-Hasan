import React, { useState, useEffect } from "react";

const generateProducts = (prefix, count, folder, ext = 'png') => {
  return Array.from({ length: count }, (_, i) => ({
    id: `${folder}-${i + 1}`,
    title: `${folder} ${i + 1}`,
    category: folder,
    desc: `Exclusive ${folder} Collection`,
    price: "Price on Request",
    image: `/${folder}/${prefix}${i + 1}.${ext}`,
    badge: i === 0 ? "New Arrival" : null
  }));
};

const allProducts = [
  ...generateProducts('image', 33, 'Sherwanis'),
  ...generateProducts('suit', 10, 'Suits'),
  ...generateProducts('celeb', 9, 'Celebs'),
  ...generateProducts('kurta', 1, 'kurta'),
  ...generateProducts('awards', 10, 'Awards'),
];

const categories = [
  { id: "Sherwanis", label: "Sherwanis" },
  { id: "Suits", label: "Suits" },
  { id: "Celebs", label: "Celebs" },
  { id: "kurta", label: "Kurta" },
  { id: "Awards", label: "Awards" }
];

const ProductGrid = () => {
  const [filter, setFilter] = useState("Sherwanis");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8; // Number of items per page

  // Reset page to 1 whenever the filter changes
  useEffect(() => {
    setCurrentPage(1);
  }, [filter]);

  // Filter the products
  const filteredProducts = allProducts.filter(p => p.category === filter);
  
  // Calculate pagination details
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
      // Optional smooth scroll back to top of the grid
      window.scrollTo({ top: document.getElementById('product-grid').offsetTop - 100, behavior: 'smooth' });
    }
  };

  return (
    <section id="product-grid" className="bg-[#0a1310] py-24 px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        
        {/* Categories */}
        <div className="flex flex-wrap justify-center sm:justify-start gap-4 sm:gap-8 md:gap-12 mb-16 border-b border-white/5 pb-6">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`text-[11px] md:text-[13px] tracking-[0.15em] uppercase font-bold transition-all duration-300 relative pb-4 md:pb-6 ${
                filter === cat.id ? "text-[#c5a059]" : "text-gray-500 hover:text-white"
              }`}
            >
              {cat.label}
              {filter === cat.id && <div className="absolute bottom-0 left-0 w-full h-[2px] bg-[#c5a059]"></div>}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 md:gap-10">
          {currentItems.map((product) => (
            <div key={product.id} className="group cursor-pointer flex flex-col">
              <div className="aspect-[3/4] overflow-hidden bg-[#0d1815] relative mb-4 rounded-sm shadow-xl border border-white/5 group-hover:border-[#c5a059]/30 transition-colors">
                <img 
                  src={product.image} 
                  alt={product.title} 
                  className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-90 group-hover:opacity-100"
                  loading="lazy"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1594932224828-b4b059b6f68c?auto=format&fit=crop&q=80&w=800'; }}
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-all duration-500"></div>
                {product.badge && (
                    <div className="absolute top-4 left-4 bg-[#c5a059]/90 text-black text-[9px] font-bold uppercase py-1.5 px-3 tracking-widest backdrop-blur-sm shadow-lg">
                        {product.badge}
                    </div>
                )}
              </div>
              
              <div className="space-y-1.5 relative px-1">
                <div className="flex justify-between items-start">
                    <h3 className="text-white text-lg font-serif font-light tracking-wide capitalize">{product.title.replace('-', ' ')}</h3>
                </div>
                <p className="text-gray-400 text-[11px] italic font-light tracking-wider">{product.desc}</p>
                <div className="flex justify-between items-center pt-3 border-t border-white/5 mt-2">
                    <p className="text-[#c5a059] text-[13px] font-semibold tracking-wider">{product.price}</p>
                    <button className="text-gray-600 hover:text-[#c5a059] transition-colors focus:outline-none transform hover:scale-110">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        </svg>
                    </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Improved Pagination Controls */}
        {totalPages > 1 && (
          <div className="flex justify-center items-center mt-20 gap-2 sm:gap-4 flex-wrap">
            <button 
              onClick={() => handlePageChange(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-5 py-2.5 text-xs font-bold tracking-widest uppercase border rounded-sm transition-all duration-300 ${
                currentPage === 1 
                  ? "border-white/5 text-white/20 cursor-not-allowed bg-white/5" 
                  : "border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-black shadow-[0_0_15px_rgba(197,160,89,0.1)] hover:shadow-[0_0_20px_rgba(197,160,89,0.3)]"
              }`}
            >
              Prev
            </button>
            
            <div className="flex gap-2">
              {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => (
                <button
                  key={page}
                  onClick={() => handlePageChange(page)}
                  className={`w-10 h-10 flex items-center justify-center text-sm rounded-sm transition-all duration-300 ${
                    currentPage === page
                      ? "bg-[#c5a059] text-black font-bold shadow-[0_0_15px_rgba(197,160,89,0.4)]"
                      : "border border-white/20 text-white/70 hover:border-[#c5a059] hover:text-[#c5a059] hover:bg-[#c5a059]/10"
                  }`}
                >
                  {page}
                </button>
              ))}
            </div>

            <button 
              onClick={() => handlePageChange(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-5 py-2.5 text-xs font-bold tracking-widest uppercase border rounded-sm transition-all duration-300 ${
                currentPage === totalPages 
                  ? "border-white/5 text-white/20 cursor-not-allowed bg-white/5" 
                  : "border-[#c5a059] text-[#c5a059] hover:bg-[#c5a059] hover:text-black shadow-[0_0_15px_rgba(197,160,89,0.1)] hover:shadow-[0_0_20px_rgba(197,160,89,0.3)]"
              }`}
            >
              Next
            </button>
          </div>
        )}

      </div>
    </section>
  );
};

export default ProductGrid;
