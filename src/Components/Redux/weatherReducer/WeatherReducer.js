import { ACTION_TYPES } from "../Action-types/ActionTypes";

const initialState = {
  userData: {},
};
export const WeatherReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case ACTION_TYPES.fetchWeather:
      return { ...state, userData: action.payload };
    default:
      return state;
  }
};
