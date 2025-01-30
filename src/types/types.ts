export interface LocationIqParams{
    key: string,
    format: string,
    q: string
}

export interface WeatherApiParams{
    current_weather: boolean,
    format: string,
    daily: string,
    hourly: string,
}

export type Daily ={
    dia:string,
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