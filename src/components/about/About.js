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
    textAlign: "center",
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
          Love Hope Faith Homes of Wisconsin (LHF) is a faith based adult family home.
          <br />
          <br />
          Our <span style={{ fontWeight: "bold" }}>Love</span> is to provide personalized care and support that match each person's specific needs.
          <br />
          {!isDesktop && <br />}
          Our <span style={{ fontWeight: "bold" }}>Hope</span> is to create a haven for individuals with intellectual or developmental disabilities.
          <br />
          {!isDesktop && <br />}
          Our <span style={{ fontWeight: "bold" }}>Faith</span> gives the credit to the One who continually guides, provides and pulls all things together for our good.
          <br />
          <br />
          Our priority is to provide a clean, safe environment where residents thrive while living with dignity and respect.
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