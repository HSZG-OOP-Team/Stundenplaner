import React from 'react';
import { UserButton } from '@clerk/react';
import { AppBar, Toolbar, Typography, Box } from '@mui/material';

export default function DashboardPage() {
    return (
        <MyAppBar />
    );
}

function MyAppBar() {
    return(
        <AppBar position="static" color="primary">
            <Toolbar>
            
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                Stundenplaner
            </Typography>

            <Box sx={{ display: 'flex', alignItems: 'center' }}>
                <UserButton showName appearance={{
                elements: {
                    userButtonOuterIdentifier: {
                    color: '#fff'
                    }
                }
                }} />
            </Box>

            </Toolbar>
        </AppBar>
    );
}