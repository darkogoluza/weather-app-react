import React from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import DayForecastList from "./components/DayForecastList";
import WeekForecastList from "./components/WeekForecastList";
import { useGlobalContext } from "./context";

function App() {
  const { dummyData, currentDayForecastIndex } = useGlobalContext();
  return (
    <main>
      <Search />
      <CurrentWeather {...dummyData.current} {...dummyData.location} />
      <DayForecastList
        forecastHouers={
          dummyData.forecast.forecastday[currentDayForecastIndex].hour
        }
      />
      <WeekForecastList forecastWeek={dummyData.forecast.forecastday} />
    </main>
  );
}

export default App;
