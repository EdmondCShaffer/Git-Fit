import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';


interface SearchExercisesProps {
    setExercises: React.Dispatch<React.SetStateAction<any[]>>; // Adjust the type according to your actual data structure
    bodyPart: string;
    setBodyPart: React.Dispatch<React.SetStateAction<string>>;
}

const SearchExercises: React.FC<SearchExercisesProps> = ({setExercises, bodyPart, setBodyPart}) => {
    const [search, setSearch] = useState<string>('')
    const [bodyParts, setBodyParts] = useState<string[]>([]);

    useEffect(() => {
        const fetchExercisesData = async () => {
          const bodyPartsData = await fetchData('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
          setBodyParts(['all', ...bodyPartsData]);
        };
    
        fetchExercisesData();
      }, []);
    
      const handleSearch = async () => {
        if (search) {
          const exercisesData = await fetchData('https://exercisedb.p.rapidapi.com/exercises?limit=100000', exerciseOptions);
  
          const searchedExercises = exercisesData.filter(
            (item: { name: string; target: string; equipment: string; bodyPart: string; }) => item.name.toLowerCase().includes(search)
                   || item.target.toLowerCase().includes(search)
                   || item.equipment.toLowerCase().includes(search)
                   || item.bodyPart.toLowerCase().includes(search),
          );

          window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
          
          setSearch('');
          setExercises(searchedExercises);
          
        }
      };

    return (
        <Stack alignItems='center' mt='37px' justifyContent="center" p="20px">
            <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb='50px' textAlign="center">
                Find The Perfect <br /> Exercise For You
            </Typography>
            <Box position="relative" mb="72px">
                <TextField
                    sx={{
                        input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
                        width: { lg: '800px', xs: '350px' },
                        backgroundColor: '#fff',
                        borderRadius: '40px'
                    }}
                    value={search}
                    onChange={(e) => setSearch(e.target.value.toLocaleLowerCase())}
                    placeholder='Search Exercises'
                    type='text'
                />
                <Button className='search-btn' sx={{
                    bgcolor: '#2478FF',
                    color: '#fff',
                    textTransform: 'none',
                    width: { lg: '175px', xs: '80px' },
                    fontSize: { lg: '20px', xs: '14px' },
                    height: '56px',
                    position: 'absolute',
                    right: '0'
                }} onClick={handleSearch}>Search</Button>
            </Box>
            <Box sx={{position: 'relative', width: '100%', p: '20px'}}>
                <HorizontalScrollbar data={bodyParts} setBodyPart={setBodyPart} bodyPart={bodyPart} isBodyParts onClick={function (itemId: string): void {
            throw new Error('Function not implemented.');
          } }/>
            </Box>
        </Stack>
    )
}



export default SearchExercises;