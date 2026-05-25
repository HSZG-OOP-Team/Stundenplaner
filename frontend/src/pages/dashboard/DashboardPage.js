import React, { useState } from 'react';
import { Box, Paper, Divider, Typography } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import DashboardHeader from './components/DashboardHeader';
import WeekGrid from './components/WeekGrid';
import { getEventColors } from './components/data';

export default function DashboardPage() {
  const [semester, setSemester]     = useState('SoSe 2025');
  const [kw, setKw]                 = useState(21);
  const [compactView, setCompact]   = useState(false);

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const cellHeight = compactView ? 80 : 110;

  const gridTemplateColumns = {
    xs: '60px repeat(5, minmax(130px, 1fr))',
    sm: '72px repeat(5, minmax(0, 1fr))',
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#f4f6f9' }}>
      <DashboardHeader
        semester={semester}
        setSemester={setSemester}
        compactView={compactView}
        setCompact={setCompact}
        kw={kw}
        setKw={setKw}
        isMobile={isMobile}
      />

      <Box sx={{ flex: 1, overflow: 'auto', p: { xs: 1, sm: 2 } }}>
        <WeekGrid gridTemplateColumns={gridTemplateColumns} cellHeight={cellHeight} />

        <Box sx={{ display: 'flex', gap: 1.5, mt: 1.5, flexWrap: 'wrap', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mr: 0.5 }}>Legende:</Typography>
          {Object.entries(getEventColors(theme)).map(([label, colors]) => (
            <Box key={label} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
              <Box sx={{ width: 12, height: 12, borderRadius: 0.5, backgroundColor: colors.chip }} />
              <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>{label}</Typography>
            </Box>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
