import React, { useState } from "react";
import "./WeatherSearch.css";
import axios from "axios";
import { InfinitySpin } from "react-loader-spinner";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import WeatherInfo from "./WeatherInfo";

export default function Weather(props) {
  const [weatherData, setWeatherdData] = useState({ ready: false });
  const [city, setCity] = useState(props.defaultCity);

  function handleResponse(response) {
    setWeatherdData({
      ready: true,
      coordinates: response.data.coord,
      temperature: response.data.main.temp,
      humidity: response.data.main.humidity,
      date: new Date(response.data.dt * 1000),
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
      wind: response.data.wind.speed,
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
    let units = "metric";
    let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`;
    axios.get(apiUrl).then(handleResponse);
  }
  let form = (
    <form onSubmit={handleSubmit}>
      <Row className="row d-flex justify-content-end">
        <Col xs lg="5">
          <input
            type="search"
            placeholder="Enter your city..."
            className="user_city"
            autoComplete="off"
            autoFocus="on"
            onChange={handleCityChange}
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
  );
  if (weatherData) {
    return (
      <div className="Weather">
        {form}
        <WeatherInfo data={weatherData} />
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
