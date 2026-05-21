import React, { useState } from 'react';
import { UserButton } from '@clerk/react';
import {
  AppBar, Toolbar, Typography, Box, Select, MenuItem,
  FormControl, Switch, FormControlLabel, IconButton, Button,
  Paper, Chip, Divider, Tooltip
} from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import MenuIcon from '@mui/icons-material/Menu';
import SaveIcon from '@mui/icons-material/Save';

// ─── Farben für Veranstaltungsarten ───────────────────────────────────────────
const EVENT_COLORS = {
  Vorlesung: { bg: '#e8f5e9', border: '#4caf50', text: '#1b5e20', chip: '#4caf50' },
  Übung:     { bg: '#fff3e0', border: '#ff9800', text: '#e65100', chip: '#ff9800' },
  Ausfall:   { bg: '#ffebee', border: '#f44336', text: '#b71c1c', chip: '#f44336' },
};

// ─── Beispieldaten ────────────────────────────────────────────────────────────
const DEMO_EVENTS = {
  // [tag][slot] => event-objekt oder null
  // Wochentag: {
  //    0...4: { name: 'Fach', kuerzel: 'Abkürzung', art: 'Vorlesung/ Übung', raum: 'raum', personal: 'prof'},
  // }

  Montag: {
    2: { name: 'Ther. Inform.', kuerzel: 'TI',  art: 'Vorlesung', raum: '303', personal: 'G.V:Baatz' },
    3: { name: 'Ther. Inform.', kuerzel: 'TI',  art: 'Übung',   raum: '303', personal: 'G.V:Baatz' },
  },
  Dienstag: {
    1: { name: 'Mensch. Comp. Inter.',   kuerzel: 'MCI',   art: 'Vorlesung', raum: 'online', personal: 'Lutz' },
    3: { name: 'Rel. Datenbanken',   kuerzel: 'RDB', art: 'Vorlesung',    raum: 'raum', personal: '' },
  },
  Mittwoch: {
    
  },
  Donnerstag: {
    
  },
  Freitag: {
    
  },
};

const DAYS  = ['Montag', 'Dienstag', 'Mittwoch', 'Donnerstag', 'Freitag'];
const SLOTS = [
  { label: '08:00 – 09:30', start: '08:00', end: '09:30' },
  { label: '10:00 – 11:30', start: '10:00', end: '11:30' },
  { label: '12:30 – 14:00', start: '12:30', end: '14:00' },
  { label: '14:30 – 16:00', start: '14:30', end: '16:00' },
  { label: '16:15 – 17:45', start: '16:15', end: '17:45' }
];

