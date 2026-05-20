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
        vorlesung: '#4caf50',
        uebung: '#ff9800',
        ausfall: '#f44336',
        },
    },
});

export default lightTheme;