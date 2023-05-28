import { Stack, Typography } from '@mui/material'
import React from 'react'

const Banner = ({ style }) => {
    return (
        <Stack alignItems={'center'} justifyContent={'center'} sx={{ minHeight: '100vh', padding: '1em', background: style.background }}>
            <Typography sx={{}} variant={'h2'} >Your One Stop solution</Typography>
            <Typography variant='h5'>to all the problems during the journey</Typography>
            <Typography variant='h5'>towards Germany</Typography>
        </Stack>
    )
}

export default Banner