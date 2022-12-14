import React from "react";
import "./App.css";
import WeatherSearch from "./WeatherSearch";
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <div className="App">
      <Container fluid>
        <WeatherSearch defaultCity="Warsaw" />
      </Container>
    </div>
  );
}

export default App;

