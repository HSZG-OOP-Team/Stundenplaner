import React from 'react';
import { AppBar, Toolbar, Typography, Box, Select, MenuItem,
  FormControl, Switch, FormControlLabel, IconButton, Button,
  Divider, Tooltip } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import SaveIcon from '@mui/icons-material/Save';
import { UserButton } from '@clerk/react';

export default function DashboardHeader({ semester, setSemester, compactView, setCompact, kw, setKw, isMobile }) {
  return (
    <AppBar position="static" color="primary" elevation={2}>
      <Toolbar sx={{ gap: 1.5, py: { xs: 1, sm: 0 }, flexWrap: 'wrap' }}>

        <FormControl size="small" sx={{ minWidth: { xs: 110, sm: 130 } }}>
          <Select
            value={semester}
            onChange={e => setSemester(e.target.value)}
            sx={{ color: '#fff', '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.4)' },
                  '.MuiSvgIcon-root': { color: '#fff' }, fontSize: '0.85rem' }}
          >
            {['WiSe 2024/25', 'SoSe 2025', 'WiSe 2025/26'].map(s => (
              <MenuItem key={s} value={s}>{s}</MenuItem>
            ))}
          </Select>
        </FormControl>

        <FormControlLabel
          control={
            <Switch
              size="small"
              checked={compactView}
              onChange={e => setCompact(e.target.checked)}
              sx={{ '& .MuiSwitch-thumb': { backgroundColor: '#fff' },
                    '& .MuiSwitch-track': { backgroundColor: 'rgba(255,255,255,0.35)' } }}
            />
          }
          label={<Typography sx={{ color: '#fff', fontSize: '0.8rem' }}>Kompakt</Typography>}
          sx={{ m: 0 }}
        />

        <Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(255,255,255,0.3)', mx: 0.5, display: { xs: 'none', sm: 'block' } }} />

        <Box sx={{ display: 'flex', alignItems: 'center', gap: 0.5 }}>
          <Tooltip title="Vorherige Woche">
            <IconButton size="small" onClick={() => setKw(w => Math.max(1, w - 1))}
                        sx={{ color: '#fff' }}>
              <ChevronLeftIcon fontSize="small" />
            </IconButton>
          </Tooltip>

          <FormControl size="small" sx={{ minWidth: 80 }}>
            <Select
              value={kw}
              onChange={e => setKw(e.target.value)}
              sx={{ color: '#fff', '.MuiOutlinedInput-notchedOutline': { borderColor: 'rgba(255,255,255,0.4)' },
                    '.MuiSvgIcon-root': { color: '#fff' }, fontSize: '0.85rem' }}
            >
              {Array.from({ length: 52 }, (_, i) => i + 1).map(w => (
                <MenuItem key={w} value={w}>KW {w}</MenuItem>
              ))}
            </Select>
          </FormControl>

          <Tooltip title="Nächste Woche">
            <IconButton size="small" onClick={() => setKw(w => Math.min(52, w + 1))}
                        sx={{ color: '#fff' }}>
              <ChevronRightIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </Box>

        {!isMobile && <Box sx={{ flexGrow: 1 }} />}

        <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 0.5, fontSize: { xs: '1.1rem', sm: '1.25rem' } }}>
          Stundenplaner
        </Typography>

        <Box sx={{ flexGrow: 1 }} />

        <Button
          variant="outlined"
          size="small"
          startIcon={<SaveIcon />}
          sx={{ color: '#fff', borderColor: 'rgba(255,255,255,0.5)',
                '&:hover': { borderColor: '#fff', backgroundColor: 'rgba(255,255,255,0.1)' },
                textTransform: 'none', fontSize: '0.82rem' }}
        >
          Speichern
        </Button>

        <IconButton size="small" sx={{ color: '#fff' }}>
          <MenuIcon />
        </IconButton>

        <UserButton showName={!isMobile} appearance={{
          elements: { userButtonOuterIdentifier: { color: '#fff' } }
        }} />

      </Toolbar>
    </AppBar>
  );
}
