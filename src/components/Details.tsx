import React from 'react';
import { Stack, Button, Typography } from '@mui/material';

import BodyPartImage from '../assets/icons/body-part.png'
import TargetImage from '../assets/icons/target.png'
import EquipmentImage from '../assets/icons/equipment.png'

interface DetailsProps {
    exerciseDetails: {
        bodyPart: string;
        gifUrl: string;
        name: string;
        target: string;
        equipment: string;
    };
}


const Details: React.FC<DetailsProps> = ({ exerciseDetails }) => {
    const {bodyPart, gifUrl, name, target, equipment } = exerciseDetails

    const extraDetial = [
        {
            icon: BodyPartImage,
            name: bodyPart
        }, 
        {
            icon: TargetImage,
            name: target
        }, 
        {
            icon: EquipmentImage,
            name: equipment
        }
    ]
    return (
        <Stack gap='60px' sx={{flexDirection: {lg: 'row'}, p: '20px', alignItems: 'center'}}>
            <img src={gifUrl} alt={name} loading='lazy' className='detail-image' />
            <Stack sx={{ gap: {lg: '35px', xs: '20px'}}}>
                <Typography variant='h3'>
                    {name}
                </Typography>
                <Typography>
                    Exercises keep you strong. {name} {` `}
                    is one of the best exercises to target your {target}. It will help you
                    improve your mood and gain energy. 
                </Typography>
                {extraDetial.map((item) => (
                    <Stack key={item.name} direction="row" gap='24px' alignItems='center'>
                        <Button sx={{ background: '#fff2db', borderRadius: '50%', width: '100px'}}>
                            <img src={item.icon} alt={bodyPart} style={{width: '50px', height: '50px'}} />
                        </Button>
                        <Typography textTransform='capitalize'>
                            {item.name}
                        </Typography>
                    </Stack>
                ))}
            </Stack>
        </Stack>
    )
}



export default Details;