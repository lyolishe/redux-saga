//Core
import React from 'react';

//Components
import WeatherInput from "./Components/WeatherInput/WeatherInput";
import WeatherCard from "./Components/WeatherCard/WeatherCard";

//styles
import styles from './App.module.scss';

function App() {
  return (
    <div className={styles.app}>
        <WeatherCard/>
        <WeatherInput/>
    </div>
  );
}

export default App;
