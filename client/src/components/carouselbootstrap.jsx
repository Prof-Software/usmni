import React, { useState, useEffect } from "react";
import "./Carousel.css";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import Bg from "../assets/Final-Round-2.png";
import AboutUsPage from './aboutus/aboutus';
import SetPage from './SetPage';
import SliderComponent from './Gallery';
import Selection from './teams2/Selection';
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
    setCurrentSlide(currentSlide !== 0 ? currentSlide - 1 : 0);
  };

  console.log(currentSlide);
  return (
    <div className="flex mt-14 items-center justify-center flex-col" id="team">
      <div className="w-full flex items-center justify-center gap-5">
        <button className=" cursor-pointer text-gray-400  hidden md:block  bg-white rounded-full shadow-lg p-2 z-20">
          <FaChevronLeft
            onClick={() => {
              prevSlide();
            }}
            size={40}
          />
        </button>

        <div className="carousel-container w-[100%] md:w-2/3 h-[600px] bg-gray-500 ">
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
        <button className="hidden cursor-pointer text-gray-400 md:block  bg-white rounded-full shadow-lg p-2 z-20">
          <FaChevronRight
            onClick={() => {
              nextSlide();
            }}
            size={40}
          />
        </button>
      </div>
      <div className="flex md:hidden items-center mt-4 justify-center text-center">
        <h1 className="text-7xl">NIT Allahbad Enactus</h1>
      </div>
      <div className="hidden md:flex mt-14 mb-7  items-center justify-center gap-9" style={{ backgroundImage: `url(${Bg})`, backgroundSize: 'cover', backgroundPosition: 'center', width: '100%', height: '50vh' }}>
        <img src="https://scontent.fdel25-2.fna.fbcdn.net/v/t39.30808-6/302478637_455589929918816_1569535897626458244_n.jpg?stp=dst-jpg_p600x600&_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=x5ZZifSySzIAX_nZ80j&_nc_ht=scontent.fdel25-2.fna&oh=00_AfBkvuQzgqmip_bVyb-LPBsnv9zQzrxHyB6qjW07gRyMxQ&oe=660F179E" alt="mnnit allahbad" className="w-[500px] shadow-xl rounded-md h-[300px] object-cover" />
        <div className="hidden w-[30%] gap-2 md:flex items-center mt-4 justify-center flex-col text-center">
          <h1 className="text-7xl text-gray-700">NIT Allahbad Enactus</h1>
          <p className="text-gray-500">
            Lorem ipsum dolor sit amet consectetur adipisicinbg elit. Nobis
            architecto, ipsum error corporis expedita sunt incidunt voluptatibus
            accusantium aut debitis voluptate nostrum repellendus aperiam harum
            beatae quisquam distinctio tempore placeat!
          </p>
          <a
            href={"/about"}
            className="bg-[#FFC222] font-bold rounded-lg p-3 text-black w-[300px] mt-4"
          >
            Learn More
          </a>
        </div>
      </div>
        <AboutUsPage/>
    </div>
  );
};

export default Carousel;
