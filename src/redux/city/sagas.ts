import { call, put, takeEvery } from 'redux-saga/effects'
import WeatherApi from "../../api/WeaterApi";
import {cityFetched, cityFetchFailed} from "./actions";

export function* watchFetchWeather() {
    yield takeEvery<any>('ADD_CITY', fetchWeather)
}

function* fetchWeather(action: any) {
    const { city } = action.payload;
    try {
        const data = yield call(WeatherApi.get, city);
        yield put(cityFetched(city, data));
    } catch (e) {
        yield put(cityFetchFailed(city));
    }
}