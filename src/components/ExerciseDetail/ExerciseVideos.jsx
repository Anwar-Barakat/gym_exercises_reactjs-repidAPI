import { Box, Grid, Typography } from "@mui/material";

const ExerciseVideos = ({ exerciseVideos, name }) => {
  if (!exerciseVideos.length) return 'Loading...';

  return (
    <Box 
      sx={{ 
        marginTop: { lg: '203px', xs: '20px' }, 
        p: '20px' 
      }}
    >
      <Typography 
        variant="h3" 
        sx={{ 
          fontSize: { lg: '44px', xs: '25px' }, 
          fontWeight: 700, 
          color: '#000', 
          mb: '33px' 
        }}
      >
        Watch <span style={{ color: '#FF2625', textTransform: 'capitalize' }}>{name}</span> exercise videos
      </Typography>
      
      <Grid container spacing={3}>
        {exerciseVideos.slice(0, 6).map((item, index) => (
          <Grid 
            item 
            xs={12} 
            sm={6} 
            md={4} 
            key={index}
          >
            <a
              href={`https://www.youtube.com/watch?v=${item.video.videoId}`}
              target="_blank"
              rel="noreferrer"
              style={{ textDecoration: 'none' }}
            >
              <Box 
                sx={{ 
                  borderRadius: '20px', 
                  overflow: 'hidden', 
                  boxShadow: 3 
                }}
              >
                <img 
                  src={item.video.thumbnails[0].url} 
                  alt={item.video.title} 
                  style={{ 
                    width: '100%', 
                    height: 'auto', 
                    display: 'block' 
                  }} 
                />
                
                <Box sx={{ p: 2, backgroundColor: '#fff' }}>
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      fontSize: { lg: '28px', xs: '18px' }, 
                      fontWeight: 600, 
                      color: '#000', 
                      mb: 1 
                    }}
                  >
                    {item.video.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    sx={{ fontSize: '14px', color: '#000' }}
                  >
                    {item.video.channelName}
                  </Typography>
                </Box>
              </Box>
            </a>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default ExerciseVideos;
