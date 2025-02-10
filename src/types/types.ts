export interface LocationIqParams{
    key: string,
    format: string,
    q: string
}

export interface WeatherApiParams{
    timezone:string,
    format: string,
    daily: string,
    hourly: string,
    current:string
}
export interface cityWeather {
        current: Record<string, any>;
        current_units: Record<string, string>;
        daily: Record<string, any>;
        daily_units: Record<string, string>;
        hourly: Record<string, any>;
        hourly_units: Record<string, string>;
        elevation: number;
        generationtime_ms: number;
        latitude: number;
        longitude: number;
        timezone: string;
        timezone_abbreviation: string;
        utc_offset_seconds: number;
}
  

export type Daily ={
    fecha:string,
    icono: number,
    tempMin:number,
    tempMax:number,
    tipoViento:number,
    vientoMin:number,
    vientoMax:number
}

export  type WeatherCode = {
    weatherCode: number;
  };