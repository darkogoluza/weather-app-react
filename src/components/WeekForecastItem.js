import React from "react";
import { parse, format } from "date-fns";
import { useGlobalContext } from "../context";

const WeekForecastItem = ({
  date,
  condition: { text: conditionText, icon },
  maxtemp_c,
  mintemp_c,
  index,
}) => {
  const { handleWeekItemClick } = useGlobalContext();

  let oldDate = new Date();
  oldDate = parse(date, "yyyy-MM-dd", oldDate);

  const formatedDate = format(oldDate, "EEE d");

  return (
    <button
      className="week-forecast-item"
      onClick={() => {
        handleWeekItemClick(index);
      }}
    >
      <h3 className="week-forecast-item__date">{formatedDate}</h3>
      <img
        src={icon}
        alt={conditionText}
        className="week-forecast-item__icon"
      />
      <h1 className="week-forecast-item__temp">
        {maxtemp_c}°C <span>{mintemp_c}°C</span>
      </h1>
      <h4 className="week-forecast-item__condition">{conditionText}</h4>
    </button>
  );
};

export default WeekForecastItem;
