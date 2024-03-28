import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = () => {
  const [slides, setSlides] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const fetchSlides = async () => {
      try {
        // Fetch data from the Sanity API directly
        const response = await fetch(
          "https://la7e5sle.api.sanity.io/v2021-10-21/data/query/production?query=*%5B_type%20%3D%3D%20%22blog%22%5D"
        );
        const data = await response.json();

        // Check if data.result is an array before setting slides
        if (Array.isArray(data.result)) {
          console.log(data.result);
          setSlides(data.result);
        } else {
          console.error(
            "Data received from the API does not contain an array of blog entries."
          );
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchSlides();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 8000); // Change slide every 8 seconds

    return () => clearInterval(interval);
  }, [currentSlide]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };
  const prevSlide = () => {
    setCurrentSlide(
      currentSlide !== 0 ? currentSlide - 1 : 0
    );
  };

  console.log(currentSlide)
  return (
    <div className="flex h-[95vh] items-center justify-center flex-col">
      <div className="w-full flex items-center justify-center gap-5">
      <button className=" cursor-pointer hidden md:block  bg-white rounded-full shadow-lg p-2 z-20"  >
        <FaChevronLeft onClick={()=>{prevSlide()}} size={40} />
      </button>
      
        <div className="carousel-container w-[100%] md:w-1/2 bg-gray-500 ">
          <div className="carousel ">
            {slides.map((slide, index) => (
              <img
                key={index}
                src={
                  slide.link
                    ? slide.link
                    : "https://pixsector.com/cache/517d8be6/av5c8336583e291842624.png"
                }
                alt={slide.title}
                className={
                  index === currentSlide
                    ? "slide"
                    : "slide slide-hidden bg-black"
                }
                style={{ width: "100%", height: "100%" }}
              />
            ))}
          </div>
        </div>
        <button className="hidden cursor-pointer md:block  bg-white rounded-full shadow-lg p-2 z-20"  >
        <FaChevronRight onClick={()=>{nextSlide()}} size={40} />
      </button>
      <div className="hidden w-[30%] gap-2 md:flex items-center mt-4 justify-center flex-col text-center">
        <h1 className="text-7xl">NIT Allahbad Enactus</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicinbg elit. Nobis architecto, ipsum error corporis expedita sunt incidunt voluptatibus accusantium aut debitis voluptate nostrum repellendus aperiam harum beatae quisquam distinctio tempore placeat!</p>
        <a href={"/about"} className="bg-[#FFC222] font-bold rounded-lg p-3 text-white">Learn More</a>

      </div>
      </div>
      <div className="flex md:hidden items-center mt-4 justify-center text-center">
        <h1 className="text-7xl">NIT Allahbad Enactus</h1>
      </div>
    </div>
  );
};

export default Carousel;
