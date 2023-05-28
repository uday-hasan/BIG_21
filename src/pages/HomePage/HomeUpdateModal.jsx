import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button, Stack, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export default function HomeUpdateModal({ open, handleOpen, handleClose, title }) {
    const theme = useTheme()

    return (
        <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" color={theme.palette.primary.main} fontWeight={'bold'} fontSize={20}>
                        The page <u>{title}</u> is under construction. Please contact us.
                    </Typography>
                    <Stack id="modal-modal-description" sx={{ mt: 2 }} direction={'row'} spacing={2}>
                        <Button component={Link} to='/contact' variant='contained' >CONTACT US</Button>
                        <Button variant='contained' onClick={handleClose} >CLOSE</Button>
                    </Stack>
                </Box>
            </Modal>
        </div>
    );
}