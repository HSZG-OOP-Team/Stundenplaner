import React, { useState } from 'react';
import { Box, Container, Fab, Tooltip, Typography } from '@mui/material';
import SyncIcon from '@mui/icons-material/Sync';
import { useNavigate } from 'react-router-dom';
import HeroSection from './components/HeroSection';
import FeatureGrid from './components/FeatureGrid';
import ScrollGradient from './components/ScrollGradient';
import AppCard from '../../components/AppCard';
import ThemeToggle from '../../components/ThemeToggle';

export default function LandingPage() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const navigate = useNavigate();

    const handleNavigation = () => {
    if (isLoggedIn) {
      console.log('Weiterleitung zum /dashboard...');
      navigate('/dashboard');
    } else {
      console.log('Weiterleitung zum /login (Clerk)...');
      navigate('/login');
    }
  };

  return (
    <Container>
      <Box sx={{ position: 'fixed', top: 12, right: 12, zIndex: 1400 }}>
        <ThemeToggle />
      </Box>
        {/* background with special behavior*/}
        <ScrollGradient />

        <Box sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <HeroSection isLoggedIn={isLoggedIn} onNavigate={handleNavigation} />
            <FeatureGrid />
        </Box>
        <Tooltip title={`Aktuell: ${isLoggedIn ? 'Eingeloggt' : 'Ausgeloggt'} - Klick zum Switchen`}>
        <Fab 
            color={isLoggedIn ? "success" : "error"} 
            size="small"
            onClick={() => setIsLoggedIn(!isLoggedIn)} // Invertiert den Boolean bei Klick
            sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
            <SyncIcon />
        </Fab>
        </Tooltip>
    </Container>
  );
}