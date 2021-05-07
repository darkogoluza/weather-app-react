import React from "react";
import DayForecastItem from "./DayForecastItem";
import { uuid } from "uuidv4";

const DayForecastList = ({ forecastHouers }) => {
  return (
    <section className="day-forecast">
      <ul className="day-forecast__list">
        {forecastHouers.map((item) => {
          return <DayForecastItem key={uuid()} {...item} />;
        })}
      </ul>
    </section>
  );
};

export default DayForecastList;
