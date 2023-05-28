import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../pages/Header/Header';
import Footer from '../pages/Footer/Footer';
import { Stack } from '@mui/material';

const Main = () => {
    return (
        <Stack justifyContent={'space-between'} sx={{ minHeight: '100vh' }}>
            <Header />
            <Outlet />
            <Footer />
        </Stack>
    );
};

export default Main;