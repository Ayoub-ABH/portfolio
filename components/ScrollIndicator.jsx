'use client';

import React, { useState, useEffect } from 'react';

// Add global styles to hide default scrollbar
const GlobalScrollbarStyle = () => (
  <style jsx global>{`
    /* Hide scrollbar for Chrome, Safari and Opera */
    body::-webkit-scrollbar {
      display: none;
    }
    
    /* Hide scrollbar for IE, Edge and Firefox */
    body {
      -ms-overflow-style: none;  /* IE and Edge */
      scrollbar-width: none;  /* Firefox */
    }
  `}</style>
);

const ScrollIndicator = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
  
  // Calculate scroll progress
  const calculateScrollProgress = () => {
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    const scrollTop = window.scrollY;
    
    // Calculate percentage scrolled
    const scrolled = (scrollTop / (documentHeight - windowHeight)) * 100;
    setScrollProgress(scrolled);
  };
  
  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', calculateScrollProgress);
    
    // Initial calculation
    calculateScrollProgress();
    
    // Clean up event listener
    return () => window.removeEventListener('scroll', calculateScrollProgress);
  }, []);
  
  return (
    <>
      <GlobalScrollbarStyle />
      <div className="fixed right-0 top-0 h-full w-1 bg-neutral-200 z-50">
        <div 
          className="bg-neutral-900 w-full transition-all duration-200 ease-out"
          style={{ height: `${scrollProgress}%` }}
        />
      </div>
    </>
  );
};

export default ScrollIndicator;