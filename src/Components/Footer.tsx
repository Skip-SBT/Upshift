import React from "react";
import {Facebook, Instagram, YouTube} from "@mui/icons-material";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import Box from "@mui/material/Box";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="footer-left">Site name</div>

            <div className="footer-links">
                <Box className='footer-row'>
                    <div className="footer-column">
                        <div className="footer-topic">Topic</div>
                        <a href="#" className="footer-page">Page</a>
                        <a href="#" className="footer-page">Page</a>
                        <a href="#" className="footer-page">Page</a>
                    </div>
                    <div className="footer-column">
                        <div className="footer-topic">Topic</div>
                        <a href="#" className="footer-page">Page</a>
                        <a href="#" className="footer-page">Page</a>
                        <a href="#" className="footer-page">Page</a>
                    </div>
                    <div className="footer-column">
                        <div className="footer-topic">Topic</div>
                        <a href="#" className="footer-page">Page</a>
                        <a href="#" className="footer-page">Page</a>
                        <a href="#" className="footer-page">Page</a>
                    </div>
                </Box>
            </div>
            <div className="footer-social">
                <a href="#"><Facebook/></a>
                <a href="#"><LinkedInIcon/></a>
                <a href="#"><YouTube/></a>
                <a href="#"><Instagram/></a>
            </div>
        </footer>
    )
        ;
}
