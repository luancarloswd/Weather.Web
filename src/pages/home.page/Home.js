import { useState } from 'react';
import { searchWeather } from '../../services/weather.service';
import PostaCodeField from "../../components/postal-code-field.component/PostalCodeField";
import WeatherCard from '../../components/weather-card.component/WeatherCard';

function Home() {

  const [weatherDescription, setWeatherDescription] = useState('')
  const [temperature, setTemperature] = useState('')

  const handleSearchWeather = async postalCode => {
    const response = await searchWeather(postalCode);
    setWeatherDescription(response.description);
    setTemperature(response.temperature);
  };

  return (
    <>
      <PostaCodeField onEnter={handleSearchWeather} />
      {weatherDescription && temperature
        && <WeatherCard weatherDescription={weatherDescription} temperature={temperature} />}
    </>
  );
}

export default Home;
