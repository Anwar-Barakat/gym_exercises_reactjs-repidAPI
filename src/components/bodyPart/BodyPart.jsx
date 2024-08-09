import { Stack, Typography } from "@mui/material";
import icon from "../../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            onClick={() => {
                setBodyPart(item)
                window.scrollTo({ top: 1800, left: 100,behavior: 'smooth' })
            }}
            role="button"
            aria-label={`Select ${item}`}
            sx={{
                borderTop: bodyPart === item ? '3px solid #ff2625' : 'none',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '3rem',
            }}
        >
            <img src={icon} alt={`${item} icon`} style={{ width: '40px', height: '40px' }} />
            <Typography variant="h6" sx={{ color: '#3a1212' }} fontWeight={'bold'} textTransform={'capitalize'}>{item}</Typography>
        </Stack>
    );
};

export default BodyPart;
