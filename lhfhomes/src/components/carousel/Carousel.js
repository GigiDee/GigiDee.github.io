import React, { useState, useEffect } from "react";
import { IconButton, useMediaQuery } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import "./carousel.css";
import image1 from "../../assets/img/image1.jpg";
import image2 from "../../assets/img/image2.jpg";
import image3 from "../../assets/img/image3.jpg";

const images = [image1, image2, image3];

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const isDesktop = useMediaQuery("(min-width: 1024px)");

  useEffect(() => {
    let interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 10000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  const goToPrevious = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const carouselMargin = "20px";
  const imageMaxWidth = "100%"; 
  const imageMaxHeight = "100vh"; 

  return (
    <div className="carousel-container" style={{ margin: carouselMargin }}>
      <div className="carousel">
        <img
          src={images[currentIndex]}
          alt="Slide"
          style={{ maxWidth: imageMaxWidth, maxHeight: imageMaxHeight }}
        />

        <IconButton
          className="prev-button"
          onClick={goToPrevious}
          size="large"
          style={{
            position: "absolute",
            left: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: isDesktop ? "40px" : "80px", 
            color: "orange",
          }}
        >
          <ArrowBack fontSize="inherit" />
        </IconButton>
        <IconButton
          className="next-button"
          onClick={goToNext}
          size="large"
          style={{
            position: "absolute",
            right: "5%",
            top: "50%",
            transform: "translateY(-50%)",
            fontSize: isDesktop ? "40px" : "80px", 
            color: "orange",
          }}
        >
          <ArrowForward fontSize="inherit" />
        </IconButton>
      </div>
    </div>
  );
};

export default Carousel;

