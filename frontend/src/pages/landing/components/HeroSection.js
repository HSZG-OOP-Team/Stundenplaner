import React from 'react';
import { Box, Button, Typography, Stack, Container } from '@mui/material';
import LoginIcon from '@mui/icons-material/Login';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AppButton from '../../../components/AppButton';

export default function HeroSection({ isLoggedIn, onNavigate }) {
    return (
        // controlling max size with container ig.
       <Container maxWidth="md">
            <Stack spacing={4} sx={{ textAlign: 'center', py: { xs: 8, sm: 12 }, alignItems: 'center' }}>
                <Typography variant="h2" component="h1" sx={{ fontWeight: 800, color: 'text.primary' }}>
                    Dein Semester. <br />
                    <Box component="span" sx={{ color: 'primary.main' }}>Perfekt geplant.</Box>
                </Typography>

                <Typography variant="h5" color="text.secondary" sx={{ maxWidth: '600px' }}>
                   Schnauze voll von unpassenden Stundenplänen und organisatorischen Chaos. [Name den ich nicht weiß] machts möglich. Ein zentraler Stundenplan verwaltet von Profs. und Studenten für ein "low cortisol" Studium.
                </Typography>

                {isLoggedIn ? (
                <AppButton 
                    text="Zum Dashboard wechseln"
                    variant="contained" 
                    size="large" 
                    endIcon={<DashboardIcon />}
                    onClick={onNavigate}
                    sx={{ px: 4, py: 1.5, borderRadius: 2, textTransform: 'none', fontSize: '1.1rem' }}
                />
                ) : (
                <AppButton 
                    text="Jetzt einloggen / registrieren"
                    variant="contained" 
                    size="large" 
                    endIcon={<LoginIcon />}
                    onClick={onNavigate}
                    sx={{ px: 4, py: 1.5, borderRadius: 2, textTransform: 'none', fontSize: '1.1rem' }}
                />
                )}
            </Stack>
       </Container>
    );
}