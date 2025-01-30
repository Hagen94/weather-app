import { Daily } from '../types/types';
import { WeatherIcon, WeatherWindIcon } from './WeatherIcon';

const WeekWeather: React.FC<Daily>= ({dia, fecha, icono, tempMin, tempMax,  tipoViento, vientoMin, vientoMax}) => {
  return (
    <div>
        <h1>Week weather</h1>
        <section>
            <p>{dia}</p>
            <p>{fecha}</p>
            <WeatherIcon weatherCode={icono}/>
            <p>{tempMin}-{tempMax}</p>
            <WeatherWindIcon weatherCode={tipoViento}/>
            <p>{vientoMin}-{vientoMax}</p>
        </section>
    </div>
  )
}

export default WeekWeather

