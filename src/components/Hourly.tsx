import { useWeatherStore } from "../hooks/useZustand"
import WeatherHourly from "./WeatherHourly"


const Hourly:React.FC = () => {
    const {  time, hourlyCityWeather}= useWeatherStore()

//climas
  const listWeather = hourlyCityWeather?.list ?? []
  const [dateTime, hourTime] = time.split("T")


  return (
    <div >
     {listWeather && listWeather
     .filter(arr =>{
        let milisegundos = arr?.dt *1000
        let date = new Date(milisegundos)
        const formattedDate = date.toISOString().slice(0, 16); // YYYY-MM-DDTHH:MM
        const [arrDate, arrTime] = formattedDate.split("T"); // Fecha y hora del objeto

      console.log(arrDate)
        // Si no es la fecha actual, solo filtra por fecha
        return arrDate === dateTime
    }
      ).map((arr,index) =>(
        <WeatherHourly key={index} time={arr.dt} temperatura={arr?.main?.temp} weatherCode={arr?.weather[0]?.icon} sensacionTermica={arr?.main?.feels_like} viento={arr?.wind?.deg}  cloudcover={arr?.clouds?.all} rafagasViento={arr?.wind?.gust} humedad={arr?.main?.humidity} precipitacion={arr?.pop}  visibilidad={arr?.visibility} velocidadViento={arr?.wind?.speed}  precion={arr?.main?.pressure} />
      ))}
    </div>
  )
}

export default Hourly