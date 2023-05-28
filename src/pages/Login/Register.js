import { Box, Button, Stack, TextField, Typography, useTheme } from '@mui/material';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../Context/AuthContext';

const Register = () => {
    const theme = useTheme()
    const bg = `linear-gradient(120deg, ${theme.palette.primary.final}, ${theme.palette.primary.initial})`
    const [disable, setDisable] = useState(false)
    const { createUser } = useContext(UserContext)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        createUser(email, password)
    }
    return (
        <Box sx={{ minHeight: '80vh', width: '50%', float: 'right', '::after': { clear: 'both' }, background: bg }}>
            <Typography component='h1' variant='' h1 sx={{ textAlign: 'center', margin: '0.8em 0' }}>
                SignUp
            </Typography>
            <Stack spacing={2} sx={{ alignItems: 'center' }} component={'form'} onSubmit={handleSubmit}>
                <TextField name='name' label="Your Name" type={'text'} variant="outlined" />
                <TextField name='username' label="Your Username" type={'text'} variant="outlined" />
                <TextField name='email' label="Your Email" variant="outlined" type={'email'} />
                <TextField name='password' label="Your Password" variant="outlined" type={'password'} />
                <Button variant='contained' type='submit' disabled={disable}>Sign Up</Button>

            </Stack>
        </Box >
    );
};

export default Register;