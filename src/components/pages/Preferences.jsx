import React from "react";
import { Link, useNavigate } from "react-router-dom";
import useFormContext from "../../utils/UseFormContext";

const Preferences = () => {
  const {
    preferences,
    setPreferences,
    setIsPreferencesSubmitted,
    isLoading,
    setIsLoading,
  } = useFormContext();
  const navigate = useNavigate(); // Initialize navigate hook

  const handleCheckboxChange = (e) => {
    const { id, checked } = e.target;
    setPreferences((prev) => ({ ...prev, [id]: checked }));
  };

  const handleSubmit = () => {
    setIsLoading(true); // Show loader
    setIsPreferencesSubmitted(true);

    // Simulate loading delay
    setTimeout(() => {
      setIsLoading(false);
      navigate("/review");
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content area */}
      <section className="flex-1 flex justify-center items-center bg-white dark:bg-gray-900 py-10 px-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <h1 className="text-4xl font-bold mb-6 text-center text-black dark:text-white">
            Preferences
          </h1>

          {/* Preferences Form */}
          <div className="space-y-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="isHired"
                className="mr-2 text-blue-600 dark:text-blue-400"
                checked={preferences.isHired}
                onChange={handleCheckboxChange}
              />
              <label
                htmlFor="isHired"
                className="text-sm font-medium text-black dark:text-white"
              >
                Are you hired
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="notificationsEnabled"
                className="mr-2 text-blue-600 dark:text-blue-400"
                checked={preferences.notificationsEnabled}
                onChange={handleCheckboxChange}
              />
              <label
                htmlFor="notificationsEnabled"
                className="text-sm font-medium text-black dark:text-white"
              >
                Are you willing to work
              </label>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-8">
            <Link
              to="/address"
              className="bg-gray-600 text-white py-2 px-6 rounded-md hover:bg-gray-700 transition-colors duration-300"
            >
              Previous Page
            </Link>
            <button
              type="button"
              onClick={handleSubmit}
              className={`bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 relative flex items-center justify-center ${
                isLoading ? "cursor-not-allowed opacity-75" : ""
              }`}
              disabled={isLoading}
            >
              {isLoading ? (
                <div
                  className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"
                  aria-label="Loading"
                ></div>
              ) : (
                "Submit"
              )}
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Preferences;
