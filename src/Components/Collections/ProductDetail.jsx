import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import Footer from '../Common/Footer';
import SEO from '../Common/SEO';

const generateProducts = (prefix, count, folder, ext = 'png', imagePath = null) => {
  const path = imagePath || folder;
  return Array.from({ length: count }, (_, i) => ({
    id: `${folder}-${i + 1}`,
    title: `${folder} ${i + 1}`,
    category: folder,
    desc: `Exclusive ${folder} Collection`,
    price: "Price on Request",
    image: `/${path}/${prefix}${i + 1}.${ext}`,
    badge: i === 0 ? "New Arrival" : null
  }));
};

const allProducts = [
  ...generateProducts('image', 33, 'Sherwanis'),
  ...generateProducts('suit', 20, 'Suits'),
  ...generateProducts('kurta', 9, 'Kurta-Pajama', 'png', 'kurta'),
  ...generateProducts('west', 16, 'Indo-west', 'png', 'Indo-west'),
];

const productDescriptions = {
  'Sherwanis': {
    title: 'Exquisite Sherwani Collection',
    description: 'Our Sherwani collection represents the pinnacle of traditional Indian formal wear. Each piece is meticulously crafted with premium fabrics and intricate embroidery, perfect for weddings and special occasions.',
    details: [
      'Hand-embroidered details with traditional motifs',
      'Premium silk and cotton blends',
      'Custom tailoring available',
      'Perfect for weddings and celebrations'
    ],
    features: [
      'Intricate embroidery work',
      'Premium fabric selection',
      'Expert craftsmanship',
      'Timeless elegance'
    ]
  },
  'Suits': {
    title: 'Contemporary Suit Collection',
    description: 'Modern suits that blend contemporary design with traditional craftsmanship. Ideal for formal events, business occasions, and celebrations.',
    details: [
      'Contemporary tailored fit',
      'Premium wool and silk blends',
      'Versatile styling options',
      'Perfect for formal occasions'
    ],
    features: [
      'Modern silhouette',
      'Premium materials',
      'Precise tailoring',
      'Sophisticated design'
    ]
  },
  'Kurta-Pajama': {
    title: 'Elegant Kurta-Pajama Collection',
    description: 'Comfortable yet elegant kurta-pajama sets that are perfect for casual gatherings, festivals, and everyday wear. Crafted with finest fabrics and attention to detail.',
    details: [
      'Comfortable fit for all occasions',
      'Fine cotton and linen blends',
      'Versatile color options',
      'Easy to style and wear'
    ],
    features: [
      'Comfortable design',
      'Quality fabrics',
      'Versatile styling',
      'Perfect for any occasion'
    ]
  },
  'Indo-west': {
    title: 'Indo-Western Fusion Collection',
    description: 'A unique blend of traditional Indian and Western styles. These pieces are perfect for those who want to make a contemporary statement while honoring tradition.',
    details: [
      'Fusion of Indian and Western styles',
      'Modern silhouettes with traditional elements',
      'Versatile for multiple occasions',
      'Contemporary color palettes'
    ],
    features: [
      'Fusion design',
      'Modern aesthetics',
      'Traditional elements',
      'Versatile wear'
    ]
  }
};

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState('M');

  const product = allProducts.find(p => p.id === id);

  if (!product) {
    return (
      <div className="bg-[#0a1310] min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white text-3xl mb-4">Product Not Found</h1>
          <button
            onClick={() => navigate('/collections')}
            className="text-[#c5a059] hover:text-white transition-colors"
          >
            Back to Collections
          </button>
        </div>
      </div>
    );
  }

  const categoryInfo = productDescriptions[product.category] || productDescriptions['Sherwanis'];
  const sizes = ['XS', 'S', 'M', 'L', 'XL', 'XXL'];

  return (
    <main className="bg-[#0a1310] min-h-screen">
      <SEO 
        title={`${product.title} - ${categoryInfo.title} | Mehdi Hasan Tailor`}
        description={categoryInfo.description}
        keywords={`${product.category}, ${product.title}, bespoke ${product.category}, custom ${product.category}, luxury menswear`}
        ogImage={product.image}
        ogType="product"
      />
      {/* Breadcrumb */}
      <div className="bg-[#0a1310] border-b border-white/5 py-4 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <button
            onClick={() => navigate('/collections')}
            className="text-gray-400 hover:text-[#c5a059] transition-colors text-sm tracking-wider"
          >
            ← Back to Collections
          </button>
        </div>
      </div>

      {/* Product Detail Section */}
      <section className="py-16 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            
            {/* Image Section */}
            <div className="flex flex-col gap-6">
              <div className="aspect-[3/4] overflow-hidden bg-[#0d1815] rounded-sm border border-white/10 shadow-2xl">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover"
                  onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1594932224828-b4b059b6f68c?auto=format&fit=crop&q=80&w=800'; }}
                />
              </div>
              
              {/* Thumbnail Gallery */}
              <div className="flex gap-3 overflow-x-auto pb-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex-shrink-0 w-20 h-24 bg-[#0d1815] rounded-sm border border-white/10 overflow-hidden cursor-pointer hover:border-[#c5a059]/50 transition-colors">
                    <img
                      src={product.image}
                      alt={`View ${i}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            </div>

            {/* Details Section */}
            <div className="flex flex-col justify-start space-y-8">
              
              {/* Category Badge */}
              <div>
                <span className="text-[#c5a059] text-xs font-bold tracking-[0.15em] uppercase">
                  {product.category}
                </span>
              </div>

              {/* Title */}
              <div>
                <h1 className="text-white text-4xl md:text-5xl font-serif font-light tracking-wide mb-2">
                  {categoryInfo.title}
                </h1>
                <p className="text-gray-400 text-sm italic font-light">
                  {product.desc}
                </p>
              </div>

              {/* Price */}
              <div className="border-t border-b border-white/10 py-6">
                <p className="text-[#c5a059] text-2xl font-semibold tracking-wider">
                  {product.price}
                </p>
                <p className="text-gray-500 text-xs mt-2 tracking-wider">
                  Inclusive of all taxes
                </p>
              </div>

              {/* Description */}
              <div className="space-y-4">
                <p className="text-gray-300 text-sm leading-relaxed font-light">
                  {categoryInfo.description}
                </p>
              </div>

              {/* Size Selection */}
              <div className="space-y-4">
                <label className="text-white text-sm font-semibold tracking-wider uppercase">
                  Select Size
                </label>
                <div className="grid grid-cols-3 sm:grid-cols-6 gap-3">
                  {sizes.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`py-3 px-2 text-xs font-bold tracking-widest uppercase border rounded-sm transition-all duration-300 ${
                        selectedSize === size
                          ? 'bg-[#c5a059] text-black border-[#c5a059]'
                          : 'border-white/20 text-white/70 hover:border-[#c5a059] hover:text-[#c5a059]'
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Key Features */}
              <div className="border-t border-white/10 pt-8 space-y-4">
                <h3 className="text-white font-semibold tracking-wider uppercase text-sm">
                  Key Features
                </h3>
                <ul className="space-y-3">
                  {categoryInfo.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-3">
                      <span className="text-[#c5a059] mt-1">✓</span>
                      <span className="text-gray-300 text-sm font-light">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

            </div>
          </div>

          {/* Details Section */}
          <div className="mt-20 border-t border-white/10 pt-16">
            <h2 className="text-white text-3xl font-serif font-light tracking-wide mb-12">
              Product Details
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Left Column */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-[#c5a059] text-sm font-bold tracking-widest uppercase mb-4">
                    About This Collection
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    {categoryInfo.description}
                  </p>
                </div>

                <div>
                  <h3 className="text-[#c5a059] text-sm font-bold tracking-widest uppercase mb-4">
                    Craftsmanship
                  </h3>
                  <p className="text-gray-300 text-sm leading-relaxed font-light">
                    Each piece in our collection is handcrafted by master artisans with decades of experience. We use only the finest materials sourced from premium suppliers to ensure exceptional quality and durability.
                  </p>
                </div>
              </div>

              {/* Right Column */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-[#c5a059] text-sm font-bold tracking-widest uppercase mb-4">
                    What's Included
                  </h3>
                  <ul className="space-y-2">
                    {categoryInfo.details.map((detail, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="text-[#c5a059] text-lg">•</span>
                        <span className="text-gray-300 text-sm font-light">{detail}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h3 className="text-[#c5a059] text-sm font-bold tracking-widest uppercase mb-4">
                    Care Instructions
                  </h3>
                  <ul className="space-y-2 text-gray-300 text-sm font-light">
                    <li>• Dry clean only for best results</li>
                    <li>• Store in a cool, dry place</li>
                    <li>• Avoid direct sunlight exposure</li>
                    <li>• Handle with care to preserve embroidery</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          <div className="mt-20 border-t border-white/10 pt-16">
            <h2 className="text-white text-3xl font-serif font-light tracking-wide mb-12">
              More from {product.category}
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {allProducts
                .filter(p => p.category === product.category && p.id !== product.id)
                .slice(0, 4)
                .map((relatedProduct) => (
                  <div
                    key={relatedProduct.id}
                    onClick={() => navigate(`/collections/${relatedProduct.id}`)}
                    className="group cursor-pointer flex flex-col"
                  >
                    <div className="aspect-[3/4] overflow-hidden bg-[#0d1815] relative mb-4 rounded-sm border border-white/5 group-hover:border-[#c5a059]/30 transition-colors">
                      <img
                        src={relatedProduct.image}
                        alt={relatedProduct.title}
                        className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 opacity-90 group-hover:opacity-100"
                        onError={(e) => { e.target.src = 'https://images.unsplash.com/photo-1594932224828-b4b059b6f68c?auto=format&fit=crop&q=80&w=800'; }}
                      />
                    </div>
                    <h3 className="text-white text-sm font-serif font-light tracking-wide capitalize">
                      {relatedProduct.title.replace('-', ' ')}
                    </h3>
                    <p className="text-[#c5a059] text-xs font-semibold tracking-wider mt-2">
                      {relatedProduct.price}
                    </p>
                  </div>
                ))}
            </div>
          </div>

        </div>
      </section>

      <Footer />
    </main>
  );
};

export default ProductDetail;
