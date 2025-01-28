import Box from '@mui/material/Box';
import React from 'react';
import Typography from '@mui/material/Typography';
import ProfileMarcel from '../images/MarcelMeier.png';
import ProfileRomina from '../images/RominaSuppa.png';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';

export default function AboutUs() {
    return (
        <Box className='about-us-section' id='about-us'>
            <Typography variant='h3' className='info-title'>Über uns</Typography>
            <Box className='about-us-container'>
                <Box className='image-content'>
                    <img src={ProfileMarcel} alt='Marcel Meier' className='profile-image'/>
                    <a className='icon' href='https://www.linkedin.com/in/marcel-meier-swiss/' target="_blank" rel="noreferrer">
                        <LinkedInIcon color="secondary"/>
                    </a>
                    <a className='icon' href='mailto:john@example.com' target="_blank" rel="noreferrer">
                        <EmailIcon color="action"/>
                    </a>
                </Box>
                <Box className='text-content'>
                    <Typography variant='h4' className='about-us-title'>Marcel Meier</Typography>
                    <Typography variant='body1' className='about-us-description'>Mit umfassender Erfahrung in
                        Unternehmensführung,
                        Technologie und Vertrieb bringt Marcel tiefgreifende
                        Expertise in die digitale Transformation und
                        Optimierung von Geschäftsprozessen ein. Ob als Leiter
                        eines Tech-Startups, in Führungspositionen bei
                        Swisscom oder als Wegbereiter innovativer Lösungen
                        im Immobiliensektor – er kombiniert strategische
                        Weitsicht mit operativer Umsetzungsstärke.
                    <br/>
                    <br/>
                        Fokus: Unternehmen zukunftsfähig machen, Effizienz
                        steigern und nachhaltigen Erfolg sichern.</Typography>
                </Box>
                <Box className='text-content'>
                    <Typography variant='h4' className='about-us-title'>Romina Suppa</Typography>
                    <Typography variant='body1' className='about-us-description'>Mit über 10 Jahren Erfahrung in der
                        Produktentwicklung, besonders im Bereich digitaler
                        Plattformen und Immobilien, verbindet Romina
                        strategische Weitsicht mit operativer Exzellenz. Ihr
                        Fokus liegt auf der Entwicklung von Produktvisionen,
                        agilen Methoden und der Optimierung der
                        Nutzererfahrung. Sie hat cross-funktionale Teams
                        geführt und Wachstumsziele erreicht, insbesondere
                        bei Fusionen und großen Veränderungen.
                    <br/>
                    <br/>
                        Ihr Ziel: Unternehmen erfolgreich in der digitalen
                        Transformation zu positionieren.</Typography>
                </Box>
                <Box className='image-content'>
                    <img src={ProfileRomina} alt='Marcel Meier' className='profile-image'/>
                    <a className='icon' href='https://www.linkedin.com/in/romina-suppa-51bb10319/' target="_blank" rel="noreferrer">
                        <LinkedInIcon color="secondary"/>
                    </a>
                    <a className='icon' href='mailto:john@example.com' target="_blank" rel="noreferrer">
                        <EmailIcon color="action"/>
                    </a>
                </Box>
            </Box>
        </Box>
    );
}
