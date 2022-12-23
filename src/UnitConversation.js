import React, { useState } from "react";
import "./WeatherInfo.css";

export default function UnitConversation(props) {
  const [unit, setUnit] = useState("celsius");
  function showFahreinheit(event) {
    event.preventDefault();
    setUnit("fahreinheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celsius");
  }
  function fahreinheit() {
    return (props.celsuis * 9) / 5 + 32;
  }
  if (unit === "celsius") {
    return (
      <div className="current-temperature">
        {props.celsuis}
        <span class="celsius-current">
          <strong>°C</strong> |{" "}
          <a href="/" onClick={showFahreinheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="current-temperature">
        {Math.round(fahreinheit())}{" "}
        <span class="celsius-current">
          <a href="/" onClick={showCelsius}>
            °C
          </a>
          |<strong>°F</strong>
        </span>
      </div>
    );
  }
}
