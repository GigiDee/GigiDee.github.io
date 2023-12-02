import React from "react";
import { Container, Typography, Button, useMediaQuery } from "@mui/material";

const About = () => {
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  const containerStyle = {
    backgroundColor: "#333",
    padding: "20px",
    zIndex: 2,
  };

  const divStyle = {
    backgroundColor: "#FFF5E1",
    padding: "20px",
    borderRadius: "15px",
    marginTop: "-120px",
    marginBottom: "0px",
    border: "2px solid #F7931D",
    textAlign: "center",
    zIndex: 1,
    position: 'relative',
  };

  const mobileTextStyle = {
    textAlign: "left",
  };

  const scrollToSection = (sectionId, offset = 0) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop + offset,
        behavior: "smooth",
      });
    }
  };

  return (
    <Container style={containerStyle} id="about">
      <div style={divStyle}>
        <Typography
          variant="h3"
          component="h3"
          style={{
            color: "#333",
            fontFamily: "'Lobster Two', cursive",
          }}
        >
          About Us
        </Typography>
        <Typography
          variant="body1"
          style={{
            color: "#333",
            padding: "16px",
            ...(isDesktop ? {} : mobileTextStyle),
          }}
        >
          Love Hope Faith Homes of Wisconsin (LHFH) is a faith based adult family home created to be a haven for individuals with intellectual or developmental disabilities where care and support are personalized to match their specific needs. At LHFH, our priority is to provide a clean, safe environment where residents thrive while living with dignity and respect.
        </Typography>
        <div style={{ textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => scrollToSection("contact")}
            sx={{
              backgroundColor: "#F7931D",
              color: "#333",
              "&:hover": { backgroundColor: "#FFA040" },
            }}
          >
            Get In Touch
          </Button>
        </div>
      </div>
    </Container>
  );
};

export default About;