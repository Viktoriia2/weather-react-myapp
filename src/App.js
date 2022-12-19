import React from "react";
import "./App.css";
import WeatherSearch from "./WeatherSearch";
import Container from "react-bootstrap/Container";

function App() {
  return (
    <div className="App">
      <Container fluid>
        <WeatherSearch defaultCity="Warsaw" />
        <footer>
          This project was coded by Viktoria Skakovska and is{" "}
          <a
            href="https://github.com/Viktoriia2/weather-react-myapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-source on GitHub
          </a>
        </footer>
      </Container>
    </div>
  );
}

export default App;
