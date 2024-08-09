import { Stack, Typography } from "@mui/material";
import icon from "../../assets/icons/gym.png";

const BodyPart = ({ item, setBodyPart, bodyPart }) => {
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            onClick={() => setBodyPart(item)}
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
            <Typography variant="h6" sx={{ color: '#000' }} fontWeight={'bold'}>{item}</Typography>
        </Stack>
    );
};

export default BodyPart;
