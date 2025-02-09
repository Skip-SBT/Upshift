import {createTheme} from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#000000',
        },
        secondary: {
            main: '#9abefd',
        },
        link: {
            main: '#ffffff',
        },
    },
    typography: {
        fontFamily: 'Calibri, sans-serif',
        h1: {
            fontSize: 70,
        },
        h2: {
            fontSize: 60,
        },
        h3: {
            fontSize: 50,
        },
        h4: {
            fontSize: 40,
        },
        h5: {
            fontSize: 25,
        },
        body1: {
            fontSize: 25,
        },
        body2: {
            fontSize: 20,
        },

    },
    components: {
        MuiLink: {
            styleOverrides: {
                root: ({theme}) => ({
                    textDecoration: 'none',
                    color: theme.palette.link.main,
                    fontWeight: 'bold',
                    fontStyle: 'italic',
                }),
            },
        },
        MuiDrawer: {
            styleOverrides: {
                paper: ({theme}) => ({
                    backgroundColor: theme.palette.primary.main,
                    color: theme.palette.secondary.main,
                }),
            },
        },
        MuiListItem: {
            styleOverrides: {
                root: ({theme}) => ({
                    '& .MuiListItemText-primary': {
                        color: theme.palette.link.main,
                        fontWeight: 'bold',
                    },
                    '&:hover': {
                        backgroundColor: theme.palette.secondary.main,
                        color: theme.palette.primary.main,
                        '& .MuiListItemText-primary': {
                            color: theme.palette.primary.main,
                        },
                    },
                    textDecoration: 'none',
                }),
            },
        },
        MuiListItemText: {
            styleOverrides: {
                primary: {
                    fontWeight: 'bold',
                },
            },
        },
    },
});

export default theme;
