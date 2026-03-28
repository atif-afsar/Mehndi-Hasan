import React from 'react';

const SectionLoader = ({ bgColor = 'bg-black' }) => {
  return (
    <div className={`${bgColor} py-20 flex items-center justify-center min-h-[200px]`}>
      <div className="flex flex-col items-center gap-4">
        <div className="w-12 h-12 border-2 border-[#c5a059] border-t-transparent rounded-full animate-spin"></div>
        <div className="text-[#c5a059] text-xs tracking-[0.3em] uppercase animate-pulse">
          Loading...
        </div>
      </div>
    </div>
  );
};

export default SectionLoader;
