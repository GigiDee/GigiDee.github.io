import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import Link from '@mui/material/Link'; 

import './footer.css';

const Footer = () => {
  return (
    <AppBar position="static" color="primary" classes={{ root: 'matte-black-footer' }}>
      <Toolbar sx={{ paddingTop: '20px', paddingBottom: '20px', backgroundColor: '#333' }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
        >
          <Typography variant="h5">
                Our Mission: To model Jesus' love by creating life-enhancing relationships, services, and environments.
          </Typography>
          <Typography variant="h6">Contact Us</Typography>
          <Box marginTop={2}>
            <IconButton color="inherit" sx={{ color: '#F7931D', '&:hover': { backgroundColor: '#FFA040', color: '#333' }}} href="https://www.facebook.com">
              <FacebookIcon />
            </IconButton>
            <IconButton color="inherit" sx={{ color: '#F7931D', '&:hover': { backgroundColor: '#FFA040', color: '#333' }}} href="https://www.instagram.com">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit" sx={{ color: '#F7931D', '&:hover': { backgroundColor: '#FFA040', color: '#333' }}} href="mailto:example@example.com">
              <MailOutlineIcon />
            </IconButton>
          </Box>
          <Typography variant="h6">
            5595 County Road Z, West Bend, WI 53095 | (262) 306-2100
          </Typography>
          <Typography variant="h6">
            Copyright © 2023 Cedar Community // All rights reserved.
          </Typography>
          <Link href="https://example.com" target="_blank" rel="noopener">
            Terms and Conditions
          </Link>
          <Link href="https://example.com" target="_blank" rel="noopener">
            Privacy Policy
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;