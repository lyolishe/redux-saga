//Cure
import React from "react";
import {useDispatch, useSelector} from "react-redux";

//Store
import {selectError} from "../../redux/city/selectors";
import {addCity} from "../../redux/city/actions";

const WeatherInput: React.FC = () => {
    const [city, setCity] = React.useState('')
    const dispatch = useDispatch()
    const hasError = useSelector(selectError)

    const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
        setCity(e.currentTarget.value);
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        if (city) {
            dispatch(addCity(city));
            setCity('');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <p>
                    <input name={'city'} onChange={handleChange} value={city}/>
                </p>
                {hasError && <span style={{color: 'red'}}>Нет такого города</span>}
                <div>
                    <button type={'submit'}>+ Добавить</button>
                </div>
            </form>
        </div>
    )
};

export default WeatherInput;