import axios, { AxiosInstance } from "axios";
import { LocationIqParams, WeatherApiParams } from "../types/types";

export const locationIq: AxiosInstance = axios.create({
    baseURL: 'https://us1.locationiq.com/v1/search',
    headers: {
        "Content-Type": "application/json",
    },
    params: {
        key: import.meta.env.VITE_API_KEY,
        format: 'json',
    } as LocationIqParams
   
});


//obtengo informacion de daily y current weather
export const openWeatherApi:AxiosInstance= axios.create({
    baseURL:'https://api.openweathermap.org/data/3.0/onecall?',
    headers:{
        'Content-Type': 'application/json'
    },
    params:{
        appid: import.meta.env.VITE_API_OPENWEATHER,

    }
})
//obtengo informacion hourly cada 3 horas por 5 dias
export const openHourlyWeatherApi:AxiosInstance= axios.create({
    baseURL:'https://api.openweathermap.org/data/2.5/forecast?',
    headers:{
        'Content-Type': 'application/json'
    },
    params:{
        appid: import.meta.env.VITE_API_OPENWEATHER,

    }
})