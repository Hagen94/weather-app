import { WeatherCode } from "../types/types";
import { weatherWindIcon } from "../utils/weatherFunctions";


export const WeatherWindIcon: React.FC<WeatherCode> = ({weatherCode} ) =>{
    const icon =  weatherWindIcon(weatherCode)  ;
    return <span>{icon.icon}</span>
}
