import { createTheme } from '@mui/material/styles';

const darkTheme = createTheme({
    palette: {
        mode: 'dark', // This is crucial for Material-UI to apply dark mode specifics
        primary: {
            main: '#90caf9',      // Light blue for dark mode primary
            contrastText: '#000', // Black contrast text for light primary
        },
        secondary: {
            main: '#ce93d8',      // Light purple for dark mode secondary
        },
        background: {
            default: '#121212', // Dark background
            paper: '#1e1e1e',   // Slightly lighter dark paper background
        },
        text: {
            primary: '#e0e0e0',   // Light gray primary text
            secondary: '#a0a0a0', // Medium gray secondary text
        },

        // UI helpers
        divider: '#424242', // Darker divider
        action: {
            hover: 'rgba(144, 202, 249, 0.08)' // Light blue hover for dark mode
        },

        // Stundenplan / App Farben for dark mode
        stundenplan: {
            vorlesung: { bg: '#2e7d32', border: '#66bb6a', text: '#c8e6c9', chip: '#66bb6a' },
            seminar:   { bg: '#d35400', border: '#f77f00', text: '#ffe0b2', chip: '#f77f00' },
            ausfall:   { bg: '#c62828', border: '#ef5350', text: '#ffcdd2', chip: '#ef5350' },
        },
    },
});

export default darkTheme;
