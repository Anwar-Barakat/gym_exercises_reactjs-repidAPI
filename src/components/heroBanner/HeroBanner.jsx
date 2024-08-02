import { Box, Stack, Typography, Button } from "@mui/material";
import heroBannerImage from '../../assets/images/banner.png';

const HeroBanner = () => {
    return (
        <Box
            sx={{
                mt: { lg: '13.25rem', xs: '4.375rem' },
                ml: { sm: '3.125rem' },
                position: 'relative',
                p: '1.25rem'
            }}
        >
            <Typography
                color="#FF2625"
                fontWeight="600"
                fontSize="1.625rem"
            >
                Fitness Club
            </Typography>
            <Typography
                fontWeight={700}
                sx={{
                    fontSize: { lg: '2.75rem', xs: '2.5rem' },
                    mt: '1.875rem',
                    mb: '1.4375rem'
                }}
            >
                Sweat, Smile <br />
                And Repeat
            </Typography>
            <Typography
                fontSize="1.375rem"
                fontFamily="Alegreya"
                lineHeight="2.1875rem"
                mb="1rem"
            >
                Check out the most effective exercises personalized to you
            </Typography>
            <Stack>
                <Button
                    href="#exercises"
                    sx={{
                        background: '#FF2625',
                        color: 'white',
                        maxWidth: '14rem',
                        height: '3.125rem',
                        fontSize: '1.375rem',
                        borderRadius: '0.25rem',
                        textTransform: 'none',
                        '&:hover': {
                            background: '#FF5555', // Slight color change on hover for better UX
                        }
                    }}
                >
                    Explore Exercises
                </Button>
            </Stack>
            <Typography
                fontWeight={600}
                color="#FF2625"
                sx={{
                    opacity: '0.1',
                    display: { lg: 'block', xs: 'none' },
                    fontSize: '12.5rem',
                }}
            >
                Exercise
            </Typography>
            <img
                src={heroBannerImage}
                alt="hero-banner"
                className="hero-banner-img"
            />
        </Box>
    );
}

export default HeroBanner;
