import React, { useState } from "react";
import "./WeatherRedux.css";
import { useDispatch, useSelector } from "react-redux";
import { fetchWeather } from "./Redux/Action-creators/ActionCreators";
import clear from "./images/clear.png";
import wind from "./images/wind.png";
import humidity from "./images/humidity.png";

function WeatherRedux() {
  const [city, setCity] = useState("");
  const img = clear;

  const store = useSelector((state) => state);
  console.log(store);

  const dispatch = useDispatch();
  const getWeatherInfoAction = (city) => dispatch(fetchWeather(city));

  const getWeatherInfo = (e) => {
    e.preventDefault();
    if (city === "") {
      console.log("please enter the city");
    } else {
      getWeatherInfoAction(city);
    }
  };

  const inputHandle = (e) => {
    setCity(e.target.value);
  };

  return (
    <div>
      <div className="backgrdimg">
        <div>
          <div id="search">
            <h3>Weather App</h3>
            <hr />
            <input
              type="text"
              id="text"
              placeholder="Enter city"
              value={city}
              onChange={inputHandle}
            />

            <div id="error">
              <p></p>
            </div>

            <hr />
            <button id="btn" onClick={getWeatherInfo}>
              GET
            </button>
          </div>
          {typeof store.weatherData.userData.main !== "undefined" ? (
            <div id="report">
              <h3
                style={{
                  border: "1px solid lavender",
                  paddingBottom: "10px",
                  paddingTop: "5px",
                  marginTop: "0px",
                }}
              >
                Weather Report
              </h3>
              <img src={img} height="100px" width="100px" alt="Not Loaded" />
              <div id="temp">
                {Math.round(store.weatherData.userData.main.temp)}°C
              </div>
              <h3 id="city">{store.weatherData.userData.name}</h3>
              <br />
              <div id="display">
                <div id="hum">
                  <div>
                    <img
                      src={humidity}
                      height="20px"
                      width="20px"
                      alt=" Not Loaded"
                    />
                  </div>
                  <div>
                    <p id="humidity">
                      {store.weatherData.userData.main.humidity}%
                    </p>
                    <p style={{ fontSize: "12px" }}>humidity</p>
                  </div>
                </div>
                <div id="wind">
                  <div>
                    <img
                      src={wind}
                      height="20px"
                      width="20px"
                      alt="Not loaded"
                    />
                  </div>
                  <div>
                    <p id="windy">
                      {store.weatherData.userData.wind.speed} km/h
                    </p>
                    <p style={{ fontSize: "12px" }}>Wind speed</p>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
      </div>
    </div>
  );
}

export default WeatherRedux;
