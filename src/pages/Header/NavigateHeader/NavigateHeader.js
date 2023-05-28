import { Box, Button, Typography } from '@mui/material';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import icon from '../../../assests/image/navigateHeaderIcon.png'
import { UserContext } from '../../../Context/AuthContext';
// import { navigating } from '../../../Routing/Routing';

const NavigateHeader = () => {
    const { currentUser, logout } = useContext(UserContext);
    const navigating = [
        {
            path: '', title: 'Home'
        },
        // {
        //     path: 'higherstudy', title: 'Higher study'
        // },
        // {
        //     path: 'language', title: 'Language'
        // },
        // {
        //     path: 'job', title: 'Job'
        // },
        // {
        //     path: 'lifestyle', title: 'LifeStyle'
        // },
        {
            path: 'contact', title: 'Contact'
        },
        {
            path: 'service_product', title: 'Service & Product'
        },
        {
            path: 'about', title: 'About Us'
        },
        {
            path: 'faq', title: 'FAQ'
        },
        {
            path: !currentUser ? 'login/signin' : '', title: !currentUser ? 'Login/Register' : 'Logout'
        },
    ]
    return (
        <Box sx={{ display: 'flex', backgroundColor: '#222222', color: '#ffffff' }}>
            <Box sx={{ display: 'flex', flex: '2', alignItems: 'center', justifyContent: 'center' }}>
                <Typography sx={{ marginRight: '0.6em' }}>Watch BIG Tv</Typography>
                <img width='50px' src={icon} alt="" />
            </Box>
            <Box sx={{ display: 'flex', flex: '3', alignItems: "center", justifyContent: 'space-evenly', color: '#ffffff' }}>
                {
                    navigating.map(item => item.title !== 'Logout' ?
                        <Typography component={Link} sx={{
                            textDecoration: 'none', color: '#ffffff', transition: 'all 0.3s', '&:hover': {
                                color: '#40a9ff'
                            }
                        }} to={item.path} key={item.title}>{item.title}</Typography> : <Button onClick={logout} variant='contained'>{item.title}</Button>)
                }
            </Box>
        </Box>
    );
};

export default NavigateHeader;