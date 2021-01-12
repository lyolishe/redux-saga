import {WeatherStore} from "../../types/types";
import {CityActions} from "./actions";

const initialState: WeatherStore = {
    hasError: false,
    weather: {}
}

const filterWeather = (obj: Record<string, any>, city: string) => Object.keys(obj).filter(key => key !== city)
        .reduce((res, key) => {
            res[key] = obj[key];
            return res
        }, {} as Record<string, any>);

const reducer = (state = initialState, action: {type: keyof typeof CityActions, payload: any}) => {
     const {type, payload} = action;

     switch (type) {
         case "ADD_CITY":
             return {hasError: false, weather: {...state.weather, [payload.city]: {}}};
         case "REMOVE_CITY":
             return {...state, weather: filterWeather(state.weather, payload.city)};
         case "CITY_FETCHED":
             return {...state, weather: {...state.weather, [payload.city]: payload.weather}};
         case "CITY_FETCH_FAILED":
             return {weather: filterWeather(state.weather, payload.city), hasError: true};
         default:
         return state;
     }
}

export {reducer}