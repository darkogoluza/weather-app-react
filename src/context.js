import React, { useContext, useState } from "react";
import { dummyData } from "./dummyData";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [currentDayForecastIndex, setCurrentDayForecastIndex] = useState(0);
  const handleWeekItemClick = (index) => {
    setCurrentDayForecastIndex(index);
  };
  return (
    <AppContext.Provider
      value={{ dummyData, currentDayForecastIndex, handleWeekItemClick }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
