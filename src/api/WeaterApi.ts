import axios from "axios";
import {WeatherResponse} from "../types/types";

const apiKey = '8873b303b123330d9b63edaf37b3b3ca'

const buildUrl = (city: string) => {
    return `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
}

class WeatherApi {
    static get = async (city: string): Promise<WeatherResponse> => {
        const url = buildUrl(city);
        const response = await axios.get(url);
        return response.data;
    }
}

export default WeatherApi;