import { Stack, Box } from '@mui/material';
import logo from '../../assets/images/Logo.png';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <Stack
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={{
                px: '1.25rem',
                py: '0.625rem',
                mt: { sm: '2rem', xs: '1.25rem' },
                gap: { sm: '7.6875rem', xs: '2.5rem' },
            }}
        >
            <Link to="/" aria-label="Home">
                <Box component="img" src={logo} alt="Logo" sx={{ width: '3rem', height: '3rem' }} />
            </Link>
            <Stack
                direction="row"
                spacing={4}
                sx={{
                    fontFamily: 'Alegreya',
                    fontSize: '1.5rem',
                    alignItems: 'flex-end',
                    textAlign: 'center',
                }}
            >
                <Link
                    to="/"
                    style={{ 
                        textDecoration: 'none', 
                        color: '#3A1212',
                        borderBottom: '0.1875rem solid #FF2625',
                        paddingBottom: '0.25rem', // Added padding for better click area
                    }}
                >
                    Home
                </Link>
                <a
                    href="#exercises"
                    style={{
                        textDecoration: 'none',
                        color: '#3A1212',
                        paddingBottom: '0.25rem', // Added padding for consistency
                    }}
                >
                    Exercises
                </a>
            </Stack>
        </Stack>
    );
}

export default Navbar;
