import { createContext, useState } from "react";

export const Context = createContext();

const FormContext = ({ children }) => {
  const [inputs, setInputs] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const value = {
    inputs,
    setInputs,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default FormContext;
