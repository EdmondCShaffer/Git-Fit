import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HorizontalScrollbar from './HorizontalScrollbar';
import Loader from './Loader';



interface Exercise {
    id: string;
}

interface SimilarExercisesProps {
    targetMuscleExercises: Exercise[];
    equipmentExercises: Exercise[];
    refetchExerciseData: () => void;
}

const SimilarExercises: React.FC<SimilarExercisesProps> = ({ targetMuscleExercises, equipmentExercises, refetchExerciseData }) => {
    const handleClick = (exerciseId: string) => {
      refetchExerciseData()
   // filter out any exerciese with same id as one shown in details
    };

    return (
        <Box sx={{ mt: { lg: '100px', xs: '0' } }}>
            <Typography variant='h2' component='h2' gutterBottom>
                Exercises that target the same muscle group
            </Typography>
            <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
                {targetMuscleExercises ? (
                    targetMuscleExercises.length > 0 ? (
                        <HorizontalScrollbar onClick={handleClick} data={targetMuscleExercises} bodyPart={''} setBodyPart={function (bodyPart: string): void {
                            throw new Error('Function not implemented.');
                        } } isBodyParts={false} />
                    ) : (
                        <Typography>No exercises found for this category.</Typography>
                    )
                ) : (
                    <Loader />
                )}
            </Stack>
            <Typography variant='h2' component='h2' gutterBottom>
                Exercises that use the same equipment
            </Typography>
            <Stack direction="row" sx={{ p: '2', position: 'relative' }}>
                {equipmentExercises ? (
                    equipmentExercises.length > 0 ? (
                        <HorizontalScrollbar onClick={handleClick} data={equipmentExercises} bodyPart={''} setBodyPart={function (bodyPart: string): void {
                            throw new Error('Function not implemented.');
                        } } isBodyParts={false} />
                    ) : (
                        <Typography>No exercises found for this category.</Typography>
                    )
                ) : (
                    <Loader />
                )}
            </Stack>
        </Box>
    );
};

export default SimilarExercises;