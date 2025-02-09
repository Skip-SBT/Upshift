import Box from '@mui/material/Box';
import React from 'react';
import OfferList from './OfferList';
import Typography from '@mui/material/Typography';

import OfferImage1 from '../images/offerImages/scale.jpg';
import OfferImage2 from '../images/offerImages/people.jpg';
import OfferImage3 from '../images/offerImages/paper.jpg';
import OfferImage4 from '../images/offerImages/tennis.jpg';

const offers = [
    {
        title: 'Strategie Implementierung',
        imageSrc: OfferImage1,
        description: 'Ihre Strategie, unsere Begleitung: Wir unterstützen Sie bei der erfolgreichen Umsetzung -von der Planung bis zur Innovation.',
        dropdownText: 'Zusätzliche Informationen über die Module und Strategieoptionen.',
        buttonLabel: 'Anfragen',
    },
    {
        title: 'Kultur & Organisation',
        imageSrc: OfferImage2,
        description: 'Gemeinsam schaffen wir zukunftsfähige Strukturen, definieren klare Werte und gestalten lebendige Unternehmenskulturen.',
        dropdownText: 'Zusätzliche Informationen zu Kultur und Organisation.',
        buttonLabel: 'Anfragen',
    },
    {
        title: 'Verkauf - Nachfolgeregelung',
        imageSrc: OfferImage3,
        description: 'Wir begleiten Sie bei der Wertoptimierung Ihrer Firma - dur' +
            'ch digitale Transformation und Kulturentwicklung und machen sie fit für die Zukunft.',
        dropdownText: 'Zusätzliche Informationen über Verkauf und Nachfolgeregelung.',
        buttonLabel: 'Anfragen',
    },
    {
        title: 'Workshop und Schulungen',
        imageSrc: OfferImage4,
        description: 'Wir schulen mit echten Praxisbeispielen aus Ihrer Firma zu folgenden Themen' +
            ': digitale Tools, agile Arbeitsmethodiken (Scrum), Design Thinking, OKRs, Priorisierung strategischer Initiativen, etc.',
        dropdownText: 'Zusätzliche Informationen über Workshops und Schulungen.',
        buttonLabel: 'Anfragen',
    },
];

export default function OfferContent() {
    return (
        <Box className='offer-content' id="offer">
            <Typography variant='h3' className='offer-content-title'>
                Angebot
            </Typography>

            <OfferList offers={offers}/>
        </Box>
    );
}
