import React, { useState } from "react";
import "./WeatherSearch.css";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WeatherInfo from "./WeatherInfo";
import WeatherForecast from "./WeatherForecast";

export default function WeatherSearch(props) {
  const [weatherData, setWeatherData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherData({
      ready: true,
      coordinates: response.data.coord,
      temperature: Math.round(response.data.main.temp),
      temp_max: Math.round(response.data.main.temp_max),
      icon: response.data.weather[0].icon,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      humidity: response.data.main.humidity,
      wind: response.data.wind.speed * 3.6,
      city: response.data.name,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    search();
  }

  function handleCityChange(event) {
    setCity(event.target.value);
  }

  function search() {
    let apiKey = "260bbaa7e84e6774b9f60ed1b0d90e23";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }

  if (weatherData.ready) {
    return (
      <div className="Weather">
        <Row className="row">
          <form onSubmit={handleSubmit} className="d-flex justify-content-end">
            <Col xs lg="5" className="col-form">
              <input
                type="button"
                className="button currentLocationButton"
                value=" "
              />
              <input
                type="search"
                placeholder="Enter your city..."
                className="user_city"
                autoComplete="off"
                autoFocus="on"
                onChange={handleCityChange}
              />
              <input type="submit" className="button searchButton" value=" " />
            </Col>
          </form>
        </Row>
        <WeatherInfo data={weatherData} />
        <WeatherForecast coordinates={weatherData.coordinates} />
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
