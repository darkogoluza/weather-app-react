import React from "react";
import rainDropIcon from "../assets/raindrop.png";
import windIcon from "../assets/wind.png";

const DayForecastItem = ({
  time,
  condition: { text: conditionText, icon },
  temp_c,
  chance_of_rain,
  wind_kph,
}) => {
  return (
    <li className="day-forecast-item">
      <img src={icon} alt={conditionText} className="day-forecast-item__icon" />
      <h1 className="day-forecast-item__temp">{temp_c}°C</h1>
      <h2 className="day-forecast-item__condition">{conditionText}</h2>
      <div className="day-forecast-item__icons">
        <div className="day-forecast-item__icons__rain">
          <img src={rainDropIcon} alt="raindrop" />
          <p>{chance_of_rain}%</p>
        </div>
        <div className="day-forecast-item__icons__wind">
          <img src={windIcon} alt="raindrop" />
          <p>{wind_kph} km/h</p>
        </div>
      </div>
      <h3 className="day-forecast-item__time">{time.slice(-5)}</h3>
    </li>
  );
};

export default DayForecastItem;
