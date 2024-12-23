import React from "react";
import { Link } from "react-router-dom";

const PersonalInfo = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content area */}
      <section className="flex-1 flex justify-center items-center bg-white dark:bg-gray-900 py-10 px-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <h1 className="text-4xl font-bold mb-6 text-center text-black dark:text-white">
            Personal Information
          </h1>

          {/* Form */}
          <form className="space-y-6">
            <div>
              <label
                htmlFor="name"
                className="block text-sm font-medium text-black dark:text-white"
              >
                Username
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 mt-1 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-black dark:text-white"
                placeholder="Enter your name"
              />
            </div>

            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-black dark:text-white"
              >
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 mt-1 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-black dark:text-white"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black dark:text-white"
              >
                Email
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 mt-1 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-black dark:text-white"
                placeholder="Enter your password"
              />
            </div>
          </form>

          {/* Submit Button */}
          <div className="flex justify-center mt-8">
            <Link
              to="/address"
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

export default PersonalInfo;
