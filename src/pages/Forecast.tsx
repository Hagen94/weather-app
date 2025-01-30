import { useState } from "react"
import {locationIq, weatherApi} from "../api/weather"
import { LocationIqParams } from "../types/types"

const findLocation = async (city: string) =>{
    try{
        //obtengo la latitud y la longitud
        const response = await locationIq.get("",{
            params: {
                q:city
            } as LocationIqParams
        })
        const latitud = response.data[0].lat
        const longitud = response.data[0].lon
        //obtengo la informacion del clima
        const responseWeather = await weatherApi.get(`?latitude=${latitud}&longitude=${longitud}`)
        console.log(responseWeather.data)
        
    }catch(error){
        console.log(error)
    }
}


const Forecast = () => {

    const [city, setCity] = useState<string>('');
    
    const handleChange = (e)=>{
        e.preventDefault()
        setCity(e.target.value)
    }
    const handleClick = (e)=>{
        e.preventDefault()
        console.log(city)
        findLocation(city)
    }
   
  return (
    <div>
      <h1>Forecast</h1>
      <form onSubmit={handleClick}>
        <label htmlFor="city">Ingrese una ciudad</label>
        <input type="text" id="city" placeholder="city" value={city}  onChange={handleChange}/>
        <button type="submit">Search</button>
      </form>
      
    </div>
  )
}

export default Forecast
