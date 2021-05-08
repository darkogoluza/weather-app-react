import React from "react";
import WeekForecastItem from "./WeekForecastItem";
import { uuid } from "uuidv4";

const WeekForecastList = ({ forecastWeek }) => {
  return (
    <section className="week-forecast">
      <ul className="week-forecast__list">
        {forecastWeek.map((forecastData, index) => {
          return (
            <WeekForecastItem
              key={uuid()}
              {...forecastData.day}
              date={forecastData.date}
              index={index}
            />
          );
        })}
      </ul>
    </section>
  );
};

export default WeekForecastList;
