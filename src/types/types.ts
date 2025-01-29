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