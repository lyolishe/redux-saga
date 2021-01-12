import {WeatherStore} from "../../types/types";

export const selectError = (state: WeatherStore) => state.hasError;
export const selectWeather = (state: WeatherStore) => state.weather;