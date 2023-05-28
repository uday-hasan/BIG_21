import { Box, Stack, Typography, useTheme } from '@mui/material';
import React, { useEffect, useState } from 'react';
import aboutNavIcon from '../../../assests/image/aboutNavbarIcon.png'
import useScroll from '../../../hooks/useScroll/useScroll'
import moment from 'moment-timezone';
const AboutHeader = () => {
    const theme = useTheme()
    //********** Time Zone using moment timezone library
    const timeZone = 'Europe/Berlin'
    const [time, setTime] = useState(moment().tz(timeZone).format('LTS'));
    useEffect(() => {
        const interval = setInterval(() => {
            setTime(moment().tz(timeZone).format('LTS'));
        }, 1000);
        return () => clearInterval(interval);
    }, [timeZone]);
    //**********

    //********** User defined hook for controlling BIG21 logo
    const scrollPosition = useScroll();
    //**********
    return (
        <Box bgcolor={theme.palette.primary.main} color={theme.palette.primary.light} sx={{ display: 'flex', width: '100%', }}>
            <Box sx={{ flex: '1', display: { xs: 'none', md: 'flex' }, justifyContent: 'center', alignItems: 'center' }}>
                <Typography variant='h6'>Dream BIG</Typography>
            </Box>
            <Box sx={{ flex: '1', display: 'flex', justifyContent: 'center', }}>
                <img width={scrollPosition >= 50 ? '70px' : '90px'} src={aboutNavIcon} alt="" style={{ borderRight: scrollPosition >= 50 ? 'solid' : 'none', borderLeft: scrollPosition >= 50 ? 'solid' : 'none', borderRadius: '50%', padding: scrollPosition >= 50 ? '1em' : '0em', transition: 'width 0.4s ease' }} />
            </Box>
            <Stack sx={{ flex: '1', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <Typography>Time in GERMANY</Typography>
                <Box sx={{ fontWeight: 'bold' }}>
                    {time}
                </Box>
            </Stack>

        </Box>
    );
};

export default AboutHeader;