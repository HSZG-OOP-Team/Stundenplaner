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
        
        background: {
            default: '#f4f6f9', // Das schicke, leicht gräuliche Hintergrund-Blau für die App
            paper: '#ffffff',   // Reines Weiß für eure Stundenplan-Karten (Paper-Komponenten)
        },
        text: {
            primary: '#1e293b',   // Fast Schwarz für normale Texte (besser lesbar als pures #000)
            secondary: '#64748b', // Grauton für Untertitel (z.B. Dozenten-Namen oder Uhrzeiten)
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