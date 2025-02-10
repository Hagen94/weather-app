import  { useState } from 'react'

import { descripciionCielo,  weatherWindIcon, getWeatherIconUrl, calcularPuntoRocio } from '../utils/weatherFunctions';
import { useWeatherStore } from '../hooks/useZustand';


const WeatherHourly:React.FC = ({time, temperatura, weatherCode, sensacionTermica, viento,  cloudcover, rafagasViento,humedad, precipitacion, visibilidad ,velocidadViento,  precion}) => {
    const { unidadMedida} =useWeatherStore()
    const [state, setState] = useState<boolean>(false);

    let hora = new Date(time);
    const formattedHora= hora.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" });  // Obtener la hora en formato HH:MM

    const handleClick = ()=>{
        setState((state)=> !state )
    }

    const puntoRocio = calcularPuntoRocio(temperatura, humedad);
    const puntoRocioF = (puntoRocio * 9/5) + 32;
  return ( 
    <div>
        <section style={{display:"flex", flexDirection:"row", gap:"2rem", justifyContent:"center", alignItems:"center"}}>
            <p>{formattedHora}</p>
            <img src={getWeatherIconUrl(weatherCode)} alt='Clima del momento'/>
            <p>{temperatura} {unidadMedida? "°F":"°C"}</p>
            <div style={{display:"flex", flexDirection:"column"}}>
                <p>{descripciionCielo(cloudcover)}</p>
                <p>Sensación T. {sensacionTermica} {unidadMedida? "°F":"°C"}</p>  
            </div>
            <div style={{display:"flex", flexDirection:"row"}}> 
                <p>{weatherWindIcon(viento).icon}</p>
                <div >
                    <p>{weatherWindIcon(viento).nameIcon}</p>
                    <p>Rafaga de viento: {rafagasViento}{unidadMedida? "mph":"m/s"}</p>
                </div>
            </div>
            <button onClick={handleClick}>+</button>
        </section>
        {state && (<section style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr", gridTemplateRows:" 1fr 1fr 1fr", border:"1px black solid"}}>
            <p>Lluvia: {precipitacion}%  </p>
            <p>Visibilidad: {visibilidad/1000} km</p>
            <p>Humedad: {humedad}%</p>
            <p>Viento medio: {velocidadViento} {unidadMedida? "mph":"m/s"}</p>
            <p>Viento rachas: {rafagasViento} {unidadMedida? "mph":"m/s"}</p>
            <p>Sensacion termica: {sensacionTermica}  {unidadMedida? "°F":"°C"}</p>
            <p>Nubosidad: {cloudcover} %</p>
            <p>Punto de rocio:   {unidadMedida? puntoRocio.toFixed(2) +"°F": puntoRocioF.toFixed(2) + "°C"}</p>
            <p> Presion: {precion} hPa</p>
        </section>)}
    </div>
  )
}

export default WeatherHourly
