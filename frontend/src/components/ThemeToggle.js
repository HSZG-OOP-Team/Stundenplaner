import React, { useContext } from 'react';
import { IconButton, Tooltip } from '@mui/material';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import Brightness2Icon from '@mui/icons-material/Brightness2';
import ThemeContext from '../ThemeContext';

export default function ThemeToggle() {
  const { isDark, toggleTheme } = useContext(ThemeContext);

  return (
    <Tooltip title={isDark ? 'Dunkles Theme' : 'Helles Theme'}>
      <IconButton size="small" onClick={toggleTheme} sx={{ color: 'inherit' }}>
        {isDark ? <Brightness7Icon fontSize="small" /> : <Brightness2Icon fontSize="small" />}
      </IconButton>
    </Tooltip>
  );
}
