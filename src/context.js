import React, { useContext, useState } from "react";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [weatherData, setWeatherData] = useState(undefined);
  const [isLoading, setIsLoading] = useState(false);
  const [currentDayForecastIndex, setCurrentDayForecastIndex] = useState(0);
  const [isCelsius, setIsCelsius] = useState(true);

  const handleWeekItemClick = (index) => {
    setCurrentDayForecastIndex(index);
  };

  const loadCity = async (name) => {
    setIsLoading(true);
    const res = await fetch(
      `http://api.weatherapi.com/v1/forecast.json?key=413aae5bd3b3493893b121749210705&q=${name}&days=7&aqi=no&alerts=no
`
    );
    const data = await res.json();
    console.log(data);

    setCurrentDayForecastIndex(0);
    setWeatherData(data);
    setIsLoading(false);
  };

  return (
    <AppContext.Provider
      value={{
        weatherData,
        currentDayForecastIndex,
        handleWeekItemClick,
        loadCity,
        isLoading,
        isCelsius,
        setIsCelsius,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppProvider, useGlobalContext };
