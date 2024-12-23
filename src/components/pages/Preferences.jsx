import React from "react";
import { Link } from "react-router-dom";

const Preferences = () => {
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
                id="areyouhired"
                className="mr-2 text-blue-600 dark:text-blue-400"
              />
              <label
                htmlFor="areyouhired"
                className="text-sm font-medium text-black dark:text-white"
              >
                Are you hired
              </label>
            </div>

            <div className="flex items-center">
              <input
                type="checkbox"
                id="notifications"
                className="mr-2 text-blue-600 dark:text-blue-400"
              />
              <label
                htmlFor="notifications"
                className="text-sm font-medium text-black dark:text-white"
              >
                Enable Notifications
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
            <Link
              to="/review"
              className="bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300"
            >
              Submit
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Preferences;
