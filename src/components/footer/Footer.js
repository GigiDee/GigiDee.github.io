import React from "react";
import Box from "@mui/material/Box";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import MailOutlineIcon from "@mui/icons-material/MailOutline";
import "./footer.css";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import useMediaQuery from "@mui/material/useMediaQuery";

const Footer = () => {
  const virtualTourStyle = {
    fontFamily: "'Lobster Two', cursive",
    fontSize: "63px",
    color: "#FFF5E1",
    paddingBottom: "33px",
  };

  const isMobile = useMediaQuery("(max-width: 900px)");

  return (
    <AppBar
      position="static"
      color="primary"
      classes={{ root: "matte-black-footer" }}
    >
      <Toolbar
        sx={{
          paddingTop: "20px",
          paddingBottom: "20px",
          backgroundColor: "#333",
        }}
      >
        <Box
          display="flex"
          flexDirection="column"
          alignItems="center"
          width="100%"
          id="contact"
        >
          <Typography variant="h3" style={virtualTourStyle}>
            Contact Us
          </Typography>
          <Typography variant="h6">
            5595 County Road Z, West Bend, WI 53095 | (262) 306-2100
          </Typography>
          <Typography variant="h6">
            Copyright © 2023 Cedar Community // All rights reserved.
          </Typography>
          <Typography variant="h6">Contact Details</Typography>

          <Grid container spacing={2} justifyContent="center">
            {/* Left Side */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: isMobile ? "center" : "flex-end",
                justifyContent: isMobile ? "center" : "flex-end", 
                textAlign: "center",
              }}
            >
              <Typography variant="h6">Charm</Typography>
              <Typography variant="body1">charm@asi-wi.com</Typography>
              <Typography variant="body1">2422123435</Typography>
            </Grid>
            {/* Right Side */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: isMobile ? "center" : "flex-start",
                justifyContent: isMobile ? "center" : "flex-start",
                textAlign: "center",
              }}
            >
              <Typography variant="h6">Charm</Typography>
              <Typography variant="body1">charm@asi-wi.com</Typography>
              <Typography variant="body1">2422123435</Typography>
            </Grid>
          </Grid>

          <Box marginTop={2}>
            <IconButton
              color="inherit"
              sx={{
                color: "#F7931D",
                "&:hover": { backgroundColor: "#FFA040", color: "#333" },
              }}
              href="https://www.facebook.com"
            >
              <FacebookIcon />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{
                color: "#F7931D",
                "&:hover": { backgroundColor: "#FFA040", color: "#333" },
              }}
              href="https://www.instagram.com"
            >
              <InstagramIcon />
            </IconButton>
            <IconButton
              color="inherit"
              sx={{
                color: "#F7931D",
                "&:hover": { backgroundColor: "#FFA040", color: "#333" },
              }}
              href="mailto:example@example.com"
            >
              <MailOutlineIcon />
            </IconButton>
          </Box>

          <Typography variant="h6">Links</Typography>

          <Grid container spacing={2} justifyContent="center">
            {/* Left Side */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: isMobile ? "center" : "flex-end",
                justifyContent: isMobile ? "center" : "flex-end", 
              }}
            >
              <Link
                href="https://example.com"
                target="_blank"
                rel="noopener"
                className="FooterLink"
              >
                Privacy Policy
              </Link>
            </Grid>
            {/* Right Side */}
            <Grid
              item
              xs={12}
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: isMobile ? "center" : "flex-start",
                justifyContent: isMobile ? "center" : "flex-start",
                textAlign: "center",
              }}
            >
              <Link
                href="https://example.com"
                target="_blank"
                rel="noopener"
                className="FooterLink"
              >
                Terms and Conditions
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
