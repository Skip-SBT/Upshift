import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';

export default function InfoBlock() {

    let infoData = [
        {
            number: 1,
            title: 'Innovationsorientierte Beratung',
            description: 'Wir denken Beratung neu: Durch\n' +
                'digitale Tools und nachhaltige\n' +
                'Strategien kombinieren wir Innovation\n' +
                'mit greifbaren Ergebnissen'
        },
        {
            number: 2,
            title: 'Hands-on-Ansatz',
            description: 'Wir begleiten Sie nicht nur strate-\n' +
                'gisch, sondern packen mit an – für\n' +
                'schnelle Erfolge und nachhaltige\n' +
                'Transformation'
        },
        {
            number: 3,
            title: 'Mensch-zentrierte Transformation',
            description: 'Wir unterstützen Sie, kulturellen Wan-\n' +
                'del und digitale Transformation durch\n' +
                'gezielte Mitarbeiterentwicklung &\n' +
                'Change-Management zu bewältigen'
        },
        {
            number: 4,
            title: 'Flexibles Beratungsmodell',
            description: 'Flexibel und individuell: Mit einem\n' +
                'Expertennetzwerk und skalierbaren\n' +
                'Paketen passen wir unsere Beratung\n' +
                'genau an Ihre Bedürfnisse an'
        },
        {
            number: 5,
            title: 'Transparenz',
            description: 'Messbare Ergebnisse, klare Kosten:\n' +
                'Mit transparenten Preisen und KPIs\n' +
                'machen wir den Erfolg Ihrer\n' +
                'Transformation greifbar.'
        },
    ];


    return (
        <Box className='info-section'>
            <Typography variant='h3' className='info-title'>Was uns ausmacht</Typography>
            <Box className='info-container'>
                <Box className={'info-boxes'}>
                    {infoData.map((info) => (
                        <Box className='info-box'>
                            <span className='info-box-icon'>{info.number}</span>
                            <Box className='content'>
                                <Typography variant='h5' className='info-box-title'>{info.title}</Typography>
                                <Typography variant='body1'
                                    className='info-box-description'>{info.description}</Typography>
                            </Box>
                        </Box>
                    ))}
                </Box>
            </Box>
        </Box>
    );
}
