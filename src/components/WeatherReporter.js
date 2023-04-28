import React, { useState } from "react";
import "../styles/Home.css";
//import { useQuery } from "@tanstack/react-query";
//import Axios from "axios";
import { Box } from "@mui/material";
//import Feed from "../components/imagesPuller";

const apiString = process.env.REACT_APP_WEATHER_API_KEY;
console.log(apiString);

// const api = {
//   key: process.env.REACT_APP_WEATHER_API_KEY.toString(),
//   base: "http://api.weatherstack.com/current",
// };

function WeatherReporter() {
  const [search, setSearch] = useState("");
  const [weather, setWeather] = useState({});

  /*
      Search button is pressed. Make a fetch call to the Open Weather Map API.
    */
  const searchPressed = () => {
    fetch(
      `http://api.weatherstack.com/current?access_key=${process.env.REACT_APP_WEATHER_API_KEY.toString()}&query=${search}`
    )
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      });
  };

  return (
    <div>
      <Box>
        <header>
          {/* HEADER  */}
          <h1>Weather App</h1>

          {/* Search Box - Input + Button  */}
          <div>
            <input
              type="text"
              placeholder="Enter city/town..."
              onChange={(e) => setSearch(e.target.value)}
            />
            <button onClick={searchPressed}>Search</button>
          </div>

          {/* If weather is not undefined display results from API */}
          {typeof weather.main !== "undefined" ? (
            <div>
              {/* Location  */}
              <p>{weather.name}</p>

              {/* Temperature Celsius  */}
              <p>{weather.main.temp}°C</p>

              {/* Condition (Sunny ) */}
              <p>{weather.weather[0].main}</p>
              <p>({weather.weather[0].description})</p>
            </div>
          ) : (
            ""
          )}
        </header>
      </Box>
    </div>
  );
}
export default WeatherReporter;
