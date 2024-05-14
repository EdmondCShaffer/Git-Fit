import React, { useEffect, useState } from 'react';
import { Box, Stack, Typography, Pagination } from '@mui/material';
import ExerciseCard from './ExerciseCard';
import { fetchData, exerciseOptions } from '../utils/fetchData';

interface Exercise {
    id: string;
    name: string;
    target: string;
    equipment: string;
    bodyPart: string;
    gifUrl: string
}

interface ExercisesProps {
    exercises: Exercise[];
    setExercises: React.Dispatch<React.SetStateAction<Exercise[]>>;
    bodyPart: string;
}

const Exercises: React.FC<ExercisesProps> = ({ exercises, setExercises, bodyPart }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const exercisesPerPage = 9;
    const indexOfLastExercise = currentPage * exercisesPerPage;
    const indexOfFirstExercise = indexOfLastExercise - exercisesPerPage;
    const currentExercises = exercises.slice(indexOfFirstExercise, indexOfLastExercise);

    const paginate = (e: React.ChangeEvent<unknown>, value: number) => {
        setCurrentPage(value);
        window.scrollTo({ top: 1800, behavior: 'smooth' });
    };

    useEffect(() => {
        const fetchExercisesData = async () => {
            let fetchedExercises: Exercise[] = [];
            try {
                if (bodyPart === 'all') {
                    fetchedExercises = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=10000', exerciseOptions);
                } else {
                    fetchedExercises = await fetchData(`https://exercisedb.p.rapidapi.com/exercises/bodyPart/${bodyPart}?limit=1000`, exerciseOptions);
                }
                setExercises(fetchedExercises);
            } catch (error) {
                console.error('Error fetching exercises:', error);
            }
        };
        fetchExercisesData();
        setCurrentPage(1)
    }, [bodyPart, setExercises]);



    return (
        <Box id="exercises" sx={{ mt: { lg: '110px' } }} mt="50px" p="20px">
            <Typography variant="h3" mb="46px">
                Showing Results
            </Typography>
            <Stack direction="row" sx={{ gap: { lg: '110px', xs: '50px' } }} flexWrap="wrap" justifyContent="center">
                {currentExercises.map((exercise, index) => (
                    <ExerciseCard key={index} exercise={exercise} />
                ))}
            </Stack>
            <Stack mt="100px" alignItems="center">
                {exercises.length > 9 && (
                    <Pagination
                        color="standard"
                        shape="rounded"
                        defaultPage={1}
                        count={Math.ceil(exercises.length / 9)}
                        page={currentPage}
                        onChange={paginate}
                        size="large"
                    />
                )}
            </Stack>
        </Box>
    );
};

export default Exercises;