import { Box, Stack } from '@mui/material';
import React from 'react';
import { Outlet } from 'react-router-dom';
import LoginHeader from '../pages/Login/LoginHeader';

const LoginLayout = () => {
    return (
        <Stack sx={{ width: '70%', margin: 'auto' }}  >
            <Box><LoginHeader /></Box>
            <Box><Outlet /></Box>
        </Stack>
    );
};

export default LoginLayout;