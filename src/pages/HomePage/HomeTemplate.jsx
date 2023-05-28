import { Box, Button, Stack, Typography, useTheme } from '@mui/material'
import React from 'react'
import { BsCheck2Square } from 'react-icons/bs'
import HomeUpdateModal from './HomeUpdateModal';
const HomeTemplate = ({ title, content, style, bg }) => {
    const theme = useTheme();
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Stack position={'relative'} width={'100%'} sx={{ margin: '10em auto', }}>
            <Typography variant='h1' sx={{ fontSize: '7em', letterSpacing: '0.1em' }} position={'absolute'} width={'100%'} textAlign={'center'} top={'-0.5em'} fontWeight={'bold'} color={theme.palette.primary.main} >{title}</Typography>
            <Box width='70%' sx={{ margin: 'auto' }}>
                <img width={'100%'} src={bg} alt='' />
            </Box>
            <Box position={'absolute'} width={'60%'} bottom='-7%' left={'30%'} sx={{ display: 'flex', padding: '2em', backgroundColor: '#ffffff', justifyContent: 'space-between', alignItems: 'center', borderTopLeftRadius: '1em', borderBottomRightRadius: '1em' }} >
                <Stack component={'ul'} alignItems={''} sx={{ listStyle: 'none' }}>

                    {
                        content.map(item => <Typography key={item} variant='h5' component={'li'} sx={{ display: 'flex', alignItems: 'center', }}><BsCheck2Square /> &nbsp; {item}</Typography>)
                    } </Stack>
                <Box><Button variant='contained' sx={{ borderRadius: "2em", padding: '1.5em' }} onClick={handleOpen} >FIND OUT MORE</Button></Box>
            </Box>
            {
                open && <HomeUpdateModal open={open} handleClose={handleClose} handleOpen={handleOpen} title={title} />
            }
        </Stack>

    )
}

export default HomeTemplate