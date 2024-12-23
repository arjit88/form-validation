import React from "react";
import useFormContext from "../../utils/UseFormContext";

const ReviewSubmit = () => {
  const {
    inputs,
    details,
    preferences,
    isPersonalInfoSubmitted,
    isAddressSubmitted,
    isPreferencesSubmitted,
    isLoading,
    setIsLoading,
  } = useFormContext();

  // Simulate loading when clicking the submit button
  const handleSubmit = () => {
    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      alert("Form Submitted!");
    }, 2000);
  };

  if (
    !isPersonalInfoSubmitted ||
    !isAddressSubmitted ||
    !isPreferencesSubmitted
  ) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white">
        <p>Please complete all sections before reviewing.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white dark:bg-gray-900 text-black dark:text-white py-10 px-4">
      <div className="w-full max-w-3xl bg-gray-100 dark:bg-gray-800 p-6 rounded-lg shadow-md">
        <h1 className="text-4xl font-bold mb-6 text-center">Review & Submit</h1>

        {/* Personal Information Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Personal Information</h2>
          <p className="text-sm">
            <strong>Username:</strong> {inputs.userName}
          </p>
          <p className="text-sm">
            <strong>Email:</strong> {inputs.email}
          </p>
          <p className="text-sm">
            <strong>Password:</strong> {inputs.password}
          </p>
        </div>

        {/* Address Details Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Address Details</h2>
          <p className="text-sm">
            <strong>Address:</strong> {details.addresss}
          </p>
          <p className="text-sm">
            <strong>City:</strong> {details.city}
          </p>
        </div>

        {/* Preferences Section */}
        <div className="mb-6">
          <h2 className="text-2xl font-semibold mb-2">Preferences</h2>
          <p className="text-sm">
            <strong>Are you hired:</strong> {preferences.isHired ? "Yes" : "No"}
          </p>
          <p className="text-sm">
            <strong>Enable Notifications:</strong>{" "}
            {preferences.notificationsEnabled ? "Yes" : "No"}
          </p>
        </div>

        {/* Submit Button with Loading Spinner */}
        <div className="flex justify-center">
          <button
            className={`bg-blue-600 text-white py-2 px-6 rounded-md hover:bg-blue-700 transition-colors duration-300 relative flex items-center justify-center ${
              isLoading ? "cursor-not-allowed opacity-75" : ""
            }`}
            onClick={handleSubmit}
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
    </div>
  );
};

export default ReviewSubmit;
