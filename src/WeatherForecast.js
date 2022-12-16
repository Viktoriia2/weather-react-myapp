import React from "react";
import "./WeatherForecast.css";
import Row from "react-bootstrap/Row";
import axios from "axios";

export default function WeatherForecast(props) {


  function handleResponse(response) {
    setForecast(response.data.daily);
  }
  
  function load() {
    let apiKey = "260bbaa7e84e6774b9f60ed1b0d90e23";
    let longitude = props.coordinates.lon;
    let latitude = props.coordinates.lat;
    let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;
    axios.get(apiUrl).then(handleResponse);
  }
  return <Row className="weather-forecast"></Row>;
}
