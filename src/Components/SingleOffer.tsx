import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

interface SingleOfferProps {
    title: string;
    imageSrc: string;
    description: string;
    dropdownText: string;
    buttonLabel: string;
}

export default function SingleOffer({
    title,
    imageSrc,
    description,
    dropdownText,
    buttonLabel,
}: SingleOfferProps) {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    const toggleDropdown = () => {
        setIsDropdownOpen((prev) => !prev);
    };

    return (
        <Box className="offer-item">
            <Typography variant="h5" component="h2" className="offer-title">
                {title}
            </Typography>
            <img src={imageSrc} alt={title} className="offer-image"></img>
            <Typography variant="body1" className="offer-description">
                {description}
            </Typography>
            <Box className="offer-dropdown">
                <Button
                    variant="text"
                    color="primary"
                    className="offer-dropdown-button"
                    onClick={toggleDropdown}
                >
                    {isDropdownOpen ? 'Weniger anzeigen' : 'Module ansehen >'}
                </Button>
                {isDropdownOpen && (
                    <Typography variant="body2" className="offer-dropdown-text">
                        {dropdownText}
                    </Typography>
                )}
            </Box>
            <Button variant="contained" color="secondary" className="offer-button">
                {buttonLabel}
            </Button>
        </Box>
    );
}
