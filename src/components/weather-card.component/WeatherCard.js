import './WeatherCard.css';
import cloud from './images/cloud.png'
import rainy from './images/rainy.png'
import sunny from './images/sunny.png'
import wind from './images/wind.png'
import partlyCloudy from './images/partly-cloudy.png'

function WeatherCard({ weatherDescription, temperature }) {
  const getWeaterIcon = (weather) => {
    switch (weather) {
      case 'Cloudy':
        return cloud;
      case 'Rainy':
        return rainy;
      case 'Sunny':
        return sunny;
      case 'Wind':
        return wind;
      case 'Partly sunny':
        return partlyCloudy;
    }
  }

  return (
    <div className="container">
      <img src={getWeaterIcon(weatherDescription)} className="weather-icon" alt="weather-icon" />
      {temperature}
    </div>
  );
}

export default WeatherCard;
