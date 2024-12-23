import React, { useState, useEffect } from "react";
import { CiLight } from "react-icons/ci";
import { IoIosMoon } from "react-icons/io";
import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // Check local storage for user's dark mode preference on page load
  useEffect(() => {
    const savedMode = localStorage.getItem("darkMode");
    if (savedMode) {
      setDarkMode(savedMode === "true");
    }
  }, []);

  // Toggle dark mode and store preference in localStorage
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem("darkMode", !darkMode);
  };

  // Apply the dark class to the element based on the darkMode state
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header
      className={`text-white shadow-md ${
        darkMode ? "bg-gray-800" : "bg-blue-500"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo */}
        <div className="text-2xl font-semibold tracking-tight">
          <Link to="/">MyApp</Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex space-x-6">
          <Link
            to="/"
            className={`${
              location.pathname === "/"
                ? "text-yellow-600"
                : "hover:text-gray-300"
            } transition-colors duration-300`}
          >
            Personal Information
          </Link>
          <Link
            to="/address"
            className={`${
              location.pathname === "/address"
                ? "text-yellow-600"
                : "hover:text-gray-300"
            } transition-colors duration-300`}
          >
            Address Details
          </Link>
          <Link
            to="/preferences"
            className={`${
              location.pathname === "/preferences"
                ? "text-yellow-600"
                : "hover:text-gray-300"
            } transition-colors duration-300`}
          >
            Preferences
          </Link>
          <Link
            to="/review"
            className={`${
              location.pathname === "/review"
                ? "text-yellow-600"
                : "hover:text-gray-300"
            } transition-colors duration-300`}
          >
            Review & Submit
          </Link>
        </nav>

        {/* Dark Mode Toggle Button */}
        <button
          className={`p-2 rounded-full ${
            darkMode ? "bg-gray-600 text-gray-200" : "bg-blue-400 text-gray-800"
          } transition-colors duration-300`}
          onClick={toggleDarkMode}
        >
          {darkMode ? (
            <CiLight className="h-6 w-6" />
          ) : (
            <IoIosMoon className="h-6 w-6 text-white" />
          )}
        </button>

        {/* Hamburger Menu (for mobile) */}
        <div className="lg:hidden">
          <button
            className={`text-white p-2 rounded-md ${
              darkMode ? "hover:bg-gray-700" : "hover:bg-blue-600"
            }`}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              strokeWidth="2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {menuOpen && (
        <div
          className={`lg:hidden ${
            darkMode ? "bg-gray-700" : "bg-blue-600"
          } text-white`}
        >
          <nav className="flex flex-col items-center py-4 space-y-4">
            <Link
              to="/"
              className={`${
                location.pathname === "/"
                  ? "text-yellow-600"
                  : "hover:text-gray-300"
              } transition-colors duration-300`}
            >
              Personal Information
            </Link>
            <Link
              to="/address"
              className={`${
                location.pathname === "/address"
                  ? "text-yellow-600"
                  : "hover:text-gray-300"
              } transition-colors duration-300`}
            >
              Address Details
            </Link>
            <Link
              to="/preferences"
              className={`${
                location.pathname === "/preferences"
                  ? "text-yellow-600"
                  : "hover:text-gray-300"
              } transition-colors duration-300`}
            >
              Preferences
            </Link>
            <Link
              to="/review"
              className={`${
                location.pathname === "/review"
                  ? "text-yellow-600"
                  : "hover:text-gray-300"
              } transition-colors duration-300`}
            >
              Review & Submit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
