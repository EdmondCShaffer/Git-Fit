import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png'
import Chest from '../assets/icons/chest.svg'
import Back from '../assets/icons/back.svg'
import Shoulders from '../assets/icons/shoulder.svg'
import Biceps from '../assets/icons/biceps.svg'
import Abs from '../assets/icons/abs.svg'
import UpperLegs from '../assets/icons/upperLegs.svg'
import Calves from '../assets/icons/calves.svg'
import Cardio from '../assets/icons/cardio.png'
 
interface BodyPartProps{
    item: string;
    bodyPart: string; // Define bodyPart as a required prop
    setBodyPart: (bodyPart: string) => void;
}

const BodyPart: React.FC<BodyPartProps> = ({item, setBodyPart, bodyPart}) => {

    const getImageSource = () => {
        switch(item) {
            case 'chest' :
                return Chest;
            case 'shoulders':
                return Shoulders;
            case 'upper arms' : 
                return Biceps
            case 'waist' : 
                return Abs;
            case 'upper legs' :
                return UpperLegs
            case 'lower legs' : 
                return Calves
            case 'back' : 
                return Back;
            case 'cardio' : 
                return Cardio
            default: return Icon
        }
    }

    
    return (
        <Stack
            alignItems='center'
            justifyContent="center"
            className='bodyPart-card'
            sx={{  
                borderTop: bodyPart === item ?  '4px solid #2478FF' : '',
                backgroundColor: '#fff',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer', 
                gap: '47px'
             }}
             onClick={() => {
                setBodyPart(item);
                window.scrollTo({top: 1800, left: 100, behavior: 'smooth'})
             }}

        >
            <img src={getImageSource()} alt="dumbell" style={{width:'160px', height: '160px' }} />
            <Typography fontSize="24px" fontWeight='bold' color='#3A1212' textTransform='capitalize'>{item}</Typography>
        </Stack>
    )
    
    
}



export default BodyPart;