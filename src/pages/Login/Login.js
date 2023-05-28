import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import React, { useContext, useState } from 'react';
import { UserContext } from '../../Context/AuthContext';
import { useTheme } from '@emotion/react';

const Login = () => {
    const theme = useTheme()
    const bg = `linear-gradient(60deg, ${theme.palette.primary.initial}, ${theme.palette.primary.final})`
    const [disable, setDisable] = useState(false)
    const path = window.document.URL.split("/login")[1];
    const { loginUser } = useContext(UserContext)
    const handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const username = e.target.username.value;
        const email = e.target.email.value;
        const password = e.target.password.value;
        loginUser(email, password)
        // console.log(name, username, email, password);
    }
    return (
        <Box sx={{ width: '50%', minHeight: '80vh', float: 'left', '::after': { clear: 'both' }, background: bg }}>
            <Typography component='h1' variant='' h1 sx={{ textAlign: 'center', margin: '0.8em 0' }}>
                SignIn
            </Typography>
            <Stack spacing={2} sx={{ alignItems: 'center', width: '100%' }} component={'form'} onSubmit={handleSubmit}>
                <TextField name='username' label="Username" type={'text'} variant="outlined" />
                <TextField name='email' label="Your Email" variant="outlined" type={'email'} />
                <TextField name='password' label="Your Password" variant="outlined" type={'password'} />
                <Button variant='contained' sx={{}} type='submit' disabled={disable}>Sign Up</Button>
            </Stack>
        </Box >
    );
};

export default Login;