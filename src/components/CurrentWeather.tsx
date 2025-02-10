import { useWeatherStore } from "../hooks/useZustand"
import {  getWeatherIconUrl, transformDia, uvFunction, weatherWindIcon } from "../utils/weatherFunctions"


const CurrentWeather:React.FC = () => {
    const {weatherCity, city, unidadMedida} = useWeatherStore()

    const currentWeather = weatherCity?.current 
    let dt = currentWeather?.dt *1000
    let fecha = new Date(dt)
    let codigoDia = fecha?.getDay();
    const formattedHora= fecha.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" });// Obtener la hora en formato HH:MM 
   
  return (
<>
    <section>
        <h2>Tiempo en: {city}</h2>
       
        <p>{formattedHora}- {transformDia(codigoDia)}</p> 
       
        <div>
          
            <div style={{display:"flex",  flexDirection:"row", gap:"3rem", backgroundColor:"skyblue"}}>
                <div>
                       { <p>{currentWeather?.weather[0]?.description } </p>} 
                       <img src={getWeatherIconUrl(currentWeather?.weather[0]?.icon)} alt='Icono del clima'/>
                        <p>{currentWeather?.weather[0]?.main}</p>
                         <p>UV {uvFunction(currentWeather?.uvi).descripcionIndice}</p>
                         <p>{uvFunction(currentWeather?.uvi).rango}</p>
                 </div>
           
                <div style={{display:"flex",  flexDirection:"column"}}>
                    <p>{currentWeather?.temp} {unidadMedida? "°F":"°C"}</p>
                    <p>Senacion T.{currentWeather?.feels_like} {unidadMedida? "°F":"°C"}</p>
                    <p>humedad {currentWeather?.humidity}%</p>
                    <p>Presion .{currentWeather?.pressure}  hPa </p>
                </div>
                <div style={{display:"flex",  flexDirection:"column"}}>
                    <p>{ weatherWindIcon(currentWeather?.wind_deg).icon} { weatherWindIcon(currentWeather?.wind_deg).nameIcon}</p>
                    <p>Velocidad promedio: {currentWeather?.wind_speed} {unidadMedida? "mph":"m/s"}</p>
                    <p>Rafaga de viento: {currentWeather?.wind_gust} {unidadMedida? "mph":"m/s"}</p>
                </div>
            </div>
  </div>
    </section>
    </>
  )
}

export default CurrentWeather