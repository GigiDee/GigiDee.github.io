import React from 'react';
import { Box, Button,Typography, useMediaQuery } from '@mui/material';
import Logo from '../../assets/img/LHFHLogoTransparent.png';
import Hero from '../../assets/img/heroimage.jpg';
import Hero2 from '../../assets/img/heroimage2.jpg';
import Hero3 from '../../assets/img/heroimage3.png';

const About = () => {
  const mainContainerStyle = {
    backgroundImage: `url(${Hero2})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
  };

  const logoStyle = {
    width: '150px',
    height: 'auto',
    marginBottom: '16px',
  };

  const buttonContainerStyle = {
    marginTop: '16px',
  };

  const titleStyle = {
        color: '#FFF5E1',
        marginBottom: '16px',
        fontFamily: "'Lobster Two', cursive",
      };

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <Box sx={mainContainerStyle}>
      <img src={Logo} alt="Love Hope Faith Homes" style={logoStyle} />
      <Typography variant="h4" component="h4" style={titleStyle}>
               LOVE HOPE FAITH HOMES
      </Typography>
      <Button
        variant="contained"
        color="primary"
        sx={{
          backgroundColor: '#F7931D',
          color: '#333',
          '&:hover': { backgroundColor: '#FFA040' },
        }}
      >
        Book a Tour
      </Button>
    </Box>
  );
};

export default About;
