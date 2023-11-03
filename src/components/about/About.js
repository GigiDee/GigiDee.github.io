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
          Love Hope Faith Homes of Wisconsin is a faith-based adult family
          home, and was created to be a haven for adults with special needs.
          Making residents truly feel at home while providing exceptional
          compassionate care customized to meet each resident’s specific
          personal needs is our highest priority. <br />
          <br />
          LHFH residents are treated with the dignity and respect they deserve,
          while ensuring their individual rights, safety and healthcare needs
          are met at all times. We firmly believe that all individuals deserve
          outstanding care customized for their specific needs to maximize their
          fullest potential while fostering independence. <br />
          <br />
          The management and staff are committed to ensuring that residents’
          lives at Love Hope Faith Homes are filled with appropriate
          stimulating activities, healthy meals, a clean and safe environment,
          and much more!
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