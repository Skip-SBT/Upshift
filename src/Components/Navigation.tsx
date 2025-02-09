import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Logo from '../images/logo.png';
import LanguageSwitcher from "./LanguageSwitcher";

const pages = [
    {name: 'Home', id: 'home'},
    {name: 'Angebote', id: 'offer'},
    {name: 'Was uns ausmacht', id: 'info'},
    {name: 'Über uns', id: 'about-us'},
    {name: 'Kontakt', id: 'kontakt'},
];

const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
        section.scrollIntoView({behavior: 'smooth', block: 'start'});
    }
};
export default function Navigation() {
    const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(null);

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
        setAnchorElNav(event.currentTarget);
    };

    const handleCloseNavMenu = () => {
        setAnchorElNav(null);
    };

    return (
        <AppBar position="static" className="app-bar">
            <Container className='app-container'>
                <Toolbar disableGutters>
                    <Typography variant="h6" className="logo-md">
                        <img src={Logo} alt="Logo" className="logo-image"/>
                    </Typography>

                    <Box className="mobile-menu-section">
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"
                            onClick={handleOpenNavMenu}
                            className="hamburger-menu"
                        >
                            <MenuIcon/>
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorElNav}
                            anchorOrigin={{
                                vertical: 'bottom',
                                horizontal: 'right',
                            }}
                            keepMounted
                            transformOrigin={{
                                vertical: 'top',
                                horizontal: 'left',
                            }}
                            open={Boolean(anchorElNav)}
                            onClose={handleCloseNavMenu}
                            className="mobile-menu"
                        >
                            {pages.map((page) => (
                                <MenuItem
                                    key={page.id}
                                    onClick={() => {
                                        handleScroll(page.id);
                                        handleCloseNavMenu();
                                    }}
                                    className="mobile-menu-item"
                                >
                                    <Typography className="mobile-menu-text" variant='body1'>{page.name}</Typography>
                                </MenuItem>
                            ))}
                        </Menu>
                    </Box>

                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="#app-bar-with-responsive-menu"
                        className="logo-xs"
                    >
                        <img src={Logo} alt="Logo" className="logo-image-mobile"/>
                    </Typography>
                    <LanguageSwitcher/>

                    <Box className="nav-pages-section">
                        {pages.map((page) => (
                            <Button
                                key={page.id}
                                onClick={() => {
                                    handleScroll(page.id);
                                    handleCloseNavMenu();
                                }}
                                className="nav-page-button"
                            >
                                {page.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
