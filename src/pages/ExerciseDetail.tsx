import React, {useEffect, useState} from 'react';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import Details from '../components/Details';
import ExerciseVideos from '../components/ExerciseVideos';
import SimilarExercises from '../components/SimilarExercises';

import { exerciseOptions, fetchData, youTubeOptions } from '../utils/fetchData';

interface Exercise {
    id: string;
    name: string;
    target: string;
    equipment: string;
    bodyPart: string;
    gifUrl: string;
}

const ExerciseDetail: React.FC = () => {
    const [exerciseDetails, setExerciseDetails] = useState<Exercise | null>(null);
    const [exerciseVideos, setExerciseVideos] = useState<any[]>([]);
    const [targetMuscleExercises, setTargetMuscleExercises] = useState<Exercise[]>([]);
    const [equipmentExercises, setEquipmentExercises] = useState<Exercise[]>([]);
    const { id } = useParams<{ id: string }>();

    const fetchExerciseData = async () => {
        const exerciseDbUrl = 'https://exercisedb.p.rapidapi.com';
        const youTubeSearchUrl = 'https://youtube-search-and-download.p.rapidapi.com';

        const exerciseDetailsData = await fetchData(`${exerciseDbUrl}/exercises/exercise/${id}`, exerciseOptions);
        setExerciseDetails(exerciseDetailsData);

        const exerciseVideoData = await fetchData(`${youTubeSearchUrl}/search?query=${exerciseDetailsData.name}`, youTubeOptions);
        setExerciseVideos(exerciseVideoData.contents);

        const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailsData.target}`,exerciseOptions);
        setTargetMuscleExercises(targetMuscleExercisesData);

        const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailsData.equipment}`,exerciseOptions);
        setEquipmentExercises(equipmentExercisesData);
    };

    useEffect(() => {
        fetchExerciseData();
    }, [id]);

    // const refetchExerciseData = () =>{
        
    //     const exerciseVideoData = await fetchData(`${youTubeSearchUrl}/search?query=${exerciseDetailsData.name}`, youTubeOptions);
    //     setExerciseVideos(exerciseVideoData.contents);

    //     const targetMuscleExercisesData = await fetchData(`${exerciseDbUrl}/exercises/target/${exerciseDetailsData.target}`,exerciseOptions);
    //     setTargetMuscleExercises(targetMuscleExercisesData);

    //     const equipmentExercisesData = await fetchData(`${exerciseDbUrl}/exercises/equipment/${exerciseDetailsData.equipment}`,exerciseOptions);
    //     setEquipmentExercises(equipmentExercisesData);
    // }

    return (
        <Box>
            {exerciseDetails && (
                <>
                    <Details exerciseDetails={exerciseDetails} />
                    <ExerciseVideos exerciseVideos={exerciseVideos} name={exerciseDetails.name} />
                    <SimilarExercises  refetchExerciseData={fetchExerciseData} targetMuscleExercises={targetMuscleExercises} equipmentExercises={equipmentExercises} />
                </>
            )}
        </Box>
    );
};

export default ExerciseDetail;