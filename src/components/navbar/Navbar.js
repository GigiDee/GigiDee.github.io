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
  const isMobile = useMediaQuery("(maxWidth: 800px)");

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
              <MenuIcon style={{ color: '#333' }} /> {/* Set the color to black */}
            </IconButton>
            <Menu
              anchorEl={menuAnchorEl}
              open={Boolean(menuAnchorEl)}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={() => scrollToSection("about", -250)}>
                <Button color="inherit" style={{ color: '#333' }}>About</Button>
              </MenuItem>
              <MenuItem onClick={() => scrollToSection("contact")}>
                <Button color="inherit" style={{ color: '#333' }}>Contact Us</Button>
              </MenuItem>
              <MenuItem onClick={() => scrollToSection("tour", -60)}>
                <Button color="inherit" style={{ color: '#333' }}>Virtual Tour</Button>
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
