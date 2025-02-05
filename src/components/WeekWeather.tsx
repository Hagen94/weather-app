
import { useWeatherStore } from '../hooks/useZustand';
import { Daily } from '../types/types';
import { transformDia } from '../utils/weatherFunctions';
import { WeatherIcon } from './WeatherIcon';
import { WeatherWindIcon } from './WeatherWindIcon';

const WeekWeather: React.FC<Daily>= ({ fecha, icono, tempMin, tempMax,  tipoViento, vientoMin, vientoMax}) => {
  const {setTime} =useWeatherStore()

  let fechaADia = new Date(`${fecha}T00:00:00Z`); // Se fuerza a UTC

  let codigoDia = fechaADia.getUTCDay(); // Obtener día en UTC
  let hora = `${fechaADia.getHours()}:${String(fechaADia.getMinutes()).padStart(2, '0')}`
 

  const handleClick=(fecha:string)=>{
    setTime(`${fecha}T${hora}`)
}
  return (
    <div>
       
        <section onClick={()=> handleClick(fecha)} style={{backgroundColor:"greenyellow", padding:"0.5rem"}}>
            <p>{transformDia(codigoDia)}</p>
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

