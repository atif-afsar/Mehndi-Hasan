import React from 'react';

/**
 * Responsive Hero Image Component
 * Optimized for LCP (Largest Contentful Paint)
 * Uses responsive images with srcset for different screen sizes
 */
const ResponsiveHeroImage = ({
  src,
  alt,
  className = '',
  priority = false,
  mobileSrc,
  tabletSrc,
  desktopSrc,
  width,
  height,
}) => {
  // If responsive sources are provided, use them
  if (mobileSrc || tabletSrc || desktopSrc) {
    return (
      <picture>
        {/* Mobile: up to 768px */}
        {mobileSrc && (
          <source
            media="(max-width: 768px)"
            srcSet={mobileSrc}
            type="image/webp"
          />
        )}
        
        {/* Tablet: 769px to 1024px */}
        {tabletSrc && (
          <source
            media="(min-width: 769px) and (max-width: 1024px)"
            srcSet={tabletSrc}
            type="image/webp"
          />
        )}
        
        {/* Desktop: 1025px and above */}
        {desktopSrc && (
          <source
            media="(min-width: 1025px)"
            srcSet={desktopSrc}
            type="image/webp"
          />
        )}
        
        {/* Fallback image */}
        <img
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={className}
          loading={priority ? 'eager' : 'lazy'}
          fetchpriority={priority ? 'high' : 'auto'}
          decoding="async"
        />
      </picture>
    );
  }

  // Simple image without responsive sources
  return (
    <img
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading={priority ? 'eager' : 'lazy'}
      fetchpriority={priority ? 'high' : 'auto'}
      decoding="async"
    />
  );
};

export default ResponsiveHeroImage;
