import React from 'react';
import { Link } from 'react-router-dom';
import { Stack } from '@mui/material';
import GitFit from '../assets/images/Git-fit.png'



const Navbar: React.FC = () => (
    <Stack direction="row" justifyContent="space-around" alignItems="center" sx={{ gap: { sm: '123px', xs: '0px' }, mt: { sm: '32px', xs: '20px' }, justifyContent: 'none' }} px="20px">
      <Link to="/">
        <img src={GitFit} alt="logo" className='logo'  />
      </Link>
      <Stack
        direction="row"
        gap="40px"
        fontFamily="Alegreya"
        fontSize="24px"
        alignItems="flex-end"
      >
        <Link to="/" style={{ textDecoration: 'none', color: '#3A1212', borderBottom: '3px solid #2478FF' }}>Home</Link>
        <a href="#exercises" style={{ textDecoration: 'none', color: '#3A1212' }}>Exercises</a>
      </Stack>
    </Stack>
  );



export default Navbar;