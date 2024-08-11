import PropTypes from 'prop-types';
import { Box, Pagination, Stack, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { exerciseOptions, fetchData } from "../../utils/fetchData";
import ExerciseCard from "../ExerciseCard/ExerciseCard";

const Exercises = ({ exercises = [], bodyPart, setExercises }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [exercisesPerPage] = useState(6);

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
    }, [bodyPart, setExercises]);

    // Ensure exercises is an array
    const currentExercises = Array.isArray(exercises) ? exercises.slice((currentPage - 1) * exercisesPerPage, currentPage * exercisesPerPage) : [];

    const paginate = (event, value) => {
        setCurrentPage(value);
    };

    return (
        <Box id="exercises" sx={{ mt: { lg: '110px' } }} mt={'50px'} px={20}>
            <Typography variant="h4" fontWeight="bold" sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="46px">
                Showing Results
            </Typography>
            <Stack direction="row" sx={{ gap: { lg: '107px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
                {
                    currentExercises.length > 0 ? (
                        currentExercises.map((exercise) => (
                            <ExerciseCard key={exercise.id} exercise={exercise} />
                        ))
                    ) : (
                        <Typography>No exercises found</Typography>
                    )
                }
            </Stack>
            <Stack mt={'100px'} alignItems={'center'}>
                {/* For pagination */}
                {
                    Array.isArray(exercises) && exercises.length > exercisesPerPage && (
                        <Pagination
                            color="standard"
                            shape="rounded"
                            defaultPage={1}
                            count={Math.ceil(exercises.length / exercisesPerPage)}
                            page={currentPage}
                            onChange={paginate}
                            size="large"
                        />
                    )
                }
            </Stack>
        </Box>
    );
};

Exercises.propTypes = {
    exercises: PropTypes.arrayOf(PropTypes.object),
    bodyPart: PropTypes.string.isRequired,
    setExercises: PropTypes.func.isRequired,
};

export default Exercises;
