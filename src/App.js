import React from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import DayForecastList from "./components/DayForecastList";
import WeekForecastList from "./components/WeekForecastList";
import Wallpaper from "./components/Wallpaper";
import { useGlobalContext } from "./context";
import Loading from "./components/Loading";

function App() {
  const {
    weatherData,
    currentDayForecastIndex,
    isLoading,
  } = useGlobalContext();
  return (
    <main>
      <Search />
      {isLoading && <Loading />}
      {weatherData !== undefined ? (
        <>
          <CurrentWeather {...weatherData.current} {...weatherData.location} />
          <DayForecastList
            forecastHouers={
              weatherData.forecast.forecastday[currentDayForecastIndex].hour
            }
          />
          <WeekForecastList forecastWeek={weatherData.forecast.forecastday} />
        </>
      ) : (
        <Wallpaper />
      )}
    </main>
  );
}

export default App;
