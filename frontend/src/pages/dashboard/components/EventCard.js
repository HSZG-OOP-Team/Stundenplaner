import React from 'react';
import { Box, Typography, Chip } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { getEventColors } from './data';

export default function EventCard({ event }) {
  const theme = useTheme();
  const colors = getEventColors(theme)[event.art] ?? getEventColors(theme)['Vorlesung'];

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
      </Typography>

      <Typography sx={{ fontWeight: 400, color: 'text.secondary', fontSize: '0.72rem', mt: -0.2 }}>
        [{event.kuerzel}]
      </Typography>

      <Box sx={{ display: 'flex', gap: 0.5, alignItems: 'center', minWidth: 0 }}>
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
            sx={{ 
              height: 18, 
              fontSize: '0.65rem', 
              '& .MuiChip-label': { px: 0.8 },
              overflow: 'hidden',
              textOverflow: 'ellipsis'
            }}
          />
        )}
      </Box>

      <Typography sx={{ 
        fontSize: '0.68rem', 
        color: 'text.secondary', 
        whiteSpace: 'nowrap', 
        overflow: 'hidden', 
        textOverflow: 'ellipsis'
      }}>
        {event.personal}
      </Typography>
    </Box>
  );
}
