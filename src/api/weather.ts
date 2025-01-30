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


export const weatherApi: AxiosInstance = axios.create({
    baseURL:'https://api.open-meteo.com/v1/forecast',
    params: {
        current_weather: true,
        format: "json",
        daily: "temperature_2m_max,temperature_2m_min,wind_speed_10m_max,wind_speed_10m_min,wind_direction_10m_dominant,weather_code",
        hourly: "temperature_2m,relative_humidity_2m,wind_speed_10m,wind_gusts_10m,wind_direction_10m",
       
    } as WeatherApiParams
})

