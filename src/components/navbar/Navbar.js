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
import useMediaQuery from "@mui/material/useMediaQuery"; // Import the useMediaQuery hook
import logo from '../../assets/img/LHFHLogoTransparent.png';

function Navbar() {
  const [menuAnchorEl, setMenuAnchorEl] = useState(null);
  const isMobile = useMediaQuery("(max-width: 800px)"); // Define the breakpoint for mobile view

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#FFF5E1' }}>
      <Toolbar>
        <img src={logo} alt="Love Hope Faith Homes Logo" className="logo" />
        <Typography className="Title" variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Love Hope Faith Homes
        </Typography>
        {isMobile ? ( // Render the menu icon on mobile screens
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
              <MenuItem onClick={handleMenuClose}>
                <Button color="inherit">Book a Tour</Button>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Button color="inherit">About</Button>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Button color="inherit">Images</Button>
              </MenuItem>
              <MenuItem onClick={handleMenuClose}>
                <Button color="inherit">Staff</Button>
              </MenuItem>
            </Menu>
          </>
        ) : (
          <div>
            {" "}
            {/* Render navigation items on larger screens */}
            <Button color="inherit" style={{ color: '#333' }}>Book a Tour</Button>
            <Button color="inherit" style={{ color: '#333' }}>About</Button>
            <Button color="inherit" style={{ color: '#333' }}>Images</Button>
            <Button color="inherit" style={{ color: '#333' }}>Staff</Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
