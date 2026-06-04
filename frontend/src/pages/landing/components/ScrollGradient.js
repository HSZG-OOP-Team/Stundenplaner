// "special" background for the landing page

import React, { useState, useEffect } from 'react';
import { Box } from '@mui/material';
import { useTheme, alpha } from '@mui/material/styles';

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

  const theme = useTheme();

  // choose gradient color based on theme primary color with alpha
  const primary = theme?.palette?.primary?.main || '#0c6bca';
  const start = alpha(primary, theme.palette.mode === 'dark' ? 0.18 : 0.25);
  const end = alpha(primary, 0);

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
        
        background: `linear-gradient(to bottom, ${start} 0%, ${end} 100%)`,
        
        // set values from above
        opacity: opacity,
        transform: `translateY(${translateY}px)`,
        transition: 'opacity 0.1s ease-out', // fancy movement
      }}
    />
  );
}