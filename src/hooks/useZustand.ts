import { create } from "zustand";
import { combine } from "zustand/middleware";


export const useWeatherStore = create(
  combine(
    {
      city:"",
      cityWeather:[],

    },
     (set)=>{
    return {
      setCity: (newCity:string) => {
        set(() => ({ 
          city: newCity,
         }));
      },
      setCityWeather: (newCityWeather) => {
        set(() => ({ 
          cityWeather: newCityWeather,
         }));
      },
    }
  }
  )
)
  
