import { combineReducers } from "redux";
import { WeatherReducer } from "../weatherReducer/WeatherReducer";

export const CommonReducer = combineReducers({
  weatherData: WeatherReducer,
});
