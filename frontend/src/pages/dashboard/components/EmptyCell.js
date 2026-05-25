import React from 'react';
import { Box, Typography } from '@mui/material';

export default function EmptyCell() {
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
