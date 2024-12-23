import { createContext, useState } from "react";

export const Context = createContext();

const FormContext = ({ children }) => {
  const [inputs, setInputs] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const [details, setDetails] = useState({
    addresss: "",
    city: "",
  });

  const [preferences, setPreferences] = useState({
    isHired: false,
    notificationsEnabled: false,
  });

  const [isPersonalInfoSubmitted, setIsPersonalInfoSubmitted] = useState(false);
  const [isAddressSubmitted, setIsAddressSubmitted] = useState(false);
  const [isPreferencesSubmitted, setIsPreferencesSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  // Reset function to clear all fields
  const resetForm = () => {
    setInputs({
      userName: "",
      email: "",
      password: "",
    });
    setDetails({
      addresss: "",
      city: "",
    });
    setPreferences({
      isHired: false,
      notificationsEnabled: false,
    });
    setIsPersonalInfoSubmitted(false);
    setIsAddressSubmitted(false);
    setIsPreferencesSubmitted(false);
  };

  const value = {
    inputs,
    setInputs,
    details,
    setDetails,
    preferences,
    setPreferences,
    isPersonalInfoSubmitted,
    setIsPersonalInfoSubmitted,
    isAddressSubmitted,
    setIsAddressSubmitted,
    isPreferencesSubmitted,
    setIsPreferencesSubmitted,
    isLoading,
    setIsLoading,
    resetForm,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default FormContext;
