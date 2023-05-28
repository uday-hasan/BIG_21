import { Box } from '@mui/material';
import React from 'react';
import AboutHeader from './AboutHeader/AboutHeader';
import NavigateHeader from './NavigateHeader/NavigateHeader';

const Header = () => {
    return (
        <Box sx={{ position: 'sticky', top: '0', zIndex: 1000 }}>
            <AboutHeader />
            <NavigateHeader />
        </Box>
    );
};

export default Header;