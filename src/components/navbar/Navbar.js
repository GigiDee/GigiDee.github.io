// import React, { useState } from "react";
// import './navbar.css'
// import AppBar from "@mui/material/AppBar";
// import Toolbar from "@mui/material/Toolbar";
// import Typography from "@mui/material/Typography";
// import IconButton from "@mui/material/IconButton";
// import MenuIcon from "@mui/icons-material/Menu";
// import Menu from "@mui/material/Menu";
// import MenuItem from "@mui/material/MenuItem";
// import Button from "@mui/material/Button";
// import useMediaQuery from "@mui/material/useMediaQuery"; 
// import logo from '../../assets/img/LHFHLogoTransparent.png';

// function Navbar() {
//   const [menuAnchorEl, setMenuAnchorEl] = useState(null);
//   const isMobile = useMediaQuery("(max-width: 800px)"); 

//   const handleMenuOpen = (event) => {
//     setMenuAnchorEl(event.currentTarget);
//   };

//   const handleMenuClose = () => {
//     setMenuAnchorEl(null);
//   };

//   const scrollToSection = (sectionId) => {
//     const section = document.getElementById(sectionId);
//     if (section) {
//       section.scrollIntoView({ behavior: "smooth" });
//       handleMenuClose();
//     }
//   };

//   return (
//     <AppBar position="sticky" sx={{ backgroundColor: '#FFF5E1' }}>
//       <Toolbar>
//         <img src={logo} alt="Love Hope Faith Homes Logo" className="logo" />
//         <Typography className="Title" variant="h6" component="div" sx={{ flexGrow: 1 }}>
//           Love Hope Faith Homes
//         </Typography>
//         {isMobile ? ( 
//           <>
//             <IconButton
//               edge="start"
//               color="inherit"
//               aria-label="menu"
//               onClick={handleMenuOpen}
//             >
//               <MenuIcon />
//             </IconButton>
//             <Menu
//               anchorEl={menuAnchorEl}
//               open={Boolean(menuAnchorEl)}
//               onClose={handleMenuClose}
//             >
//               <MenuItem onClick={() => scrollToSection("book-a-tour")}>
//                 <Button color="inherit">Book a Tour</Button>
//               </MenuItem>
//               <MenuItem onClick={() => scrollToSection("about-section")}>
//                 <Button color="inherit">About</Button>
//               </MenuItem>
//               <MenuItem onClick={() => scrollToSection("images-section")}>
//                 <Button color="inherit">Images</Button>
//               </MenuItem>
//               <MenuItem onClick={() => scrollToSection("staff-section")}>
//                 <Button color="inherit">Staff</Button>
//               </MenuItem>
//             </Menu>
//           </>
//         ) : (
//           <div>
//             <Button
//               color="inherit"
//               style={{ color: '#333' }}
//               onClick={() => scrollToSection("about", -120)}
//             >
//               About
//             </Button>
//             <Button color="inherit" style={{ color: '#333' }} onClick={() => scrollToSection("contact-us-section")}>Contact Us</Button>
//             <Button color="inherit" style={{ color: '#333' }} onClick={() => scrollToSection("tour")}>Virtual Tour</Button>
//           </div>
//         )}
//       </Toolbar>
//     </AppBar>
//   );
// }

// export default Navbar;

import React, { useState } from "react";
import './navbar.css'
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery"; 
import logo from '../../assets/img/LHFHLogoTransparent.png';

function Navbar() {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const isMobile = useMediaQuery("(max-width: 800px)");

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  const scrollToSection = (sectionId, offset = 0) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop + offset,
        behavior: "smooth",
      });
      handleMenuClose();
    }
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: '#FFF5E1' }}>
      <Toolbar>
        <img src={logo} alt="Love Hope Faith Homes Logo" className="logo" />
        <Typography className="Title" variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Love Hope Faith Homes
        </Typography>
        {isMobile ? ( 
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenuOpen}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={menuAnchorEl}
              open={Boolean(menuAnchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => scrollToSection("book-a-tour")}>
                <Button color="inherit">Book a Tour</Button>
              </MenuItem>
              <MenuItem onClick={() => scrollToSection("about")}>
                <Button color="inherit">About</Button>
              </MenuItem>
              <MenuItem onClick={() => scrollToSection("images-section")}>
                <Button color="inherit">Images</Button>
              </MenuItem>
              <MenuItem onClick={() => scrollToSection("staff-section")}>
                <Button color="inherit">Staff</Button>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <div>
            <Button color="inherit" style={{ color: '#333' }} onClick={() => scrollToSection("about", -250)}>About</Button>
            <Button color="inherit" style={{ color: '#333' }} onClick={() => scrollToSection("contact")}>Contact Us</Button>
            <Button color="inherit" style={{ color: '#333' }} onClick={() => scrollToSection("tour", -60)}>Virtual Tour</Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
