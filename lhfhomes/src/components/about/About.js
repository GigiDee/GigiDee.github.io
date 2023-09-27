// import React from 'react';
// import { Container, Typography, Button, Box } from '@mui/material';
// import Hero from '../../assets/img/heroimage.png';
// import './about.css'

// const About = () => {
//   const containerStyle = {
//     padding: '16px', // You can adjust the padding as needed
//   };

//   const heroImageStyle = {
//     width: '100%',
//     maxWidth: '600px',
//     height: 'auto',
//     display: 'block',
//     margin: '0 auto',
//   };

//   const textContainerStyle = {
//     marginBottom: '16px', // You can adjust the margin as needed
//   };

//   const buttonContainerStyle = {
//     textAlign: 'center',
//   };

//   const buttonStyle = {
//     margin: '8px', // You can adjust the margin as needed
//   };

//   return (
//     <Container style={containerStyle}>
//       <img
//         src={Hero}
//         alt=""
//         style={heroImageStyle}
//       />
//       <Box style={buttonContainerStyle}>
//         <Button variant="contained" color="primary" style={buttonStyle}>
//           Schedule A Tour
//         </Button>
//       </Box>
//       <Typography variant="h3" component="h3" id="about" style={textContainerStyle}>
//         About Auntie's Retirement Home:
//       </Typography>
//       <Typography variant="body1" style={textContainerStyle}>
//         Welcome to Auntie's Retirement Home, where we provide a warm and caring environment for our residents. We understand the importance of comfort, safety, and companionship during the golden years of life.
//       </Typography>
//       <Typography variant="body1" style={textContainerStyle}>
//         Our dedicated team of professionals is committed to ensuring that each resident enjoys a high quality of life. We offer a range of services and activities to meet the unique needs and preferences of our residents.
//       </Typography>
//       <Box style={buttonContainerStyle}>
//         <Button variant="contained" color="primary" style={buttonStyle}>
//           Get In Touch
//         </Button>
//       </Box>
//     </Container>
//   );
// };

// export default About;

import React from 'react';
import { Container, Typography, Button, Box, useMediaQuery } from '@mui/material';
import Hero from '../../assets/img/heroimage.png';
import './about.css';

const About = () => {
  const containerStyle = {
    padding: '16px',
  };

  const heroImageStyle = {
    width: '100%',
    maxWidth: '600px',
    height: 'auto',
    display: 'block',
    margin: '0 auto',
  };

  const textContainerStyle = {
    marginBottom: '16px',
    color: '#FFF5E1',
    textAlign: 'center', // Center-align text for desktop
    '@media (max-width: 600px)': {
      textAlign: 'left', // Align text to the left for mobile and tablet
    },
  };

  const buttonContainerStyle = {
    textAlign: 'center',
  };

  const isDesktop = useMediaQuery('(min-width: 1024px)');

  return (
    <Container style={containerStyle}>
      <img src={Hero} alt="" style={heroImageStyle} />
      <Box style={buttonContainerStyle}>
        <Button variant="contained" color="primary" sx={{ backgroundColor: '#F7931D', color: '#333', '&:hover': { backgroundColor: '#FFA040' } }}>
          Schedule A Tour
        </Button>
      </Box>
      <Typography variant="h3" component="h3" id="about" style={isDesktop ? textContainerStyle : { ...textContainerStyle, textAlign: 'left' }}>
        About Auntie's Retirement Home:
      </Typography>
      <Typography variant="body1" style={isDesktop ? textContainerStyle : { ...textContainerStyle, textAlign: 'left' }}>
        Welcome to Auntie's Retirement Home, where we provide a warm and caring environment for our residents. We understand the importance of comfort, safety, and companionship during the golden years of life.
      </Typography>
      <Typography variant="body1" style={isDesktop ? textContainerStyle : { ...textContainerStyle, textAlign: 'left' }}>
        Our dedicated team of professionals is committed to ensuring that each resident enjoys a high quality of life. We offer a range of services and activities to meet the unique needs and preferences of our residents.
      </Typography>
      <Box style={buttonContainerStyle}>
        <Button variant="contained" color="primary" sx={{ backgroundColor: '#F7931D', color: '#333', '&:hover': { backgroundColor: '#FFA040' } }}>
          Get In Touch
        </Button>
      </Box>
    </Container>
  );
};

export default About;
