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