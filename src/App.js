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
          This project was coded by
          <a
            href="https://portfolio-viktoria-skakovska.netlify.app/"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            Viktoria Skakovska{" "}
          </a>
          and is{" "}
          <a
            href="https://github.com/Viktoriia2/weather-react-myapp"
            target="_blank"
            rel="noopener noreferrer"
          >
            open-source on GitHub
          </a>{" "}
          and{" "}
          <a
            href="https://bespoke-conkies-b92d2f.netlify.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            hosted on Netlify
          </a>{" "}
        </footer>
      </Container>
    </div>
  );
}

export default App;
