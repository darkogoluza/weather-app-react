import React from "react";
import rainDropIcon from "../assets/raindrop.png";
import windIcon from "../assets/wind.png";
import { animated, Spring } from "react-spring";
import { useGlobalContext } from "../context";

const DayForecastItem = ({
  time,
  condition: { text: conditionText, icon },
  temp_c,
  temp_f,
  chance_of_rain,
  wind_kph,
}) => {
  const { isCelsius } = useGlobalContext();

  return (
    <Spring
      from={{ opacity: 0, y: 25 }}
      to={{ opacity: 1, y: 0 }}
      config={{ duration: 200 }}
    >
      {(props) => (
        <animated.div style={props}>
          <li className="day-forecast-item">
            <img
              src={icon}
              alt={conditionText}
              className="day-forecast-item__icon"
            />
            <h1 className="day-forecast-item__temp">
              {isCelsius ? `${temp_c}°C` : `${temp_f}°F`}
            </h1>
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
        </animated.div>
      )}
    </Spring>
  );
};

export default DayForecastItem;
