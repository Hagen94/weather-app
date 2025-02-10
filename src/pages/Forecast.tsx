import {locationIq, openHourlyWeatherApi, openWeatherApi} from "../api/weather"
import { useWeatherStore } from "../hooks/useZustand"
import { LocationIqParams } from "../types/types"


const findLocation = async (city, setWeatherCity,setHourlyCityWeather, unidadMedida ) =>{
  
    try{
        //obtengo la latitud y la longitud
        const response = await locationIq.get("",{
            params: {
                q:city
            } as LocationIqParams
        })
        const latitud = response.data[0].lat
        const longitud = response.data[0].lon
        
        const responseOpenWeather = await openWeatherApi('',{
        params:{
          lat:latitud,
          lon:longitud,
          units: unidadMedida? "imperial": "metric"
        }
        })
        console.log("datos de opencall", responseOpenWeather)
        const responseWeatherHourly = await openHourlyWeatherApi('',{
          params:{
            lat:latitud,
            lon:longitud,
            units: unidadMedida? "imperial": "metric"

          }
        })
        console.log("datos de forescast", responseWeatherHourly)
    
        //daily y current
        setWeatherCity(responseOpenWeather.data)
        //hourly
        setHourlyCityWeather(responseWeatherHourly.data)

    }catch(error){
        console.log(error)
    }
}


const Forecast = () => {
  const {city, unidadMedida, setUnidad ,  setCity, setWeatherCity, setHourlyCityWeather } = useWeatherStore()
  
    
    const handleChange = (e)=>{
        e.preventDefault()
        setCity(e.target.value)
    }
    const handleClick = (e)=>{
      e.preventDefault()
      setUnidad(!unidadMedida)
    }
    const handleSubmit = (e)=>{
        e.preventDefault()
        findLocation(city,setWeatherCity,setHourlyCityWeather, unidadMedida )
    }
   
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="city">Ingrese una ciudad</label>
        <input type="text" id="city" placeholder="city" value={city}  onChange={handleChange}/>
        <div>
          <p>Celsius (°C)</p>
          <input type="checkbox" id="unidadMedida"  onClick={handleClick} placeholder="X"/>
          <p>Fahrenheit (°F)</p>
        </div>
        <button type="submit">Search</button>
      </form>
      
    </div>
  )
}

export default Forecast
