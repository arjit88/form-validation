import { useContext } from "react";
import { Context } from "./FormContext";

const useFormContext = () => {
  return useContext(Context);
};

export default useFormContext;
