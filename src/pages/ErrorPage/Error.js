import { Alert, AlertTitle, Box, Button } from '@mui/material';
import React from 'react';
import { Link } from 'react-router-dom';

const Error = () => {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw', height: '100vh' }}>
            <Alert severity="error">
                <AlertTitle>Page not found. Please try again later.</AlertTitle>
                <Button component={Link} variant='text' to='/'><strong>Go to Home</strong></Button>
            </Alert>
        </Box>
    );
};

export default Error;