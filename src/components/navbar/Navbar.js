import "./navbar.css";
import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import useMediaQuery from "@mui/material/useMediaQuery";
import logo from "../../assets/img/LHFHLogoTransparent.png";
import Drawer from "@mui/material/Drawer";
import CloseIcon from "@mui/icons-material/Close";
import Divider from "@mui/material/Divider";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

const Navbar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 800px)");

  const handleDrawerOpen = () => {
    setDrawerOpen(true);
  };

  const handleDrawerClose = () => {
    setDrawerOpen(false);
  };

  const scrollToSection = (sectionId, offset = 0) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop + offset,
        behavior: "smooth",
      });
      handleDrawerClose();
    }
  };

  return (
    <AppBar position="sticky" sx={{ backgroundColor: "#FFF5E1" }}>
      <Toolbar>
        <img
          src={logo}
          alt="Love Hope Faith Homes Logo"
          className="logo"
          style={{ width: "100px", Height: "100px" }}
        />
        <Typography
          className="Title"
          variant="h6"
          component="div"
          sx={{ flexGrow: 1 }}
        >
          Love Hope Faith Homes
        </Typography>
        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleDrawerOpen}
            >
              <MenuIcon style={{ color: "black" }} />
            </IconButton>
            <Drawer
              anchor="right"
              open={drawerOpen}
              onClose={handleDrawerClose}
              sx={{
                "& .MuiPaper-root": {
                  width: "200px",
                  height: "220px",
                  backgroundColor: "#FFF5E1",
                },
              }}
            >
              <IconButton
                sx={{
                  mb: 2,
                  margin: "8px",
                  "&:hover": { backgroundColor: "transparent" },
                  "&.Mui-focusVisible": { backgroundColor: "transparent !important" },
    "&.Mui-focusVisible .MuiSvgIcon-root": {
      backgroundColor: "transparent !important",
    },
    "&:active": { backgroundColor: "transparent !important" },
                }}
              >
                <CloseIcon
                  onClick={handleDrawerClose}
                  style={{ color: "black" }}
                />
              </IconButton>
              <Divider sx={{ mb: 2 }} />
              <Box sx={{ mb: 2 }}>
                <ListItemButton
                  onClick={() => scrollToSection("about", -250)}
                  sx={{
                    "& .MuiTypography-root": { color: "black" },
                    textAlign: "center",
                  }}
                >
                  <ListItemText primary="About" />
                </ListItemButton>
                <ListItemButton
                  onClick={() => scrollToSection("contact")}
                  sx={{
                    "& .MuiTypography-root": { color: "black" },
                    textAlign: "center",
                  }}
                >
                  <ListItemText primary="Contact Us" />
                </ListItemButton>
                <ListItemButton
                  onClick={() => scrollToSection("tour", -60)}
                  sx={{
                    "& .MuiTypography-root": { color: "black" },
                    textAlign: "center",
                  }}
                >
                  <ListItemText primary="Virtual Tour" />
                </ListItemButton>
              </Box>
            </Drawer>
          </>
        ) : (
          <div>
            <Button onClick={() => scrollToSection("about", -250)}>
              About
            </Button>
            <Button onClick={() => scrollToSection("contact")}>
              Contact Us
            </Button>
            <Button onClick={() => scrollToSection("tour", -60)}>
              Virtual Tour
            </Button>
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
