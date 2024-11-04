import React from "react";
import Slider from "react-slick";
import Image1 from "../../assets/Logo/Logow.png";
import Image2 from "../../assets/Header/image2.jpg";
import Image3 from "../../assets/Header/image3.jpg";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { FaCar } from "react-icons/fa"; // Importing car icon

// Custom arrow component for the left arrow
const PrevArrow = ({ style, onClick }) => (
  <div
    className={`absolute top-1/2 left-4 transform -translate-y-1/2 z-10 cursor-pointer`}
    style={{ ...style }}
    onClick={onClick}
  >
    <FaChevronLeft className="text-white text-3xl sm:text-4xl md:text-5xl transition-transform duration-300 hover:scale-125 hover:text-gray-300" />
  </div>
);

// Custom arrow component for the right arrow
const NextArrow = ({ style, onClick }) => (
  <div
    className={`absolute top-1/2 right-4 transform -translate-y-1/2 z-10 cursor-pointer`}
    style={{ ...style }}
    onClick={onClick}
  >
    <FaChevronRight className="text-white text-3xl sm:text-4xl md:text-5xl transition-transform duration-300 hover:scale-125 hover:text-gray-300" />
  </div>
);

// Reusable Weekly Schedule Component
const WeeklySchedule = () => (
  <div className="absolute bottom-0 left-0 w-full bg-black bg-opacity-75 p-4 text-white">
    <h3 className="text-sm sm:text-lg md:text-lg font-bold text-center">
      Garage Timings
    </h3>
    <ul className="py-2 text-xs sm:text-sm md:text-sm space-y-1 sm:space-y-2">
      <li className="flex justify-between">
        <span>Monday</span>
        <span>9am - 5pm</span>
      </li>
      <li className="flex justify-between">
        <span>Tuesday</span>
        <span>9am - 5pm</span>
      </li>
      <li className="flex justify-between">
        <span>Wednesday</span>
        <span>9am - 5pm</span>
      </li>
      <li className="flex justify-between">
        <span>Thursday</span>
        <span>9am - 5pm</span>
      </li>
      <li className="flex justify-between">
        <span>Friday</span>
        <span>9am - 5pm</span>
      </li>
      <li className="flex justify-between">
        <span>Saturday</span>
        <span>10am - 4pm</span>
      </li>
      <li className="flex justify-between">
        <span>Sunday</span>
        <span>Closed</span>
      </li>
    </ul>
  </div>
);

const Tagline = () => (
  <div className="absolute top-4 right-4 bg-black bg-opacity-75 p-3 text-white rounded-lg flex items-center">
    <span className="font-bold text-lg flex items-center">
      We Buy <FaCar className="text-2xl mx-2" /> for £
    </span>
  </div>
);

const Header = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    prevArrow: <PrevArrow />,
    nextArrow: <NextArrow />,
  };

  return (
    <header className="relative w-full h-screen overflow-hidden">
      <Slider {...settings} className="h-full">
      <div className="relative h-screen w-full overflow-hidden">
  <img
    src={Image1}
    alt="Slide 1"
    className="absolute inset-0 w-full h-full object-cover bg-black" // Make sure the image fills the container
  />
  <Tagline />
  <WeeklySchedule />
</div>

        <div className="relative h-screen">
          <img
            src={Image2}
            alt="Slide 2"
            className="w-full h-full object-cover"
          />
          <Tagline />
          <WeeklySchedule />
        </div>
        <div className="relative h-screen">
          <img
            src={Image3}
            alt="Slide 3"
            className="w-full h-full object-cover"
          />
          <Tagline />
          <WeeklySchedule />
        </div>
      </Slider>
    </header>
  );
};

export default Header;
