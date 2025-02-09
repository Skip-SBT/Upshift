import React from 'react';
import Box from '@mui/material/Box';
import SingleOffer from './SingleOffer';

interface Offer {
    title: string;
    imageSrc: string;
    description: string;
    dropdownText: string;
    buttonLabel: string;
}

interface OfferListProps {
    offers: Offer[];
}

export default function OfferList({ offers }: OfferListProps) {
    return (
        <Box className="offer-list">
            {offers.map((offer) => (
                <SingleOffer
                    title={offer.title}
                    imageSrc={offer.imageSrc}
                    description={offer.description}
                    dropdownText={offer.dropdownText}
                    buttonLabel={offer.buttonLabel}
                />
            ))}
        </Box>
    );
}
