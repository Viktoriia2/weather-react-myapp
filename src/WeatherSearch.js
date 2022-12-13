import React, { useState } from "react";
import "./WeatherSearch.css";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export default function WeatherSearch(props) {
  const [weatherData, setWeatherData] = useState({ ready: true });
  const [city, setCity] = useState(props.defaultCity);

  function displayWeather(response) {
    setWeatherData({
      ready: true,
      temperature: Math.round(response.data.temperature.current),
      city: response.data.city.name,
      date: new Date(response.data.time * 1000),
      description: response.data.condition.description,
      maximumTemp: response.data.temperature.max,
      humidity: response.data.humidity,
      wind: response.data.wind.speed * 3.6,
    });
  }
  function search() {
    let apiKey = "260bbaa7e84e6774b9f60ed1b0d90e23";
    let units = "metric";
    let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(displayWeather);
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function updateCity(event) {
    setCity(event.target.value);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <form onSubmit={handleSubmit}>
          <Row className="row d-flex justify-content-end">
            <Col xs lg="5">
              <input
                type="Search"
                placeholder="Enter your city..."
                className="user_city"
                autoComplete="off"
                autoFocus="on"
                onChange={updateCity}
              />
              <input type="submit" className="button searchButton" value=" " />
              <input
                type="button"
                className="button currentLocationButton"
                value=" "
              />
            </Col>
          </Row>
        </form>
      </div>
    );
  } else {
    search();
    return (
      <InfinitySpin
        width="450"
        color="#a558db"
        strokeWidth="1"
        animationDuration="0.75"
      />
    );
  }
}
