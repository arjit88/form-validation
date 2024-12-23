import React from "react";
import { Link } from "react-router-dom";

const ReviewSubmit = () => {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Main content area */}
      <section className="flex-1 flex justify-center items-center bg-white dark:bg-gray-900 py-10 px-4">
        <div className="w-full max-w-md">
          {/* Header */}
          <h1 className="text-4xl font-bold mb-6 text-center text-black dark:text-white">
            Review & Submit
          </h1>

          {/* Review Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-xl font-semibold text-black dark:text-white">
                Personal Information
              </h2>
              <p className="text-sm text-black dark:text-white">
                Username: John Doe
              </p>
              <p className="text-sm text-black dark:text-white">
                Email: johndoe@example.com
              </p>
              <p className="text-sm text-black dark:text-white">
                Password: 12345678
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black dark:text-white">
                Address Details
              </h2>
              <p className="text-sm text-black dark:text-white">
                Address: 1234 Main St
              </p>
              <p className="text-sm text-black dark:text-white">
                City: New York
              </p>
            </div>

            <div>
              <h2 className="text-xl font-semibold text-black dark:text-white">
                Preferences
              </h2>
              <p className="text-sm text-black dark:text-white">
                Are you hired: Yes
              </p>
              <p className="text-sm text-black dark:text-white">
                Enable Notifications: Yes
              </p>
            </div>
          </div>

          {/* Buttons */}
          <div className="flex justify-between mt-8">
            <Link
              to="/preferences"
              className="bg-gray-600 text-white py-2 px-6 rounded-md hover:bg-gray-700 transition-colors duration-300"
            >
              Previous Page
            </Link>
            <Link
              to="/"
              className="bg-green-600 text-white py-2 px-6 rounded-md hover:bg-green-700 transition-colors duration-300"
            >
              Submit
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center">
        <p className="text-sm">&copy; 2024 MyApp. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default ReviewSubmit;
