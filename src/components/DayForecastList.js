import React from "react";
import DayForecastItem from "./DayForecastItem";
import { uuid } from "uuidv4";
import { parse, format } from "date-fns";

const DayForecastList = ({ forecastHouers }) => {
  let oldDate = new Date();
  oldDate = parse(forecastHouers[0].time.slice(0, 10), "yyyy-MM-dd", oldDate);

  const formatedDate = format(oldDate, "EEEE d");

  return (
    <section className="day-forecast">
      <h1 className="day-forecast__date">{formatedDate}</h1>
      <ul className="day-forecast__list">
        {forecastHouers.map((item) => {
          return <DayForecastItem key={uuid()} {...item} />;
        })}
      </ul>
    </section>
  );
};

export default DayForecastList;
