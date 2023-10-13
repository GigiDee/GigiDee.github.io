import React, { useState, useEffect } from "react";
import { IconButton, useMediaQuery } from "@mui/material";
import { ArrowBack, ArrowForward } from "@mui/icons-material";
import "./carousel.css";
import image1 from "../../assets/img/lhfh1.jpeg"
import image2 from "../../assets/img/lhfh2.JPG";
import image4 from "../../assets/img/lhfh4.jpeg";
import image5 from "../../assets/img/lhfh5.jpeg";
import image6 from "../../assets/img/lhfh6.jpeg";
import image7 from "../../assets/img/lhfh7.jpeg";
import image8 from "../../assets/img/lhfh8.jpeg";
import image9 from "../../assets/img/lhfh9.jpeg";
import image10 from "../../assets/img/lhfh10.png";


const images = [image1, image2, image4, image5, image6, image7, image8, image9, image10];

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

