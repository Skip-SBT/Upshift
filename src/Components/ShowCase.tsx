import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

export default function ShowCase() {
    return (
        <Box className='show-case-container'>
            <Box className='title'>
                <Typography variant='h1' >
                    <span>Consulting.</span>
                    <span>Coaching.</span>
                    <span>Training.</span>
                </Typography>
            </Box>
            <Box className='description'>
                <Typography variant='h5'>
                        Wir unterstützen ganzheitlich bei der
                        digitalen und kulturellen Transformation –
                        mit einem Fokus auf messbare Ergebnisse,
                        Menschen im Mittelpunkt und praxisnahen,
                        umsetzbaren Lösungen. Wir liefern nicht nur
                        Strategien, sondern begleiten Sie auch bei
                        der konkreten Umsetzung.
                </Typography>
            </Box>
            <Button key={'contact'} variant='contained' color='secondary' className='info-button'>
                    Unser Angebot
            </Button>
        </Box>
    );
}
