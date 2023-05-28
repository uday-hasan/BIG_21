import React from 'react'
import { BsFacebook } from 'react-icons/bs';
import { AiFillMail } from 'react-icons/ai';
import { FiPhoneCall } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@mui/material';

const elements = [
    { text: 'Bangladeshingermany21', icon: BsFacebook, href: 'https://www.facebook.com/bangladeshingermany21/' },
    { text: 'bangladeshingermany@gmail.com', icon: AiFillMail },
    { text: '(+880)1730863487', icon: FiPhoneCall },
]
const Links = () => {
    return (
        <Box >
            {
                elements.map(item => <Box key={item.icon} sx={{ textDecoration: 'none', display: 'flex', alignItems: 'center', padding: '0.5em' }} component={item.href ? Link : Typography}>
                    <Typography sx={{ display: 'flex', alignItems: 'center', marginRight: '1em' }}><item.icon size={25} /></Typography>
                    <Typography>{item.text}</Typography>
                </Box>)
            }
        </Box>
    )
}

export default Links