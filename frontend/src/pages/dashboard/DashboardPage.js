import React, { useState, useEffect } from 'react';
import { Box, Paper, Divider, Typography, Fab, Tooltip, Alert, CircularProgress } from '@mui/material';
import { useTheme, useMediaQuery } from '@mui/material';
import { useAuth } from '@clerk/react';
import DashboardHeader from './components/DashboardHeader';
import WeekGrid from './components/WeekGrid';
import { getEventColors } from './components/data';
import { DEMO_EVENTS } from './components/data';
import SyncIcon from '@mui/icons-material/Sync';

const API_BASE_URL = process.env.REACT_APP_API_URL || 'http://localhost:8000/api/v1';

export default function DashboardPage() {
  const [semester, setSemester]   = useState('SoSe 2025');
  const [kw, setKw]               = useState(21);
  const [compactView, setCompact] = useState(false);
  const [canEdit, setEdit]        = useState(false);

  const [timetable, setTimetable]    = useState(null);
  const [usingFallback, setFallback] = useState(false);
  const [loading, setLoading]        = useState(true);

  const { getToken } = useAuth();

  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const cellHeight = compactView ? 80 : 110;

  const gridTemplateColumns = {
    xs: '60px repeat(5, minmax(130px, 1fr))',
    sm: '72px repeat(5, minmax(0, 1fr))',
  };

  useEffect(() => {
    const loadTimetable = async () => {
      setLoading(true);
      setFallback(false);
      try {
        const sessionToken = await getToken();
        const params = new URLSearchParams({
          semester: semester.replace(/\s+/g, ''),
          week: kw,
        });
        const response = await fetch(`${API_BASE_URL}/timetable?${params}`, {
          headers: {
            'Authorization': `Bearer ${sessionToken}`,
            'Content-Type': 'application/json',
          },
        });
        if (!response.ok) throw new Error(`HTTP ${response.status}`);
        const data = await response.json();
        setTimetable(data.data);
      } catch (err) {
        console.warn('API nicht erreichbar, Fallback auf Dummy-Daten:', err.message);
        setTimetable(DEMO_EVENTS);
        setFallback(true);
      } finally {
        setLoading(false);
      }
    };

    loadTimetable();
  }, [semester, kw]);

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: (theme) => theme.palette.background.default }}>
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

        {usingFallback && (
          <Alert severity="warning" sx={{ mb: 1.5 }}>
            Backend nicht erreichbar – es werden Testdaten angezeigt.
          </Alert>
        )}

        {loading ? (
          <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '60%' }}>
            <CircularProgress />
          </Box>
        ) : (
          <>
            <WeekGrid
              gridTemplateColumns={gridTemplateColumns}
              cellHeight={cellHeight}
              isMobile={isMobile}
              timetable={timetable}
            />

            <Box sx={{ display: 'flex', gap: 1.5, mt: 1.5, flexWrap: 'wrap', alignItems: 'center' }}>
              <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mr: 0.5 }}>Legende:</Typography>
              {Object.entries(getEventColors(theme)).map(([label, colors]) => (
                <Box key={label} sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
                  <Box sx={{ width: 12, height: 12, borderRadius: 0.5, backgroundColor: colors.chip }} />
                  <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary' }}>{label}</Typography>
                </Box>
              ))}
            </Box>
          </>
        )}
      </Box>

      <Tooltip title={`Aktuell: ${canEdit ? 'Editierbar' : 'Nicht editierbar'} - Klick zum Switchen`}>
        <Fab
          color={canEdit ? "success" : "error"}
          size="small"
          onClick={() => setEdit(!canEdit)}
          sx={{ position: 'fixed', bottom: 16, right: 16 }}
        >
          <SyncIcon />
        </Fab>
      </Tooltip>
    </Box>
  );
}