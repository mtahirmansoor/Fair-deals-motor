import React, { useState } from 'react';

const SellYourCar = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    makeModel: '',
    registration: '',
    mileage: '',
    transmission: '',
    fuelType: '',
    exteriorColor: '',
    interiorColor: '',
    fullServiceHistory: '',
    condition: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleCheckboxChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: prev[name] === value ? '' : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Perform form submission logic, e.g., sending data to the backend
    console.log(formData);

    // Example: You can use fetch or axios to send the data to the backend
    // fetch('/your-endpoint', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(formData),
    // });
  };

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold text-center mb-4">Sell Your Car</h2>
      <form onSubmit={handleSubmit}>
        {/* Personal Information */}
        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Phone</label>
            <input
              type="text"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Address</label>
            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
        </div>

        {/* Vehicle Details */}
        <div className="mt-8 space-y-4">
          <h3 className="text-xl font-semibold">Your Vehicle Details</h3>
          <div>
            <label className="block text-sm font-medium text-gray-700">Make & Model</label>
            <input
              type="text"
              name="makeModel"
              value={formData.makeModel}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Registration</label>
            <input
              type="text"
              name="registration"
              value={formData.registration}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Mileage</label>
            <input
              type="number"
              name="mileage"
              value={formData.mileage}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Transmission */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Transmission</label>
            <div className="flex gap-4">
              <div>
                <input
                  type="checkbox"
                  name="transmission"
                  value="auto"
                  checked={formData.transmission === 'auto'}
                  onChange={handleCheckboxChange}
                  id="auto"
                />
                <label htmlFor="auto" className="ml-2 text-sm text-gray-700">Automatic</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="transmission"
                  value="manual"
                  checked={formData.transmission === 'manual'}
                  onChange={handleCheckboxChange}
                  id="manual"
                />
                <label htmlFor="manual" className="ml-2 text-sm text-gray-700">Manual</label>
              </div>
            </div>
          </div>

          {/* Fuel Type */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Fuel Type</label>
            <select
              name="fuelType"
              value={formData.fuelType}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Fuel Type</option>
              <option value="petrol">Petrol</option>
              <option value="diesel">Diesel</option>
              <option value="electric">Electric</option>
              <option value="hybrid">Hybrid</option>
            </select>
          </div>

          {/* Exterior and Interior Color */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Exterior Color</label>
              <input
                type="text"
                name="exteriorColor"
                value={formData.exteriorColor}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Interior Color</label>
              <input
                type="text"
                name="interiorColor"
                value={formData.interiorColor}
                onChange={handleChange}
                className="mt-1 p-2 w-full border border-gray-300 rounded-md"
                required
              />
            </div>
          </div>

          {/* Full Service History */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Service History</label>
            <div className="flex gap-4">
              <div>
                <input
                  type="checkbox"
                  name="fullServiceHistory"
                  value="yes"
                  checked={formData.fullServiceHistory === 'yes'}
                  onChange={handleCheckboxChange}
                  id="yes"
                />
                <label htmlFor="yes" className="ml-2 text-sm text-gray-700">Yes</label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="fullServiceHistory"
                  value="no"
                  checked={formData.fullServiceHistory === 'no'}
                  onChange={handleCheckboxChange}
                  id="no"
                />
                <label htmlFor="no" className="ml-2 text-sm text-gray-700">No</label>
              </div>
            </div>
          </div>

          {/* Condition */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Condition</label>
            <select
              name="condition"
              value={formData.condition}
              onChange={handleChange}
              className="mt-1 p-2 w-full border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Condition</option>
              <option value="new">New</option>
              <option value="good">Good</option>
              <option value="fair">Fair</option>
              <option value="poor">Poor</option>
            </select>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="mt-6 w-full p-3 bg-blue-500 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default SellYourCar;
