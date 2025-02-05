import React, { useState } from 'react'
import { WeatherIcon } from './WeatherIcon'
import { descripciionCielo, uvFunction, weatherWindIcon } from '../utils/weatherFunctions';

const WeatherHourly:React.FC = ({time, temperatura, weatherCode, sensacionTermica, viento, index_uv, cloudcover, rafagasViento,humedad, precipitacion,lluvia, visibilidad ,velocidadViento, puntoRocio, nieve, precion}) => {

    const [state, setState] = useState<boolean>(false);

    let hora = new Date(time)
     // Obtener la hora en formato HH:MM
    const formattedHora= hora.toLocaleTimeString("es-ES", { hour: "2-digit", minute: "2-digit" });


    const handleClick = ()=>{
        setState((state)=> !state )
    }
  return ( 
    <div>
        <section style={{display:"flex", flexDirection:"row", gap:"2rem", justifyContent:"center", alignItems:"center"}}>
            <p>{formattedHora}</p>
            <WeatherIcon weatherCode={weatherCode} />
            <p>{temperatura}</p>
            <div style={{display:"flex", flexDirection:"column"}}>
                <p>{descripciionCielo(cloudcover)}</p>
                <p>Sensación T. {sensacionTermica}</p>  
            </div>
            <div style={{display:"flex", flexDirection:"row"}}> 
                <p>{weatherWindIcon(viento).icon}</p>
                <div >
                    <p>{weatherWindIcon(viento).nameIcon}</p>
                    <p>Rafaga de viento: {rafagasViento}</p>
                </div>
            </div>
            <div style={{display:"flex", flexDirection:"row", gap:"1rem"}}>
                <p>🔆 UV ⇩</p>
                <div>
                    <p>{uvFunction(index_uv).descripcionIndice}</p>
                    <p> {uvFunction(index_uv).rango}</p>
                </div>
            </div>
            <button onClick={handleClick}>+</button>
        </section>
        {state && (<section style={{display:"grid",gridTemplateColumns:"1fr 1fr 1fr 1fr", gridTemplateRows:" 1fr 1fr 1fr", border:"1px black solid"}}>
            <p>Lluvia: {precipitacion}% -{lluvia} mm</p>
            <p>Visibilidad: {visibilidad/1000} km</p>
            <p>Humedad: {humedad}%</p>
            <p>Viento medio: {velocidadViento} Km/h</p>
            <p>Viento rachas: {rafagasViento} Km/h</p>
            <p>Sensacion termica: {sensacionTermica} °C</p>
            <p>Nubosidad: {cloudcover} %</p>
            <p>Punto de rocio: {puntoRocio} °C</p>
            <p>Nieve: {nieve} mm</p>
            <p> Presion: {precion} hPa</p>
        </section>)}
    </div>
  )
}

export default WeatherHourly
