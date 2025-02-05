import { useWeatherStore } from "../hooks/useZustand"
import { descripciionCielo, transformDia, weatherWindIcon } from "../utils/weatherFunctions"
import { WeatherIcon } from "./WeatherIcon"




const CurrentWeather:React.FC = () => {
    const {cityWeather, city} = useWeatherStore()

    const currentWeather = cityWeather?.current
    let fecha = new Date(currentWeather?.time)
    let codigoDia = fecha?.getDay()
     // Obtener la hora en formato HH:MM
     const formattedHora= fecha.toLocaleTimeString("es-AR", { hour: "2-digit", minute: "2-digit" });
  return (
<>
    <section>
        <h2>Tiempo en: {city}</h2>
        <p>{formattedHora}- {transformDia(codigoDia)}</p>
        <div>
          
            <div style={{display:"flex",  flexDirection:"row", gap:"3rem", backgroundColor:"skyblue"}}>
                <div>
                       { <p>{descripciionCielo(currentWeather?.cloud_cover)} </p>}
                        <WeatherIcon weatherCode={currentWeather?.weather_code} />
                        <p>{currentWeather?.precipitation}%</p>
                </div>
           
                <div style={{display:"flex",  flexDirection:"column"}}>
                    <p>{currentWeather?.temperature_2m}</p>
                    <p>Senacion T.{currentWeather?.apparent_temperature} °C</p>
                </div>
                <div style={{display:"flex",  flexDirection:"column"}}>
                    <p>{ weatherWindIcon(currentWeather?.wind_direction_10m).icon} { weatherWindIcon(currentWeather?.wind_direction_10m).nameIcon}</p>
                    <p>Velocidad promedio: {currentWeather?.wind_speed_10m}</p>
                    <p>Rafaga de viento: {currentWeather?.wind_gusts_10m}</p>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default CurrentWeather