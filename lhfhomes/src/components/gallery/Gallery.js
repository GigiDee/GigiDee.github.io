import React from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import ImagesCarousel from "../carousel/Carousel";
import logo from "../../assets/img/LHFHLogoTransparent.png";

const Gallery = () => {
  const containerStyle = {
    backgroundColor: "#333",
    textAlign: "center",
    padding: "40px 0",
  };

  const logoStyle = {
    maxWidth: "100px",
    height: "auto",
    marginBottom: "16px",
  };

  const virtualTourStyle = {
    fontFamily: "'Lobster Two', cursive",
    fontSize: "63px",
    color: "#FFF5E1",
    paddingBottom: "33px",
  };

  const galleryContainerStyle = {
    backgroundColor: "#FFF5E1",
    border: "2px solid #F7931D",
    borderRadius: "15px",
    textAlign: "center",
    padding: "20px",
    marginTop: "20px",
    minHeight: "700px",
    width: "80%",
    margin: "0 auto",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    "@media (max-width: 600px)": {
      minHeight: "300px",
    },
  };

  const cardStyle = {
    width: "100%",
    height: "600px",
    border: "2px solid #F7931D",
    borderRadius: "15px",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    maxWidth: "800px",
    margin: "0 auto",
    backgroundColor: "#333",
  };

  const cardContentStyle = {
    textAlign: "center",
    color: "#FFF5E1",
    padding: "20px",
    backgroundColor: "#333",
  };
  return (
    <div style={containerStyle} id="tour">
      <img src={logo} alt="Love Hope Faith Homes Logo" style={logoStyle} />
      <Typography variant="h6" style={virtualTourStyle}>
        Virtual Tour
      </Typography>
      <div style={galleryContainerStyle}>
        <Grid container spacing={2} justifyContent="center" alignItems="center">
          <Grid item xs={12} md={6}>
            <Card style={cardStyle}>
              <CardContent style={cardContentStyle}>
                {/* <Video /> */}
                <Typography variant="h6">Placeholder</Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} md={6}>
            <Card style={cardStyle}>
              <CardContent style={cardContentStyle}>
                <ImagesCarousel />
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Gallery;
