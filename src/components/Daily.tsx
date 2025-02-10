import { useWeatherStore } from "../hooks/useZustand"
import WeekWeather from "./WeekWeather";


const Daily:React.FC = () => {
    const { weatherCity} = useWeatherStore()
    
    const daily = weatherCity?.daily;
  
  return (
   <div style={{display:"flex", gap: "2rem", margin:"2rem"}}>
   
    
    
   { daily?.map((day, index:number) =>(
    <WeekWeather key={index}  fecha={day?.dt} tempMax={day?.temp?.max} tempMin={day?.temp?.max} vientoMax={day?.wind_gust} vientoMin={day?.wind_speed} tipoViento={day?.wind_deg} icono={day?.weather[0]?.icon} descripcion={day?.weather[0]?.description} probabilidad={day?.pop}/>
   ))
   }
   </div>
  )
}

export default Daily