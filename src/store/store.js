import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import weatherReducer from "../redux/weather/reducer";

const reducers = combineReducers({
  weather: weatherReducer,
});

export const store = configureStore({
  reducer: reducers,
});
