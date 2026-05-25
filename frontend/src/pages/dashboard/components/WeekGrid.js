import React, { useState, useRef } from 'react';
import { Box, Paper, Divider, Typography, IconButton } from '@mui/material';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import EventCard from './EventCard';
import EmptyCell from './EmptyCell';
import { DEMO_EVENTS, DAYS, SLOTS } from './data';

export default function WeekGrid({ gridTemplateColumns, cellHeight, isMobile }) {
  const [currentDay, setCurrentDay] = useState(0);
  const touchStartX = useRef(null);
  const touchDeltaX = useRef(0);

  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchDeltaX.current = 0;
  };

  const handleTouchMove = (e) => {
    if (touchStartX.current == null) return;
    const x = e.touches[0].clientX;
    touchDeltaX.current = x - touchStartX.current;
  };

  const handleTouchEnd = () => {
    const threshold = 40;
    if (touchDeltaX.current > threshold) {
      setCurrentDay(d => Math.max(0, d - 1));
    } else if (touchDeltaX.current < -threshold) {
      setCurrentDay(d => Math.min(DAYS.length - 1, d + 1));
    }
    touchStartX.current = null;
    touchDeltaX.current = 0;
  };

  if (isMobile) {
    return (
      <Paper elevation={1} sx={{ borderRadius: 2, overflow: 'hidden' }}>
        <Box sx={{ p: 0 }} onTouchStart={handleTouchStart} onTouchMove={handleTouchMove} onTouchEnd={handleTouchEnd}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', px: 1, py: 0.5 }}>
            <IconButton size="small" onClick={() => setCurrentDay(d => Math.max(0, d - 1))}>
              <ChevronLeftIcon />
            </IconButton>
            <Typography sx={{ fontWeight: 700 }}>{DAYS[currentDay].full}</Typography>
            <IconButton size="small" onClick={() => setCurrentDay(d => Math.min(DAYS.length - 1, d + 1))}>
              <ChevronRightIcon />
            </IconButton>
          </Box>

          <Divider />

          <Box sx={{ maxHeight: 'calc(100vh - 200px)', overflowY: 'auto' }}>
            {SLOTS.map((slot, slotIdx) => (
              <Box key={slotIdx} sx={{ display: 'grid', gridTemplateColumns: '72px 1fr', minHeight: cellHeight, borderBottom: slotIdx < SLOTS.length - 1 ? '1px solid' : 'none', borderColor: 'divider' }}>
                <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', backgroundColor: '#f8f9fb', p: 1 }}>
                  <Typography sx={{ fontSize: '0.72rem', fontWeight: 700, color: 'text.primary' }}>{slot.start}</Typography>
                  <Box sx={{ width: 16, height: '1px', backgroundColor: 'divider' }} />
                  <Typography sx={{ fontSize: '0.72rem', color: 'text.secondary' }}>{slot.end}</Typography>
                </Box>
                <Box sx={{ p: 0.75, boxSizing: 'border-box', display: 'flex', alignItems: 'stretch' }}>
                  {DEMO_EVENTS[DAYS[currentDay].full]?.[slotIdx] ? <EventCard event={DEMO_EVENTS[DAYS[currentDay].full][slotIdx]} /> : <EmptyCell />}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Paper>
    );
  }

  // Desktop / larger screens: unchanged
  return (
    <Paper elevation={1} sx={{ borderRadius: 2, overflow: 'hidden', overflowX: 'auto' }}>
      <Box sx={{ minWidth: { xs: '710px', md: '100%' } }}>
        
        {/* weekdays row */}
        <Box sx={{
          display: 'grid',
          gridTemplateColumns: gridTemplateColumns,
          backgroundColor: 'primary.main',
        }}>
          {/* field one: kw */}
          <Box sx={{ p: 1.5, borderRight: '1px solid rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography sx={{ color: '#fff', fontWeight: 700, fontSize: '0.82rem', textAlign: 'center' }}>
              KW
            </Typography>
          </Box>

          {/* every weekday as field mapped with DAYS in data.js*/}
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

        {/* mapping slots row by row */}
        {SLOTS.map((slot, slotIdx) => (
          <React.Fragment key={slotIdx}>
            <Box sx={{
              display: 'grid',
              gridTemplateColumns: gridTemplateColumns,
              minHeight: cellHeight,
              borderBottom: slotIdx < SLOTS.length - 1 ? '1px solid' : 'none',
              borderColor: 'divider',
            }}>
              {/* left column with times */}
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
              
              {/* mapping slots row by row */}
              {DAYS.map((day, dayIdx) => {
                {/*event - assigned when event found with same day and slot number as the current selected grid slot*/}
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
                    {/* if event assigned, cell created, else empty cell */}
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
