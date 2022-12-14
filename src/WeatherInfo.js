import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function WeatherInfo(props) {
  return (
    <div className="currentInfo">
      <div className="header">
        <h1 className="Main-city">{props.data.city}</h1>
        <div className="float-left">
          <WeatherIcon code={props.data.icon} size={52} />
        </div>
      </div>
      <div className="time">{props.data.time}</div>
    </div>
  );
}
