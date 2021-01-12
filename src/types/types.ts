export interface WeatherResponse {
    base?: string;
    clouds?: {all: number};
    cod?: number;
    dt?: number;
    id?: number;
    main?: {
        feels_like: number;
        humidity: number;
        pressure: number;
        temp: number;
        temp_max: number;
        temp_min: number;
    }
    name?: string;
}

export interface WeatherStore {
    hasError: boolean;
    weather: {
        [name: string]: WeatherResponse;
    }
}