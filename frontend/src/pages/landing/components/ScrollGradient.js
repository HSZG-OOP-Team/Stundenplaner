// "special" background for the landing page

import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';

export default function ScrollGradient() {
    // varaiable needen for calculation of scrollspeed and opacity 
    const [scrollOffset, setScrollOffset] = useState(0);

    // important: variable with funtction needed
    const handleScroll = () => { setScrollOffset(window.scrollY); }

    // init function 
    useEffect(() => {
        // refresh scrollOffset value when scrolled
        window.addEventListener('scroll', handleScroll);

        // dispose function - when site left
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // values for the wished background behavior
    // 1. y-axes transformation of the background
    const translateY = scrollOffset * 0.5;

    // 2. Fade-Out-Effekt: Ab 300px Scroll-Weite ist der Verlauf komplett unsichtbar (Opacity = 0)
    const opacity = Math.max(0, 1 - scrollOffset / 300);

  return (
    // actual background element - can be replaced
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '60vh', // 60vh - 60% of the screens height
        pointerEvents: 'none', // won't register clicks
        zIndex: 0, // positioned behind every other element
        
        background: 'linear-gradient(to bottom, rgba(12, 107, 202, 0.25) 0%, rgba(26, 118, 255, 0) 100%)',
        
        // set values from above
        opacity: opacity,
        transform: `translateY(${translateY}px)`,
        transition: 'opacity 0.1s ease-out', // fancy movement
      }}
    />
  );
}