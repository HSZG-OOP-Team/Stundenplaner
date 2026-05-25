import React from 'react';
import { Box, Paper, Divider, Typography } from '@mui/material';
import EventCard from './EventCard';
import EmptyCell from './EmptyCell';
import { DEMO_EVENTS, DAYS, SLOTS } from './data';

export default function WeekGrid({ gridTemplateColumns, cellHeight }) {
  return (
    <Paper elevation={1} sx={{ borderRadius: 2, overflow: 'hidden', overflowX: 'auto' }}>
      <Box sx={{ minWidth: { xs: '710px', md: '100%' } }}>

        <Box sx={{
          display: 'grid',
          gridTemplateColumns: gridTemplateColumns,
          backgroundColor: 'primary.main',
        }}>
          <Box sx={{ p: 1.5, borderRight: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.82rem', textAlign: 'center' }}>
              KW
            </Typography>
          </Box>
          {DAYS.map((day, i) => (
            <Box key={day.full} sx={{
              p: 1.5,
              textAlign: 'center',
              borderRight: i < 4 ? '1px solid rgba(255,255,255,0.2)' : 'none',
            }}>
              <Typography sx={{ color: '#fff', fontWeight: 600, fontSize: '0.88rem' }}>
                {day.full}
              </Typography>
            </Box>
          ))}
        </Box>

        <Divider />

        {SLOTS.map((slot, slotIdx) => (
          <React.Fragment key={slotIdx}>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: gridTemplateColumns,
              minHeight: cellHeight,
              borderBottom: slotIdx < SLOTS.length - 1 ? '1px solid' : 'none',
              borderColor: 'divider',
            }}>
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

              {DAYS.map((day, dayIdx) => {
                const event = DEMO_EVENTS[day.full]?.[slotIdx] ?? null;
                return (
                  <Box key={day.full} sx={{
                    p: 0.75,
                    borderRight: dayIdx < 4 ? '1px solid' : 'none',
                    borderColor: 'divider',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    boxSizing: 'border-box',
                  }}>
                    {event ? <EventCard event={event} /> : <EmptyCell />}
                  </Box>
                );
              })}
            </Box>
          </React.Fragment>
        ))}
      </Box>
    </Paper>
  );
}
