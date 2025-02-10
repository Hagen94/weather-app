import { create } from "zustand";
import { combine } from "zustand/middleware";



export const useWeatherStore = create(
  combine(
    {
      city:"",
      weatherCity:[],
      hourlyCityWeather:[],
      time:"",
      unidadMedida:false,

    },
     (set)=>{
    return {
      setCity: (newCity:string) => {
        set(() => ({ 
          city: newCity,
         }));
      },
      setWeatherCity: (newCityWeather) => {
        set(() => ({ 
          weatherCity: newCityWeather,
         }));
      },
      setHourlyCityWeather: (newHourlyCityWeather) => {
        set(() => ({ 
          hourlyCityWeather: newHourlyCityWeather,
         }));
      },
      setTime: (newTime:string) =>{
        set(()=> ({
          time: newTime,
        })

        )
      },
      setUnidad: (newUnidad:boolean) =>{
        set(()=> ({
          unidadMedida: newUnidad,
        })

        )
      },
    }
  }
  )
)
  
