import { createContext, useState } from "react";

export const Context = createContext();

const FormContext = ({ children }) => {
  const [input, setInput] = useState({
    userName: "",
    email: "",
    password: "",
  });

  const value = {
    input,
    setInput,
  };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};

export default FormContext;
