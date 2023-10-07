
import React from 'react';
import { Grid, Card, CardContent, Typography } from '@mui/material';
import Video from '../video/Video';
import ImagesCarousel from '../carousel/Carousel';
import logo from '../../assets/img/LHFHLogoTransparent.png';

const Gallery = () => {
  const containerStyle = {
    backgroundColor: '#333',
    textAlign: 'center',
    padding: '40px 0',
  };

  const logoStyle = {
    maxWidth: '100px',
    height: 'auto',
    marginBottom: '16px',
  };

  const virtualTourStyle = {
    fontFamily: "'Lobster Two', cursive",
    fontSize: '32px',
    color: '#FFF5E1',
  };

  const gridStyle = {
    backgroundColor: '#333',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    padding: '20px',
  };

  const cardStyle = {
    width: '100%',
    height: '600px',
    border: '2px solid #F7931D',
    borderRadius: '15px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '800px',
    margin: '0 auto',
    backgroundColor: '#333',
  };

  const cardContentStyle = {
    textAlign: 'center',
    color: '#FFF5E1',
    padding: '20px',
    backgroundColor: '#333',
  };

  return (
    <div style={containerStyle}>
      <img src={logo} alt="Love Hope Faith Homes Logo" style={logoStyle} />
      <Typography variant="h6" style={virtualTourStyle}>
        Virtual Tour
      </Typography>
      <div style={gridStyle}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Card style={cardStyle}>
              <CardContent style={cardContentStyle}>
                <Video />
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card style={cardStyle}>
              <CardContent style={cardContentStyle}>
                <ImagesCarousel />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Gallery;