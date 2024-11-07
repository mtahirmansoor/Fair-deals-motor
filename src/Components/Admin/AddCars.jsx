import React, { useState } from "react";
import axios from "axios";

const AddCars = () => {
  // State for all fields based on the schema
  const [make, setMake] = useState("");
  const [model, setModel] = useState("");
  const [year, setYear] = useState("");
  const [price, setPrice] = useState("");
  const [mileage, setMileage] = useState("");
  const [color, setColor] = useState("");
  const [fuel_type, setFuelType] = useState("");
  const [transmission, setTransmission] = useState("");
  const [body_type, setBodyType] = useState("");
  const [engine_size, setEngineSize] = useState("");
  const [features, setFeatures] = useState("");
  const [carcondition, setCondition] = useState("");
  const [vehicle_description, setVehicleDescription] = useState("");
  const [vehicle_details, setVehicleDetails] = useState([{ detail: "" }]);

  // Performance and specifications
  const [urban, setUrban] = useState("");
  const [extra_urban, setExtraUrban] = useState("");
  const [combined, setCombined] = useState("");
  const [emission, setEmission] = useState("");
  const [euro, setEuro] = useState("");
  const [insurance, setInsurance] = useState("");
  const [security, setSecurity] = useState("");
  const [max_power, setMaxPower] = useState("");
  const [max_torque, setMaxTorque] = useState("");
  const [valve_gear, setValveGear] = useState("");
  const [aspiration, setAspiration] = useState("");
  const [cylinders, setCylinders] = useState("");
  const [drive, setDrive] = useState("");
  const [cyl_arr, setCylArr] = useState("");
  const [gears, setGears] = useState("");
  const [dimensions, setDimensions] = useState("");
  const [max_weight, setMaxWeight] = useState("");

  const [images, setImages] = useState([]); // Store uploaded images as files

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Prepare form data for submission (using FormData object)
    const formData = new FormData();

    // Append fields to formData
    formData.append("make", make);
    formData.append("model", model);
    formData.append("year", year);
    formData.append("price", price);
    formData.append("mileage", mileage);
    formData.append("color", color);
    formData.append("fuel_type", fuel_type);
    formData.append("transmission", transmission);
    formData.append("body_type", body_type);
    formData.append("engine_size", engine_size);
    formData.append("features", features);
    formData.append("carcondition", carcondition);
    formData.append("vehicle_description", vehicle_description);
    formData.append("vehicle_details", JSON.stringify(vehicle_details));

    // Add performance and specification fields
    formData.append("urban", urban);
    formData.append("extra_urban", extra_urban);
    formData.append("combined", combined);
    formData.append("emission", emission);
    formData.append("euro", euro);
    formData.append("insurance", insurance);
    formData.append("security", security);
    formData.append("max_power", max_power);
    formData.append("max_torque", max_torque);
    formData.append("valve_gear", valve_gear);
    formData.append("aspiration", aspiration);
    formData.append("cylinders", cylinders);
    formData.append("drive", drive);
    formData.append("cyl_arr", cyl_arr);
    formData.append("gears", gears);
    formData.append("dimensions", dimensions);
    formData.append("max_weight", max_weight);

    // Append images if present
    if (images.length > 0) {
      for (let i = 0; i < images.length; i++) {
        formData.append("images", images[i]);
      }
    }

    try {
      const response = await axios.post(
        "http://localhost:5000/api/cars",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      alert("Car added successfully!");
      resetFormFields();
    } catch (error) {
      console.error(
        "Error adding car:",
        error.response ? error.response.data : error.message
      );
    }
  };

  // Add vehicle detail input dynamically
  const addVehicleDetail = () => {
    setVehicleDetails([...vehicle_details, { detail: "" }]);
  };

  // Handle vehicle detail change
  const handleVehicleDetailChange = (index, e) => {
    const updatedDetails = [...vehicle_details];
    updatedDetails[index][e.target.name] = e.target.value;
    setVehicleDetails(updatedDetails);
  };

  // Add image input dynamically
  const addImageInput = () => {
    setImages([...images, null]);
  };

  // Handle image change
  const handleImageChange = (index, e) => {
    const updatedImages = [...images];
    updatedImages[index] = e.target.files[0];
    setImages(updatedImages);
  };

  // Reset form fields
  const resetFormFields = () => {
    setMake("");
    setModel("");
    setYear("");
    setPrice("");
    setMileage("");
    setColor("");
    setFuelType("");
    setTransmission("");
    setBodyType("");
    setEngineSize("");
    setFeatures("");
    setCondition("");
    setImages([]);
    setVehicleDescription("");
    setVehicleDetails([{ detail: "" }]);
    setUrban("");
    setExtraUrban("");
    setCombined("");
    setEmission("");
    setEuro("");
    setInsurance("");
    setSecurity("");
    setMaxPower("");
    setMaxTorque("");
    setValveGear("");
    setAspiration("");
    setCylinders("");
    setDrive("");
    setCylArr("");
    setGears("");
    setDimensions("");
    setMaxWeight("");
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-2xl p-8 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">
          Add New Car
        </h2>
        <form onSubmit={handleSubmit} className="space-y-5">
          {/* General Car Info */}
          <div>
            <input
              type="text"
              placeholder="Make"
              value={make}
              onChange={(e) => setMake(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Model"
              value={model}
              onChange={(e) => setModel(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Year"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Price"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Mileage"
              value={mileage}
              onChange={(e) => setMileage(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Color"
              value={color}
              onChange={(e) => setColor(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Fuel Type"
              value={fuel_type}
              onChange={(e) => setFuelType(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Transmission"
              value={transmission}
              onChange={(e) => setTransmission(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Body Type"
              value={body_type}
              onChange={(e) => setBodyType(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Engine Size"
              value={engine_size}
              onChange={(e) => setEngineSize(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <textarea
              placeholder="Features"
              value={features}
              onChange={(e) => setFeatures(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <select
              value={carcondition}
              onChange={(e) => setCondition(e.target.value)}
              required
              className="w-full p-4 border border-gray-300 rounded-lg"
            >
              <option value="">Full Service History</option>

              <option value="New">New</option>
              <option value="Used">Used</option>
            </select>
          </div>

          {/* Performance and Specifications */}
          <div>
            <input
              type="number"
              placeholder="Urban Fuel Consumption"
              value={urban}
              onChange={(e) => setUrban(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Extra Urban Fuel Consumption"
              value={extra_urban}
              onChange={(e) => setExtraUrban(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Combined Fuel Consumption"
              value={combined}
              onChange={(e) => setCombined(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="CO2 Emission"
              value={emission}
              onChange={(e) => setEmission(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Euro Emission Standard"
              value={euro}
              onChange={(e) => setEuro(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Insurance Cost"
              value={insurance}
              onChange={(e) => setInsurance(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Security Features"
              value={security}
              onChange={(e) => setSecurity(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Max Power"
              value={max_power}
              onChange={(e) => setMaxPower(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Max Torque"
              value={max_torque}
              onChange={(e) => setMaxTorque(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Valve Gear"
              value={valve_gear}
              onChange={(e) => setValveGear(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Aspiration"
              value={aspiration}
              onChange={(e) => setAspiration(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Cylinders"
              value={cylinders}
              onChange={(e) => setCylinders(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Drive Type"
              value={drive}
              onChange={(e) => setDrive(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Cylinder Arrangement"
              value={cyl_arr}
              onChange={(e) => setCylArr(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Number of Gears"
              value={gears}
              onChange={(e) => setGears(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Dimensions"
              value={dimensions}
              onChange={(e) => setDimensions(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>
          <div>
            <input
              type="number"
              placeholder="Max Weight"
              value={max_weight}
              onChange={(e) => setMaxWeight(e.target.value)}
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Vehicle Description */}
          <div>
            <textarea
              placeholder="Vehicle Description"
              value={vehicle_description}
              onChange={(e) => setVehicleDescription(e.target.value)}
              rows="4"
              className="w-full p-4 border border-gray-300 rounded-lg"
            />
          </div>

          {/* Vehicle Details Section */}
          <div>
            {vehicle_details.map((detail, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="text"
                  name="detail"
                  value={detail.detail}
                  onChange={(e) => handleVehicleDetailChange(index, e)}
                  className="w-full p-4 border border-gray-300 rounded-lg"
                  placeholder={`Detail ${index + 1}`}
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addVehicleDetail}
              className="mt-2 text-blue-500"
            >
              Add Another Detail
            </button>
          </div>

          {/* Image Upload Section */}
          <div>
            {images.map((_, index) => (
              <div key={index} className="flex items-center space-x-2">
                <input
                  type="file"
                  onChange={(e) => handleImageChange(index, e)}
                  className="w-full p-4 border border-gray-300 rounded-lg"
                />
              </div>
            ))}
            <button
              type="button"
              onClick={addImageInput}
              className="mt-2 text-blue-500"
            >
              Add Another Image
            </button>
          </div>

          <button
            type="submit"
            className="w-full p-4 bg-blue-500 text-white font-semibold rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Add Car
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddCars;
