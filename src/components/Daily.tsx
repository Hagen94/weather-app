import { useWeatherStore } from "../hooks/useZustand"
import {  weatherData } from "../utils/goupeData";
import WeekWeather from "./WeekWeather";


const Daily:React.FC = () => {
    const {cityWeather,} = useWeatherStore()
    
    const daily = cityWeather?.daily;
    let groupedData =  weatherData(daily)
  
   
    console.log(daily?.time)
  return (
   <div style={{display:"flex", gap: "2rem", margin:"2rem"}}>
   
    {groupedData && groupedData.map((arr,index) =>(
        <WeekWeather  key={index} fecha={arr[0]} tempMax={arr[1]} tempMin={arr[2]} vientoMax={arr[3]} vientoMin={arr[4]} tipoViento={arr[5]} icono={arr[6]}/>
    ))}
    
    
   </div>
  )
}

export default Daily