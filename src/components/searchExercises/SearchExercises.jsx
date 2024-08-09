import { Box, Button, Stack, TextField, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { exerciseOptions, fetchData } from "../../utils/fetchData"
import { HorizontalScrollbar } from "../../components"

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('')
  const [bodyParts, setBodyParts] = useState([])

  useEffect(() => {
    const fetchExercisesData = async () => {
      const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions)

      setBodyParts(['all', ...bodyPartsData])
    }
    fetchExercisesData()
  }, [])

  const handleSearch = async () => {
    if (search) {
      const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);

      const filteredExercises = exercisesData.filter((exercise) => {
        return exercise.name.toLowerCase().includes(search) ||
          exercise.target.toLowerCase().includes(search) ||
          exercise.equipment.toLowerCase().includes(search) ||
          exercise.bodyPart.toLowerCase().includes(search)
      });

      setSearch('')
      setExercises(filteredExercises)
    }
  }

  return (
    <Stack
      alignItems={'center'}
      mt={37}
      justifyContent={'center'}
      p={20}>
      <Typography
        fontWeight={700}
        sx={{ fontSize: { lg: '44px', xs: '30px' } }}
        mb={'50px'}
        textAlign={'center'}>
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box
        position={'relative'}
        mb={'72px'}>
        <TextField
          placeholder={'Search Exercises'}
          height={78}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
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
        <Button
          onClick={handleSearch}
          className="search-btn"
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
      <Box sx={{ position: 'relative', width: '100%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyPart={bodyPart} setBodyPart={setBodyPart} />
      </Box>
    </Stack>
  )
}

export default SearchExercises
