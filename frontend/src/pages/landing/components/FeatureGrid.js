import React from 'react';
import { Grid, Card, CardContent, Typography, Box } from '@mui/material';
import AutoAwesomeIcon from '@mui/icons-material/AutoAwesome';
import SpeedIcon from '@mui/icons-material/Speed';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import AppCard from '../../../components/AppCard'

const FEATURES = [
  { title: 'Intelligente Ansicht', desc: 'Sieht auf dem Desktop gut aus und scrollt auf dem Handy geschmeidig mit.', icon: <SmartphoneIcon color="primary" /> },
  { title: 'Verdammt Schnell', desc: 'Keine Ladezeiten dank React-Power. Deine Vorlesungen stehen sofort bereit.', icon: <SpeedIcon color="primary" /> },
  { title: 'Modernes Stack', desc: 'Entwickelt mit Material UI und TypeScript für maximale Stabilität.', icon: <AutoAwesomeIcon color="primary" /> },
];

export default function FeatureGrid() {
  return (
    <Box sx={{ backgroundColor: '#f8f9fb', py: 8 }}>
      <Box sx={{ maxWidth: '1200px', mx: 'auto', px: 3 }}>
        <Grid container spacing={4}>
          {FEATURES.map((feat, index) => (
            <Grid size={{ xs: 12, md: 4 }} key={index}>
              <AppCard elevation={0} sx={{ borderRadius: 7, height: '80%' }}>
                <CardContent sx={{ p: 4 }}>
                  <Box sx={{ mb: 2 }}>{feat.icon}</Box>
                  <Typography variant="h6" sx={{ fontWeight: 700, mb: 1 }}>{feat.title}</Typography>
                  <Typography variant="body2" color="text.secondary">{feat.desc}</Typography>
                </CardContent>
              </AppCard>
            </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  );
}