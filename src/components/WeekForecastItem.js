import React from "react";
import { parse, format } from "date-fns";
import { useGlobalContext } from "../context";
import triangleIcon from "../assets/triangle.png";

const WeekForecastItem = ({
  date,
  condition: { text: conditionText, icon },
  maxtemp_c,
  mintemp_c,
  maxtemp_f,
  mintemp_f,
  index,
}) => {
  const {
    handleWeekItemClick,
    currentDayForecastIndex,
    isCelsius,
  } = useGlobalContext();

  let oldDate = new Date();
  oldDate = parse(date, "yyyy-MM-dd", oldDate);

  const formatedDate = format(oldDate, "EEE d");

  return (
    <button
      className={`week-forecast-item ${
        currentDayForecastIndex === index && "week-forecast-item--active"
      }`}
      onClick={() => {
        handleWeekItemClick(index);
      }}
    >
      <img
        src={triangleIcon}
        alt="tiangle"
        className={`week-forecast-item__triangle ${
          currentDayForecastIndex === index &&
          "week-forecast-item__triangle--active"
        }`}
      />
      <h3 className="week-forecast-item__date">{formatedDate}</h3>
      <img
        src={icon}
        alt={conditionText}
        className="week-forecast-item__icon"
      />
      <h1 className="week-forecast-item__temp">
        {isCelsius ? `${maxtemp_c}°C` : `${maxtemp_f}°F`}{" "}
        <span>{isCelsius ? `${mintemp_c}°C` : `${mintemp_f}°F`}</span>
      </h1>
      <h4 className="week-forecast-item__condition">{conditionText}</h4>
    </button>
  );
};

export default WeekForecastItem;
