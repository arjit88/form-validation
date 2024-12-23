import React from "react";
import { useNavigate } from "react-router-dom";
import useFormContext from "../../utils/UseFormContext";

const PersonalInfo = () => {
  const {
    inputs,
    setInputs,
    setIsPersonalInfoSubmitted,
    isLoading,
    setIsLoading,
  } = useFormContext();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setIsPersonalInfoSubmitted(true);

    // Simulate a delay before navigating
    setTimeout(() => {
      setIsLoading(false);
      navigate("/address");
    }, 2000);
  };

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
          <form className="space-y-6" onSubmit={handleSubmit}>
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
                required
                value={inputs.userName}
                onChange={(e) =>
                  setInputs((prev) => ({ ...prev, userName: e.target.value }))
                }
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
                required
                value={inputs.email}
                onChange={(e) =>
                  setInputs((prev) => ({ ...prev, email: e.target.value }))
                }
              />
            </div>

            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-black dark:text-white"
              >
                Password
              </label>
              <input
                type="password"
                id="password"
                className="w-full px-4 py-2 mt-1 rounded-md bg-gray-100 dark:bg-gray-700 border border-gray-300 dark:border-gray-600 text-black dark:text-white"
                placeholder="Enter your password"
                required
                value={inputs.password}
                onChange={(e) =>
                  setInputs((prev) => ({ ...prev, password: e.target.value }))
                }
              />

              <div className="flex justify-center mt-8">
                <button
                  type="submit"
                  className={`bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 relative flex items-center justify-center ${
                    isLoading ? "cursor-not-allowed opacity-75" : ""
                  }`}
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <span
                      className="w-5 h-5 border-2 border-t-transparent border-white rounded-full animate-spin"
                      aria-label="Loading"
                    ></span>
                  ) : (
                    "Submit"
                  )}
                </button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
};

export default PersonalInfo;
