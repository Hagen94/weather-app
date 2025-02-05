import { useWeatherStore } from "../hooks/useZustand"
import {  weatherData } from "../utils/goupeData"
import WeatherHourly from "./WeatherHourly"


const Hourly:React.FC = () => {
    const { cityWeather, time}= useWeatherStore()

    const hourly = cityWeather?.hourly
    const  groupedData = weatherData(hourly)
   
  const currentTime = new Date();// Obtiene la fecha actual
  const currentYear = currentTime.getFullYear();
  const currentMonth = (currentTime.getMonth() + 1).toString().padStart(2, '0'); // Asegura 2 dígitos
  const currentDay = currentTime.getDate().toString().padStart(2, '0'); // Asegura 2 dígitos
  const fechas = `${currentYear}-${currentMonth}-${currentDay}` // Formato YYYY-MM-DD
  const currentHour = currentTime.getHours().toString().padStart(2, '0'); // Hora con 2 dígitos
  
  
  return (
    <div >
     {groupedData && groupedData
     .filter(arr =>{
        const [arrDate, arrTime] = arr[0].split("T"); // Fecha y hora del objeto
        // Si la fecha coincide con la fecha actual, también filtra por hora
        if (arrDate === fechas) {
          return arrDate === time.split("T")[0] &&  (arrTime >= currentHour && arrTime <= "23:00")
        } 
    
        // Si no es la fecha actual, solo filtra por fecha
        return arrDate === time.split("T")[0];
    }
      ).map((arr,index) =>(
        <WeatherHourly key={index} time={arr[0]} temperatura={arr[1]} weatherCode={arr[2]} sensacionTermica={arr[3]} viento={arr[4]}  index_uv={arr[5]} cloudcover={arr[6]} rafagasViento={arr[7]} humedad={arr[8]} precipitacion={arr[9]} lluvia={arr[10]} visibilidad={arr[11]} velocidadViento={arr[12]} puntoRocio={arr[13]} nieve={arr[14]} precion={arr[15]}/>
    ))}
    </div>
  )
}

export default Hourly