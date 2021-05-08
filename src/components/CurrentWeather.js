import React from "react";
import { useGlobalContext } from "../context";

const CurrentWeather = ({
  name,
  country,
  temp_c,
  temp_f,
  feelslike_c,
  feelslike_f,
  condition: { text: condition_text, icon },
  is_day,
  humidity,
  pressure_mb,
  wind_kph,
  wind_dir,
  uv,
}) => {
  const getUVRange = (uv) => {
    if (uv >= 8) return "Very High";
    else if (uv >= 6) return "High";
    else if (uv >= 3) return "Moderate";
    else return "Low";
  };

  const { isCelsius } = useGlobalContext();

  return (
    <section
      className={`current-weather ${
        is_day === 1 ? "current-weather--day" : "current-weather--night"
      }`}
    >
      <div className="current-weather__content">
        <h3 className="current-weather__header">Current Weather</h3>
        <h2 className="current-weather__content__location">
          {name}, <span>{country}</span>
        </h2>
        <div className="current-weather__content__tempreture">
          <h1>{isCelsius ? `${temp_c}°C` : `${temp_f}°F`}</h1>
          <p>
            Feels Like: {isCelsius ? `${feelslike_c}°C` : `${feelslike_f}°F`}
          </p>
        </div>
        <div className="current-weather__content__condition">
          <h3>{condition_text}</h3>
          <img src={icon} alt={condition_text} />
        </div>

        <div className="current-weather__content__more-info">
          <h4>Humidity: {humidity}%</h4>
          <h4>Pressure: {pressure_mb} mb</h4>
          <h4>Wind Speed: {wind_kph} km/h</h4>
          <h4>Wind Direction: {wind_dir}</h4>
          <h4>UV: {getUVRange(uv)}</h4>
        </div>
      </div>
    </section>
  );
};

export default CurrentWeather;
