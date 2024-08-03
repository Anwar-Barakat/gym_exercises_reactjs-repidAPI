import { Box, Button, Stack, TextField, Typography } from "@mui/material"

const SearchExercises = () => {
  return (
    <Stack
      alignItems={'center'}
      mt={37}
      justifyContent={'center'}
      p={20}>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb={50}
        textAlign={'center'}>
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box
        position={'relative'}
        mb={72}>
        <TextField
          placeholder={'Search Exercises'}
          height={78}
          value={''}
          onChange={() => { }}
          type="text"
          sx={{
            input: {
              borderRadius: 4,
              border: 0,
              background: '#fff',
              padding: '10px 20px',
              fontSize: '20px',
              width: {
                lg: '1170px',
                xs: '350px',
              },
              '&:focus': {
                borderColor: 'black',
              },
            },
          }}
        />
        <Button className="search-btn"
          sx={{
            position: 'absolute',
            right: 0,
            top: 0,
            height: '100%',
            background: '#FF2625',
            color: 'white',
            borderRadius: '0 4px 4px 0',
            padding: '0 20px',
            fontSize: '20px',
            textTransform: 'none',
            '&:hover': {
              background: '#FF5555',
            },
          }}

        >Search</Button>
      </Box>
    </Stack>
  )
}

export default SearchExercises
