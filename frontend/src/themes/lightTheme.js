import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
    palette: {
        primary: {
        main: '#0c6bca',      
        contrastText: '#fff', 
        },
        secondary: {
        main: '#9c27b0',      // Akzent-Lilla
        },

        // Stundenplan / App Farben
        stundenplan: {
            vorlesung: { bg: '#e8f5e9', border: '#4caf50', text: '#1b5e20', chip: '#4caf50' },
            seminar:   { bg: '#fff3e0', border: '#ff9800', text: '#e65100', chip: '#ff9800' },
            ausfall:   { bg: '#ffebee', border: '#f44336', text: '#b71c1c', chip: '#f44336' },
        },
    },
});

export default lightTheme;