import React from 'react';
import { NavLink as Link } from 'react-router-dom';
import { Box, useTheme, } from '@mui/material';

const LoginHeader = () => {
    const theme = useTheme();
    const navLinkStyle = ({ isActive }) => {
        return {
            display: 'block',
            textDecoration: isActive ? 'underline' : 'none',
            color: isActive ? theme.palette.primary.light : '#2c324d',
            backgroundColor: isActive ? theme.palette.primary.main : "#ffffffcf",
            padding: '0.7em 2em',
            transition: 'all 0.5s'
        }
    }
    return (
        <Box sx={{ padding: '1em', display: 'flex', justifyContent: 'center' }}>
            <Link style={navLinkStyle} to='/login/signin'>Sign In</Link>
            <Link style={navLinkStyle} to='/login/signup'>Sign Up</Link>
        </Box>
    );
};

export default LoginHeader;