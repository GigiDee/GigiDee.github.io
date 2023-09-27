// import React from 'react';
// import Box from '@mui/material/Box';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';
// import IconButton from '@mui/material/IconButton';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';

// const Footer = () => {
//   return (
//     <AppBar position="static" color="primary">
//       <Toolbar>
//         <Box display="flex" flexDirection="column" alignItems="center" width="100%">
//           <Typography variant="h6">Contact Us</Typography>
//           <Typography variant="body2">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
//             Email: <a href="mailto:example@example.com">example@example.com</a>
//           </Typography>
//           <Box marginTop={2}>
//             <IconButton color="inherit" href="https://www.facebook.com">
//               <FacebookIcon />
//             </IconButton>
//             <IconButton color="inherit" href="https://www.instagram.com">
//               <InstagramIcon />
//             </IconButton>
//             <IconButton color="inherit" href="mailto:example@example.com">
//               <MailOutlineIcon />
//             </IconButton>
//           </Box>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Footer;

// import React from 'react';
// import Box from '@mui/material/Box';
// import AppBar from '@mui/material/AppBar';
// import Toolbar from '@mui/material/Toolbar';
// import Typography from '@mui/material/Typography';
// import IconButton from '@mui/material/IconButton';
// import FacebookIcon from '@mui/icons-material/Facebook';
// import InstagramIcon from '@mui/icons-material/Instagram';
// import MailOutlineIcon from '@mui/icons-material/MailOutline';

// import './footer.css'; // Import your custom CSS file

// const Footer = () => {
//   return (
//     <AppBar position="static" color="primary" classes={{ root: 'matte-black-footer' }}>
//       <Toolbar>
//         <Box
//           display="flex"
//           flexDirection="column"
//           alignItems="center"
//           width="100%"
//         >
//           <Typography variant="h6">Contact Us</Typography>
//           <Typography variant="body2">
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
//             Email: <a href="mailto:example@example.com">example@example.com</a>
//           </Typography>
//           <Box marginTop={2}>
//             <IconButton color="inherit" sx={{ color: '#F7931D', '&:hover': { backgroundColor: '#FFA040', color: '#333' }}} href="https://www.facebook.com">
//               <FacebookIcon />
//             </IconButton>
//             <IconButton color="inherit" sx={{ color: '#F7931D', '&:hover': { backgroundColor: '#FFA040', color: '#333' }}} href="https://www.instagram.com">
//               <InstagramIcon />
//             </IconButton>
//             <IconButton color="inherit" sx={{ color: '#F7931D', '&:hover': { backgroundColor: '#FFA040', color: '#333' }}} href="mailto:example@example.com">
//               <MailOutlineIcon />
//             </IconButton>
//           </Box>
//         </Box>
//       </Toolbar>
//     </AppBar>
//   );
// };

// export default Footer;

import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import './footer.css'; // Import your custom CSS file

const Footer = () => {
  return (
    <AppBar position="static" color="primary" classes={{ root: 'matte-black-footer' }}>
      <Toolbar sx={{ paddingTop: '20px', paddingBottom: '20px' }}>
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
        >
          <Typography variant="h6">Contact Us</Typography>
          <Typography variant="body2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            Email: <a href="mailto:example@example.com">example@example.com</a>
          </Typography>
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
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
