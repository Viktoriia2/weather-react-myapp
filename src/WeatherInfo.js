import React from "react";
import WeatherIcon from "./WeatherIcon";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./WeatherInfo.css";
import FormatDate from "./FormatDate";

export default function WeatherInfo(props) {
  return (
    <div class="current-cont">
      <Row className="row-1">
        <Col xs={3}>
          <WeatherIcon
            code={props.data.icon}
            size={100}
            className="icon-current"
          />
        </Col>
        <Col>
          <h1 className="Main-city">{props.data.city}</h1>
          <Row className="row-2">
            <Col xs={6}>
              <div className="current-time">
                <FormatDate date={props.data.date} />
              </div>
            </Col>
            <Col xs={6}>
              <div className="current-description text-capitalize">
                {props.data.description}
              </div>
            </Col>
          </Row>
          <Row className="row-3">
            <Col xs={5}>
              <div className="current-temperature">
                {props.data.temperature}
                <span class="celsius-current">°C</span>
              </div>
            </Col>
            <Col xs={7}>
              <div className="temp_max">
                Maximum today:{" "}
                <span class="number-maximum-humidity">
                  {props.data.temp_max}
                </span>
                °C
              </div>
              <div className="humidity">
                Humidity:{" "}
                <span class="number-maximum-humidity">
                  {props.data.humidity}
                </span>{" "}
                %
              </div>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
}
