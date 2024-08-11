import bodyPartImage from "../../assets/icons/body-part.png";
import targetImage from "../../assets/icons/target.png";
import equipmentImage from "../../assets/icons/equipment.png";
import { Button, Stack, Typography, Box } from "@mui/material";

const Detail = ({ exerciseDetail }) => {
  const { bodyPart, gifUrl, name, target, equipment } = exerciseDetail;

  const extraDetail = [
    { icon: bodyPartImage, name: bodyPart },
    { icon: targetImage, name: target },
    { icon: equipmentImage, name: equipment },
  ];

  return (
    <Stack 
      gap="60px" 
      sx={{ 
        flexDirection: { lg: 'row', xs: 'column' }, 
        p: '20px', 
        alignItems: 'center' 
      }}
    >
      <Box sx={{ width: { lg: '50%', xs: '100%' } }}>
        <img 
          src={gifUrl} 
          alt={name} 
          loading="lazy"
          className="detail-image" 
          style={{ 
            width: '100%', 
            borderRadius: '10px' 
          }} 
        />
      </Box>
      
      <Stack 
        sx={{ 
          gap: { lg: '35px', xs: '20px' }, 
          maxWidth: { lg: '50%', xs: '100%' }, 
          textAlign: { xs: 'center', lg: 'left' } 
        }}
      >
        <Typography 
          sx={{ fontSize: { lg: '64px', xs: '30px' } }} 
          fontWeight={700} 
          textTransform="capitalize"
        >
          {name}
        </Typography>
        
        <Typography 
          sx={{ fontSize: { lg: '24px', xs: '18px' }, color: '#4F4C4C' }}
        >
          Exercises keep you strong. <span style={{ textTransform: 'capitalize' }}>{name}</span> is one of the best exercises to target your {target}. It will help you improve your mood and gain energy.
        </Typography>
        
        {extraDetail.map((item, index) => (
          <Stack 
            key={index} 
            direction="row" 
            gap="24px" 
            alignItems="center"
            sx={{ 
              justifyContent: { xs: 'center', lg: 'flex-start' } 
            }}
          >
            <Button 
              sx={{ 
                background: '#FFF2DB', 
                borderRadius: '50%', 
                width: '100px', 
                height: '100px', 
                display: 'flex', 
                justifyContent: 'center', 
                alignItems: 'center' 
              }}
            >
              <img 
                src={item.icon} 
                alt={item.name} 
                style={{ width: '50px', height: '50px' }} 
              />
            </Button>
            <Typography 
              textTransform="capitalize" 
              sx={{ fontSize: { lg: '30px', xs: '20px' } }}
            >
              {item.name}
            </Typography>
          </Stack>
        ))}
      </Stack>
    </Stack>
  );
};

export default Detail;
