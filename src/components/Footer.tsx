import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import Logo from '../assets/images/FooterLogo.png'

const Footer = () => {
    return (
        <Box bgcolor='#fff' height='100px' marginTop='30px' paddingTop='70px' overflow='hidden'>
              <Stack gap="40px" alignItems='center' justifyContent='center' height='100%'>
            
        <img src={Logo} alt="logo"   style={{ objectFit: 'contain', width: '100%', height: '500px' }}  />
    </Stack>
        </Box>
    )
}


export default Footer;