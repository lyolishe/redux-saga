import {WeatherResponse} from "../../types/types";

enum CityActions  {
    ADD_CITY = "ADD_CITY",
    CITY_FETCHED = "CITY_FETCHED",
    REMOVE_CITY = "REMOVE_CITY",
    CITY_FETCH_FAILED = "CITY_FETCH_FAILED"
}

const addCity = (city: string) => {
    return {type: CityActions.ADD_CITY, payload: {city}};
};

const removeCity = (city: string) => {
    return {type: CityActions.REMOVE_CITY, payload: {city}};
};

const cityFetched = (city: string, weather: WeatherResponse) => {
    return {type: CityActions.CITY_FETCHED, payload: {city, weather}}
}

const cityFetchFailed = (city: string) => {
    return {type: CityActions.CITY_FETCH_FAILED, payload: {city}}
}

export {addCity, removeCity, cityFetched, cityFetchFailed, CityActions};