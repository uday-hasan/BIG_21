import { Box, Typography, useTheme } from '@mui/material'
import React from 'react'
import { AiOutlineCopyrightCircle } from 'react-icons/ai'

const Footer = () => {
    const theme = useTheme()
    // const bg = 'linear-gradient(45deg, #0F2027, #203A43, #2C5364)'
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '2em', background: theme.palette.primary.main, color: '#ffffff' }}>
            <Typography sx={{ fontWeight: 'bold', display: 'flex', alignItems: 'center', }}><AiOutlineCopyrightCircle size={22} /> COPYRIGHT BY BIG21</Typography>
        </Box>
    )
}

export default Footer