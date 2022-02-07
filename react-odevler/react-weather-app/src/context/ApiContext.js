import { createContext } from "react";

const ApiContext = createContext();

export const ApiProvider = ({ children }) => {
  const API_KEY = process.env.REACT_APP_WEATHER_API_KEY;
  const values = {
    API_KEY,
  };
  return <ApiContext.Provider value={values}>{children}</ApiContext.Provider>;
};

export default ApiContext;
