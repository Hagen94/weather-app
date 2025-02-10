
import { useWeatherStore } from '../hooks/useZustand';
import { Daily } from '../types/types';
import { getWeatherIconUrl, transformDia } from '../utils/weatherFunctions';
import { WeatherWindIcon } from './WeatherWindIcon';

const WeekWeather: React.FC<Daily>= ({ fecha, icono, descripcion, probabilidad , tempMin, tempMax,  tipoViento, vientoMin, vientoMax}) => {
  const {setTime,unidadMedida} =useWeatherStore()

  let dt = Number(fecha) * 1000
  let time = new Date(dt)
  let timeToString = time.toLocaleString('es-AR',{day:'numeric', month:'2-digit' })
  let codigoDia = time.getUTCDay(); // Obtener día en UTC
  let hora = `${time.getHours()}:${String(time.getMinutes()).padStart(2, '0')}`
  let formattedDate = time.toISOString().split("T")[0];
  const handleClick=(fecha:string)=>{
    setTime(`${fecha}T${hora}`)
}
  return (
    <div>
        <section onClick={()=> handleClick(formattedDate)} style={{backgroundColor:"greenyellow", padding:"0.5rem"}}>
            <p>{transformDia(codigoDia)}</p>
            <p>{timeToString}</p>
            <img src={getWeatherIconUrl(icono)} alt='Icono del'/>
            <p>{descripcion} -Prob: {probabilidad}%</p>
            <p>{tempMin}{unidadMedida? "°F":"°C"} -{tempMax}{unidadMedida? "°F":"°C"}</p>
            <WeatherWindIcon weatherCode={tipoViento}/>
            <p>Ráfaga de viento {vientoMax}{unidadMedida? "mph":"m/s"}</p>
            <p>Velocidad del viento {vientoMin}{unidadMedida? "mph":"m/s"}</p>
        </section>
    </div>
  )
}

export default WeekWeather

