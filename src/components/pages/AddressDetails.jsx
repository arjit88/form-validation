import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useFormContext from "../../utils/UseFormContext";

const AddressDetails = () => {
  const { details, setDetails, setIsAddressSubmitted } = useFormContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsAddressSubmitted(true);
    navigate("/preferences");
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content area */}
      <section className="flex-1 flex justify-center items-center bg-white dark:bg-gray-900 py-10 px-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <h1 className="text-4xl font-bold mb-6 text-center text-black dark:text-white">
            Address Details
          </h1>

          {/* Form */}
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label
                htmlFor="addresss"
                className="block text-sm font-medium text-black dark:text-white"
              >
                Addresss
              </label>
              <input
                type="text"
                id="addresss"
                className="w-full px-4 py-2 mt-1 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-black dark:text-white"
                placeholder="Enter your address"
                value={details.addresss}
                onChange={(e) =>
                  setDetails((prev) => ({ ...prev, addresss: e.target.value }))
                }
              />
            </div>

            <div>
              <label
                htmlFor="city"
                className="block text-sm font-medium text-black dark:text-white"
              >
                City
              </label>
              <input
                type="text"
                id="city"
                className="w-full px-4 py-2 mt-1 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-black dark:text-white"
                placeholder="Enter your city"
                value={details.city}
                onChange={(e) =>
                  setDetails((prev) => ({ ...prev, city: e.target.value }))
                }
              />

              <div className="flex justify-between mt-8">
                <Link
                  to="/"
                  className="bg-gray-600 text-white py-2 px-6 rounded-md hover:bg-gray-700 transition-colors duration-300"
                >
                  Previous Page
                </Link>
                <button
                  type="submit"
                  className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300"
                >
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default AddressDetails;
