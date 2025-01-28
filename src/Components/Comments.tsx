import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Avatar from '@mui/material/Avatar';
import Slider from 'react-slick';
import {motion} from 'framer-motion';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

interface Testimonial {
    text: string;
    name: string;
    description: string;
    avatar: string;
}

const testimonials: Testimonial[] = [
    {
        text: 'A terrific piece of praise',
        name: 'Marcel Meier',
        description: 'CEO, Tech Company',
        avatar: 'https://randomuser.me/api/portraits/men/2.jpg',
    },
    {
        text: 'A fantastic bit of feedback',
        name: 'Romina Suppa',
        description: 'Marketing Head',
        avatar: 'https://randomuser.me/api/portraits/men/1.jpg',
    },
    {
        text: 'A genuinely glowing review',
        name: 'Michael Brown',
        description: 'CTO, Startup',
        avatar: 'https://randomuser.me/api/portraits/men/3.jpg',
    },
    {
        text: 'Outstanding service and great experience!',
        name: 'Sophia Müller',
        description: 'Product Manager',
        avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
    {
        text: 'Outstanding service and great experience!',
        name: 'Sophia Müller',
        description: 'Product Manager',
        avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
    {
        text: 'Outstanding service and great experience!',
        name: 'Sophia Müller',
        description: 'Product Manager',
        avatar: 'https://randomuser.me/api/portraits/women/5.jpg',
    },
];

const settings = {
    infinite: true,
    speed: 2000,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    rtl: true,
    arrows: false,
    responsive: [
        {
            breakpoint: 2024,
            settings: {slidesToShow: 2, slidesToScroll: 1},
        },
        {
            breakpoint: 1068,
            settings: {slidesToShow: 1, slidesToScroll: 1},
        },
    ],
};
export default function Comments() {
    return (
        <Box className="comments-section" id="comments">
            <Typography variant="h3" className="comments-title">
                Was über uns gesagt wird
            </Typography>
            <Box className="comments-container">
                <Slider {...settings} className="comments-slider">
                    {testimonials.map((item, index) => (
                        <motion.div key={index} whileHover={{scale: 1.05}} className="card-wrapper">
                            <Card className="testimonial-card">
                                <CardContent>
                                    <Box className="testimonial-text-container">
                                        <Typography variant="h5" className="testimonial-text" gutterBottom>
                                            "{item.text}"
                                        </Typography>
                                    </Box>
                                    <Box className="testimonial-user">
                                        <Avatar src={item.avatar} className="testimonial-avatar"/>
                                        <Box>
                                            <Typography className="testimonial-name" variant={'body1'}>
                                                {item.name}
                                            </Typography>
                                            <Typography className="testimonial-description" variant={'body1'}>
                                                {item.description}
                                            </Typography>
                                        </Box>
                                    </Box>
                                </CardContent>
                            </Card>
                        </motion.div>

                    ))}
                </Slider>
            </Box>
        </Box>
    );
}
