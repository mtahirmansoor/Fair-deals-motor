import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom"; // Import Link for navigation

const Stock = () => {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const response = await axios.get("http://localhost:5000/api/cars");
        const carsWithParsedImages = response.data.map((car) => ({
          ...car,
          images: Array.isArray(car.images)
            ? car.images
            : typeof car.images === "string"
            ? JSON.parse(car.images)
            : [],
        }));

        setCars(carsWithParsedImages);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCars();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="container mx-auto p-6">
      <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">Car List</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car.id}
            className="bg-white border border-gray-200 rounded-lg shadow-md overflow-hidden flex flex-col transition-transform transform hover:scale-105"
          >
            <div className="flex-shrink-0">
              {Array.isArray(car.images) && car.images.length > 0 ? (
                <img
                  src={`http://localhost:5000/uploads/${car.images[0]}`} // First image
                  alt={`Car ${car.make} ${car.model}`}
                  className="w-full h-48 object-cover"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/150";
                  }}
                />
              ) : (
                <div className="w-full h-48 bg-gray-200 flex items-center justify-center">
                  <span className="text-gray-600">No Image</span>
                </div>
              )}
            </div>

            <div className="p-4 flex-1">
              <div className="flex justify-between items-center">
                <h2 className="text-green-500  font-bold text-gray-800">
               £{car.price}
                </h2>
                
               
              </div>
              <p className="font-semibold text-xl">
                {car.make} {car.model} ({car.year}) 
                </p>
              <p className="text-gray-600 mt-1">Mileage: {car.mileage} miles</p>
              <p className="text-gray-600">Color: {car.color}</p>
              <p className="text-gray-600">Fuel Type: {car.fuel_type}</p>
              <p className="text-gray-600">Condition: {car.carcondition}</p>

              <div className="mt-4">
                <Link
                  to={`/MoreInfo/${car.id}`} // Assuming the URL pattern for the car details page
                  className="text-blue-500 hover:underline"
                >
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300">
                    More Info
                  </button>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stock;
