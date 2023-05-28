import { useTheme } from '@emotion/react';
import { Box, Button, Stack, TextField } from '@mui/material';
import React from 'react';


const Form = () => {
    const theme = useTheme()
    return (
        <Stack component={'form'} spacing={3} >
            <TextField id="outlined-basic" label="NAME" variant="outlined" />
            <TextField id="outlined-basic" label="EMAIL" variant="outlined" />
            <TextField
                id="outlined-basic"
                label="Your Message"
                multiline
                rows={10}
                variant='outlined'
            />
            <Box
            >
                <Button sx={{ '&:hover': { background: theme.palette.primary.main, color: theme.palette.primary.light, transition: 'all 0.3s' } }} variant='outlined'>SUBMIT</Button>
            </Box>
        </Stack>
    );
};

export default Form;