import { Box, Stack, Typography } from "@mui/material"
import { useEffect } from "react"
import { exerciseOptions, fetchData } from "../../utils/fetchData";

const Exercises = ({ exercises, bodyPart, setExercises }) => {
    console.log(exercises, bodyPart, setExercises);
    
    useEffect(() => {
        const fetchExercisesData = async () => {
          let exercisesData = [];
    
          if (bodyPart === 'all') {
            exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises', exerciseOptions);
          } else {
            exercisesData = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}`, exerciseOptions);
          }
    
          setExercises(exercisesData);
        };
    
        fetchExercisesData();
      }, [bodyPart]);
    return (
        <Box id="exercises" sx={{ mt: { lg: '110px' } }} mt={50} p={20}>
            <Typography variant="">
                Showing Results
            </Typography>
            <Stack direction="row" spacing={2} mt={5}>
                {exercises.map((exercise) => (
                    <Typography>{exercise.name}</Typography>
                ))}
            </Stack>
        </Box >
    )
}

export default Exercises
