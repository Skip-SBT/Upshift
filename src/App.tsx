import './styles/index.scss';
import React from 'react';
import {ThemeProvider} from '@mui/material';
import theme from './theme';
import Navigation from './Components/Navigation';
import ShowCase from './Components/ShowCase';
import OfferContent from './Components/OfferContent';
import Box from '@mui/material/Box';
import InfoBlock from './Components/InfoBlock';
import AboutUs from './Components/AboutUs';
import Comments from './Components/Comments';
import Footer from "./Components/Footer";

export default function App() {
    return (
        <ThemeProvider theme={theme}>
            <Box className="app">
                <Navigation/>
                <ShowCase/>
                <OfferContent/>
                <InfoBlock/>
                <AboutUs/>
                <Comments/>
                <Footer/>
            </Box>
        </ThemeProvider>
    );
}

