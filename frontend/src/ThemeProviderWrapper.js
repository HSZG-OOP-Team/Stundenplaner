import React, { useState } from 'react';
import { ThemeProvider } from '@mui/material/styles';
import { CssBaseline, GlobalStyles } from '@mui/material';
import lightTheme from './themes/lightTheme';
import darkTheme from './themes/darkTheme';
import ThemeContext from './ThemeContext';

export default function ThemeProviderWrapper({ children }) {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => setIsDark(d => !d);
  const theme = isDark ? darkTheme : lightTheme;

  return (
    <ThemeContext.Provider value={{ isDark, toggleTheme }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <GlobalStyles styles={{ html: { height: '100%' }, body: { minHeight: '100vh', backgroundColor: theme.palette.background.default, color: theme.palette.text.primary } }} />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}
