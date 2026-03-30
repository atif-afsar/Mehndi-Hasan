import React, { useState, useEffect, useRef } from 'react';

const LazyImage = ({ 
  src, 
  alt, 
  className = '', 
  priority = false,
  onError,
  ...props 
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef(null);

  useEffect(() => {
    if (priority) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsInView(true);
            observer.disconnect();
          }
        });
      },
      {
        rootMargin: '50px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => {
      if (imgRef.current) {
        observer.unobserve(imgRef.current);
      }
    };
  }, [priority]);

  const getWebPSrc = (originalSrc) => {
    if (!originalSrc) return originalSrc;
    // If already webp, return as is
    if (originalSrc.endsWith('.webp')) return originalSrc;
    // Otherwise convert png/jpg to webp
    return originalSrc.replace(/\.(png|jpg|jpeg)$/i, '.webp');
  };

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = (e) => {
    const currentSrc = e.target.src;
    
    // If we're currently failing on a webp image
    if (currentSrc.endsWith('.webp')) {
      // If original src was not webp (meaning we auto-converted it), fall back to original
      if (!src.endsWith('.webp')) {
        e.target.src = src;
      } else {
        // If original src WAS webp, fall back to png
        e.target.src = src.replace(/\.webp$/i, '.png');
      }
    } else if (onError) {
      onError(e);
    }
  };

  return (
    <img
      ref={imgRef}
      src={isInView ? getWebPSrc(src) : undefined}
      alt={alt}
      className={`${className} ${isLoaded ? 'opacity-100' : 'opacity-0'} transition-opacity duration-300`}
      loading={priority ? 'eager' : 'lazy'}
      onLoad={handleLoad}
      onError={handleError}
      {...props}
    />
  );
};

export default LazyImage;
