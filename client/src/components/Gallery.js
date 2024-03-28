import React, { useRef } from "react";
import Slider from "react-slick";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"; // Importing icons
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Gallery from "./Page";

const SliderComponent = () => {
  const sliderRef = useRef(null); // Reference to the Slider component

  // Function to handle clicking on the previous arrow
  const goToPrevSlide = () => {
    sliderRef.current.slickPrev(); // Call slickPrev method to navigate to the previous slide
  };

  // Function to handle clicking on the next arrow
  const goToNextSlide = () => {
    sliderRef.current.slickNext(); // Call slickNext method to navigate to the next slide
  };

  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
  };

  return (
    <div>
      <div className="absolute bg-white rounded-full shadow-lg p-2 left-[9rem] top-[26rem] z-20" onClick={goToPrevSlide}>
        <FaChevronLeft size={40} />
      </div>
      <div className="absolute bg-white rounded-full shadow-lg p-2 left-[83rem] top-[26rem] z-20" onClick={goToNextSlide}>
        <FaChevronRight size={40} />
      </div>
      <Slider ref={sliderRef} {...settings}>
        <div>
          <Gallery title="Project-Sahyog" id="1" />
        </div>
        <div>
          <Gallery title="Project-Sahyog" id="2" />
        </div>
        <div>
          <Gallery title="Project-Samvesh" id="3" />
        </div>
        <div>
          <Gallery title="Project-Samvesh" id="4" />
        </div>
        <div>
          <Gallery title="Project-Samvesh" id="5" />
        </div>
        <div>
          <Gallery title="Project-Moonj" id="6" />
        </div>
        <div>
          <Gallery title="Project-Neer" id="7" />
        </div>
        <div>
          <Gallery title="Project-Neer" id="8" />
        </div>
        <div>
          <Gallery title="Alumni-Meet" id="9" />
        </div>
      </Slider>
    </div>
  );
};

export default SliderComponent;
