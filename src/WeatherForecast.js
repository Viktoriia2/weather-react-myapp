import React, { useState } from "react";
import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  if (loaded) {
    return (
      <div className="WeatherForecast">
        <Row className="text-center">
          {forecast.map(function (dailyForecast, index) {
            if (index < 6) {
              return (
                <Col key={index} className="col-forecast">
                  <WeatherForecastDay data={dailyForecast} />
                </Col>
              );
            }
          })}
        </Row>
      </div>
    );
  } else {
    let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
    return null;
  }
}
/*import "./WeatherForecast.css";
import WeatherForecastDay from "./WeatherForecastDay";
import axios from "axios";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function WeatherForecast(props) {
  let [loaded, setLoaded] = useState(false);
  let [forecast, setForecast] = useState(null);

  useEffect(() => {
    setLoaded(false);
  }, [props.city]);

  function handleResponse(response) {
    setForecast(response.data.daily);
    setLoaded(true);
  }

  function load() {
    let apiKey = "260bbaa7e84e6774b9f60ed1b0d90e23";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (loaded) {
    return (
      <Row className="Weather-Forecast">
        {forecast.map(function (dailyForecast, index) {
          if (index > 0 && index < 7) {
            return (
              <Col key={index} className="col-forecast">
                <WeatherForecastDay data={dailyForecast} />
              </Col>
            );
          } else {
            return null;
          }
        })}
      </Row>
    );
  } else {
    load();

    return null;
  }
}
*/
