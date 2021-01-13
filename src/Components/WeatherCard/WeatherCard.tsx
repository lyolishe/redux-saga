//Core
import React from "react";
import {useDispatch, useSelector} from "react-redux";

//Store
import {selectWeather} from "../../redux/city/selectors";
import {addCity, removeCity} from "../../redux/city/actions";

//Styles
import styles from './WeatherCard.module.scss';

const WeatherCard: React.FC = () => {
    const dispatch = useDispatch();
    const weather = useSelector(selectWeather);

    const handleDelete = React.useCallback((city: string) => () => {
        dispatch(removeCity(city));
    }, [dispatch]);

    const handleRefresh = React.useCallback((city: string) => () => {
        dispatch(addCity(city));
    }, [dispatch])

    return (
        <div className={styles.root}>
            {
                Object.keys(weather).map((city) => {
                    const {main, clouds} = weather[city];
                    return (
                        <div className={styles.city} key={city}>
                            <div className={styles.info}>
                                <h4>{city}</h4>
                                <div>
                                    температура: {main?.temp} &#8451; <br/>
                                    влажность: {main?.humidity}% <br/>
                                    облачность: {clouds?.all}%<br/>
                                    давление: {main?.pressure} Па<br/>
                                </div>
                            </div>
                            <div className={styles.control}>
                                <p onClick={handleDelete(city)}>
                                    &times;
                                </p>
                                <p onClick={handleRefresh(city)}>
                                    &#x21bb;
                                </p>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
};

export default React.memo(WeatherCard);
