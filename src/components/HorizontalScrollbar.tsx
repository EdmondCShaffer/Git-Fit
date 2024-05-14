import React, { useContext } from 'react';
import { Box, Typography } from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import BodyPart from './BodyPart';
//@ts-ignore
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import ExerciseCard from './ExerciseCard';

interface HorizontalScrollBarProps {
    data: any[]; 
    bodyPart: string; 
    setBodyPart: (bodyPart: string) => void;
    isBodyParts: boolean;
    onClick: (itemId: string) => void;
}

type VisibilityContextType = {
    scrollNext: () => void;
    scrollPrev: () => void;
   
  };

const LeftArrow = () => {
    const { scrollPrev } = useContext<VisibilityContextType>(VisibilityContext);
  
    return (
        <Typography onClick={() => scrollPrev()} className="right-arrow">
           <ArrowBackIcon/>
        </Typography>
    );
};
  
const RightArrow = () => {
    const { scrollNext } = useContext<VisibilityContextType>(VisibilityContext);
  
    return (
        <Typography onClick={() => scrollNext()} className="left-arrow">
           <ArrowForwardIcon/>
        </Typography>
    );
};

const HorizontalScrollbar: React.FC<HorizontalScrollBarProps>= ({ data, bodyPart, setBodyPart, isBodyParts, onClick}) => {
    return (
        <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
            {data.map((item) => (
                <Box 
                    key={item.id || item}
                     // @ts-ignore
                    itemId={item.id || item }
                    title={item.id || item}
                    m="0 40px"
                    component="div"
                    onClick={() => onClick(item.id || item)} 
                >
                    {isBodyParts ? <BodyPart item={item} bodyPart={bodyPart} setBodyPart={setBodyPart}/> : <ExerciseCard exercise={item} />}
                </Box>
            ))}
        </ScrollMenu>
    );
};

export default HorizontalScrollbar;