// ─── Kleines Veranstaltungs-Karte ─────────────────────────────────────────────
function EventCard({ event }) {
  const colors = EVENT_COLORS[event.art] ?? EVENT_COLORS['Vorlesung'];
  return (
    <Box sx={{
      backgroundColor: colors.bg,
      border: `1.5px solid ${colors.border}`,
      borderRadius: 1.5,
      p: '6px 8px',
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      gap: 0.4,
      overflow: 'hidden',
    }}>
      <Typography sx={{
        fontWeight: 700,
        fontSize: '0.78rem',
        color: colors.text,
        lineHeight: 1.2,
        whiteSpace: 'nowrap',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
      }}>
        {event.name}
        <Typography component="span" sx={{ fontWeight: 400, color: 'text.secondary', fontSize: '0.72rem', ml: 0.5 }}>
          [{event.kuerzel}]
        </Typography>
      </Typography>

      <Box sx={{ display: 'flex', gap: 0.5, flexWrap: 'wrap', alignItems: 'center' }}>
        <Chip
          label={event.art}
          size="small"
          sx={{
            height: 18,
            fontSize: '0.65rem',
            fontWeight: 600,
            backgroundColor: colors.chip,
            color: '#fff',
            '& .MuiChip-label': { px: 0.8 },
          }}
        />
        {event.raum !== '—' && (
          <Chip
            label={event.raum}
            size="small"
            variant="outlined"
            sx={{ height: 18, fontSize: '0.65rem', '& .MuiChip-label': { px: 0.8 } }}
          />
        )}
      </Box>

      <Typography sx={{ fontSize: '0.68rem', color: 'text.secondary', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
        {event.personal}
      </Typography>
    </Box>
  );
}

// ─── Leere Zelle ──────────────────────────────────────────────────────────────
function EmptyCell() {
  return (
    <Box sx={{
      height: '100%',
      border: '1.5px dashed',
      borderColor: 'divider',
      borderRadius: 1.5,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      opacity: 0.35,
    }}>
      <Typography sx={{ fontSize: '0.7rem', color: 'text.disabled' }}>–</Typography>
    </Box>
  );
}

// ─── Haupt-Dashboard ──────────────────────────────────────────────────────────
export default function DashboardPage() {
  const [semester, setSemester]     = useState('SoSe 2025');
  const [kw, setKw]                 = useState(21);
  const [compactView, setCompact]   = useState(false);

  const cellHeight = compactView ? 80 : 110;

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh', backgroundColor: '#f4f6f9' }}>

      {/* ── AppBar ── */}
      <AppBar position="static" color="primary" elevation={2}>
        <Toolbar sx={{ gap: 1.5, flexWrap: 'wrap' }}>

          {/* Semester-Auswahl */}
          <FormControl size="small" sx={{ minWidth: 130 }}>
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

          {/* Kompakt-Toggle */}
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

          <Divider orientation="vertical" flexItem sx={{ borderColor: 'rgba(255,255,255,0.3)', mx: 0.5 }} />

          {/* KW-Navigation */}
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

          <Box sx={{ flexGrow: 1 }} />

          {/* Titel */}
          <Typography variant="h6" sx={{ fontWeight: 700, letterSpacing: 0.5 }}>
            Stundenplaner
          </Typography>

          <Box sx={{ flexGrow: 1 }} />

          {/* Save + UserButton */}
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

          <UserButton showName appearance={{
            elements: { userButtonOuterIdentifier: { color: '#fff' } }
          }} />

        </Toolbar>
      </AppBar>

      {/* ── Stundenplan ── */}
      <Box sx={{ flex: 1, overflow: 'auto', p: 2 }}>
        <Paper elevation={1} sx={{ borderRadius: 2, overflow: 'hidden' }}>

          {/* Header-Zeile: KW + Wochentage */}
          <Box sx={{
            display: 'grid',
            gridTemplateColumns: '72px repeat(5, 1fr)',
            backgroundColor: 'primary.main',
          }}>
            <Box sx={{ p: 1.5, borderRight: '1px solid rgba(255,255,255,0.2)' }}>
              <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.82rem', textAlign: 'center' }}>
                KW {kw}
              </Typography>
            </Box>
            {DAYS.map((day, i) => (
              <Box key={day} sx={{
                p: 1.5,
                textAlign: 'center',
                borderRight: i < 4 ? '1px solid rgba(255,255,255,0.2)' : 'none',
              }}>
                <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '0.88rem' }}>
                  {day}
                </Typography>
              </Box>
            ))}
          </Box>

          <Divider />

          {/* Zeit-Slots */}
          {SLOTS.map((slot, slotIdx) => (
            <React.Fragment key={slotIdx}>
              <Box sx={{
                display: 'grid',
                gridTemplateColumns: '72px repeat(5, 1fr)',
                minHeight: cellHeight,
                borderBottom: slotIdx < SLOTS.length - 1 ? '1px solid' : 'none',
                borderColor: 'divider',
              }}>
                {/* Zeitangabe */}
                <Box sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRight: '1px solid',
                  borderColor: 'divider',
                  backgroundColor: '#f8f9fb',
                  p: 1,
                  gap: 0.3,
                }}>
                  <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, color: 'text.primary' }}>
                    {slot.start}
                  </Typography>
                  <Box sx={{ width: 16, height: '1px', backgroundColor: 'divider' }} />
                  <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary' }}>
                    {slot.end}
                  </Typography>
                </Box>

                {/* Tages-Zellen */}
                {DAYS.map((day, dayIdx) => {
                  const event = DEMO_EVENTS[day]?.[slotIdx] ?? null;
                  return (
                    <Box key={day} sx={{
                      p: 0.75,
                      borderRight: dayIdx < 4 ? '1px solid' : 'none',
                      borderColor: 'divider',
                    }}>
                      {event ? <EventCard event={event} /> : <EmptyCell />}
                    </Box>
                  );
                })}
              </Box>
            </React.Fragment>
          ))}

        </Paper>

        {/* Legende */}
        <Box sx={{ display: 'flex', gap: 1.5, mt: 1.5, flexWrap: 'wrap', alignItems: 'center' }}>
          <Typography sx={{ fontSize: '0.75rem', color: 'text.secondary', mr: 0.5 }}>Legende:</Typography>
          {Object.entries(EVENT_COLORS).map(([label, colors]) => (
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