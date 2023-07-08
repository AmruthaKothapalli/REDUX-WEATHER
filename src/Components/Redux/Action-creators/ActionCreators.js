import { ACTION_TYPES } from "../Action-types/ActionTypes";

export function fetchWeather(city) {
  return function (dispatch) {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=cea9bb18676e1c0ba79108893fd24d9c`
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        dispatch({ type: ACTION_TYPES.fetchWeather, payload: data });
      })
      .catch((err) => {
        console.log(err);
      });
  };
}
