import React from "react";
import Search from "./components/Search";
import CurrentWeather from "./components/CurrentWeather";
import DayForecastList from "./components/DayForecastList";
import WeekForecast from "./components/WeekForecast";
import { useGlobalContext } from "./context";

function App() {
  const { dummyData } = useGlobalContext();
  return (
    <main>
      <Search />
      <CurrentWeather {...dummyData.current} {...dummyData.location} />
      <DayForecastList
        forecastHouers={dummyData.forecast.forecastday[0].hour}
      />
      <WeekForecast />
    </main>
  );
}

export default App;
