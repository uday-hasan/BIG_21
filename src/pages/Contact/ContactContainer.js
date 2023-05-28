import { Box, Stack, Typography } from '@mui/material'
import React from 'react'
import Form from './Form'
import Links from './Links'

const ContactContainer = () => {
    return (
        <Stack alignItems={'center'} mt={2} >
            <Box>
                <Typography variant='h4'>CONTACT</Typography>
                <Typography variant='h5'>GET IN TOUCH</Typography>
            </Box>
            <Stack direction={'row'} spacing={5} p={4} sx={{ width: '100%' }} alignItems={'center'} >
                <Box sx={{ flex: 1 }}><Links /></Box>
                <Box sx={{ flex: 2 }}><Form /></Box>
            </Stack>
        </Stack>
    )
}

export default ContactContainer