import { useWeatherStore } from "../hooks/useZustand"
import WeekWeather from "./WeekWeather";


const Daily:React.FC = () => {
    const {cityWeather} = useWeatherStore()
   
    const daily = cityWeather?.daily;
 let groupedData;
    if( daily && daily !== null){
         // Encontrar la cantidad máxima de elementos en cualquier día
        const maxIndex = Math.max(...Object.values(daily).map((arr) => arr.length))
        //agrupar cada dato diario en su dia
         groupedData = Array.from({ length: maxIndex }, (_, index) =>  //[1][0], [2][0],[3][0], [4][0]
            Object.keys(daily).map((key) => daily[key][index]).filter(Boolean) // Filtra valores undefined
);

    }
    
  return (
   <div style={{display:"flex", gap: "2rem", margin:"2rem"}}>
   
    {groupedData && groupedData.map((arr,index) =>(
        <WeekWeather key={index} fecha={arr[0]} tempMax={arr[1]} tempMin={arr[2]} vientoMax={arr[3]} vientoMin={arr[4]} tipoViento={arr[5]} icono={arr[6]}/>
    ))}
    
    
   </div>
  )
}

export default Daily