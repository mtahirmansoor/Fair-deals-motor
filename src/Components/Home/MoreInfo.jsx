import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { FaCheckCircle } from "react-icons/fa"; // Import tick icon
import { motion } from "framer-motion"; // Import Framer Motion for animation
import Slider from "react-slick"; // Import react-slick

const MoreInfo = () => {
  const { id } = useParams(); // Get the car ID from the URL
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("tech"); // Default to "tech" tab

  // Fetch car details
  useEffect(() => {
    const fetchCarDetails = async () => {
      try {
        const response = await axios.get(`http://localhost:5000/api/cars/${id}`);
        const carData = response.data;

        const carWithParsedImages = {
          ...carData,
          images: Array.isArray(carData.images)
            ? carData.images
            : typeof carData.images === "string"
            ? JSON.parse(carData.images)
            : [],
          vehicle_details: Array.isArray(carData.vehicle_details)
            ? carData.vehicle_details
            : carData.vehicle_details && typeof carData.vehicle_details === "string"
            ? JSON.parse(carData.vehicle_details)
            : [],
        };

        setCar(carWithParsedImages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCarDetails();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  // Render content based on the active tab
  const renderTabContent = () => {
    if (activeTab === "moreDetails") {
      return (
        <div className="bg-gray-100 p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold mb-2">Vehicle Description</h2>
          <p className="text-gray-700 mb-4">{car.vehicle_description}</p>

          <h3 className="text-xl font-semibold mb-2">Details</h3>
          <ul className="list-none pl-0">
            {car.vehicle_details && car.vehicle_details.length > 0 ? (
              car.vehicle_details.map((item, index) => (
                <li key={index} className="flex items-center mb-2 text-gray-700">
                  <FaCheckCircle className="text-green-500 mr-2" />
                  {item.detail}
                </li>
              ))
            ) : (
              <li>No details available.</li>
            )}
          </ul>
        </div>
      );
    } else if (activeTab === "techSpecifications") {
      return (
        <motion.div
          className="bg-gray-100 p-6 rounded-lg shadow-md"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-2xl font-semibold mb-2">Vehicle Specifications</h2>

          {/* Animated Specifications */}
          <div className="mt-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Dynamic specifications rendering */}
              {[
                { label: "Urban Fuel Consumption", value: `${car.urban} L/100km`, color: "blue" },
                { label: "Extra Urban Fuel Consumption", value: `${car.extra_urban} L/100km`, color: "blue" },
                { label: "Combined Fuel Consumption", value: `${car.combined} L/100km`, color: "blue" },
                { label: "Max Power", value: `${car.max_power} hp`, color: "blue" },
                { label: "Max Torque", value: `${car.max_torque} Nm`, color: "blue" },
                { label: "CO2 Emissions", value: `${car.emission} g/km`, color: "blue" },
                { label: "Euro Standard", value: car.euro, color: "blue" },
                { label: "Insurance Cost", value: `£ ${car.insurance}`, color: "blue" },
                { label: "Security", value: car.security, color: "blue" },
                { label: "Valve Gear", value: car.valve_gear, color: "blue" },
                { label: "Aspiration", value: car.aspiration, color: "blue" },
                { label: "Cylinders", value: car.cylinders, color: "blue" },
                { label: "Drive", value: car.drive, color: "blue" },
                { label: "Cylinder Arrangement", value: car.cyl_arr, color: "blue" },
                { label: "Gears", value: car.gears, color: "blue" },
                { label: "Dimensions", value: car.dimensions, color: "blue" },
                { label: "Max Weight", value: `${car.max_weight} kg`, color: "blue" },
              ].map((spec, index) => (
                <motion.p
                  key={index}
                  className={`flex items-center text-sm md:text-base ${
                    spec.color === "blue" ? "text-blue-500" : "text-blue"
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.2 }}
                >
                  <strong>{spec.label}:</strong>{" "}
                  <motion.span
                    className="ml-2"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 100 }}
                  >
                    {spec.value}
                  </motion.span>
                </motion.p>
              ))}
            </div>
          </div>
        </motion.div>
      );
    }
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
  };

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-semibold mb-4">
        {car.make} {car.model} Details
      </h1>

      {/* Image Section with Slider */}
      <div className="mb-6">
        <Slider {...settings}>
          {car.images && car.images.length > 0 ? (
            car.images.map((image, index) => (
              <div key={index}>
                <img
                  src={`http://localhost:5000/uploads/${image}`}
                  alt={`${car.make} ${car.model}`}
                  className="w-full rounded-lg shadow-md cursor-pointer"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/400";
                  }}
                
                />
              </div>
            ))
          ) : (
            <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-600">No Image Available</span>
            </div>
          )}
        </Slider>
      </div>

      {/* Tabs for Tech and Specifications */}
      <div className="flex gap-6 mb-6">
        <button
          className={`px-4 py-2 rounded-lg ${activeTab === "moreDetails" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("moreDetails")}
        >
          More Details
        </button>
        <button
          className={`px-4 py-2 rounded-lg ${activeTab === "techSpecifications" ? "bg-blue-500 text-white" : "bg-gray-200"}`}
          onClick={() => setActiveTab("techSpecifications")}
        >
          Tech Specifications
        </button>
      </div>

      {/* Tab Content */}
      {renderTabContent()}
    </div>
  );
};

export default MoreInfo;
