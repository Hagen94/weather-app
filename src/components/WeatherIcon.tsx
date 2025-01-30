import { WeatherCode } from "../types/types";

export const WeatherIcon: React.FC<WeatherCode> = ({ weatherCode }) => {
    const icon = weatherIcons[weatherCode] || "❓"; // Si no hay icono, muestra un signo de interrogación
    return <span>{icon}</span>;
};

// Diccionario de códigos de clima y sus iconos
const weatherIcons: Record<number, string> = {
    0: "☀️", // Despejado
    1: "⛅", // Mayormente despejado
    2: "⛅", // Parcialmente nublado
    3: "☁️", // Nublado
    45: "🌫", // Neblina
    48: "🌫", // Neblina helada
    51: "🌧", // Llovizna ligera
    53: "🌧", // Llovizna moderada
    55: "🌧", // Llovizna fuerte
    61: "🌦", // Lluvia ligera
    63: "🌧", // Lluvia moderada
    65: "🌧", // Lluvia fuerte
    80: "🌦", // Lluvia dispersa
    95: "⛈", // Tormenta ligera
    96: "⛈", // Tormenta con granizo
};

export const WeatherWindIcon: React.FC<WeatherCode> = ({weatherCode}) =>{
    const icon =  weatherWindIcon(weatherCode)  ;
    return <span>{icon}</span>
}

const weatherWindIcon = (weatherCode:number) =>{
    let icon
    if(weatherCode >= 0 && weatherCode <= 22 || weatherCode >= 338 && weatherCode <= 360){
        icon = "⬆️"
    }else if(weatherCode >= 23 && weatherCode <= 67){
        icon ="↗️"
    }else if(weatherCode >= 68 && weatherCode <= 112){
        icon ="➡️"
    }else if(weatherCode >= 113 && weatherCode <= 157){
        icon ="↘️"
    }else if(weatherCode >= 158 && weatherCode <= 202){
        icon ="⬇️"
    }else if(weatherCode >= 203 && weatherCode <= 247){
        icon ="↙️"
    }else if(weatherCode >= 248 && weatherCode <= 292){
        icon ="⬅️"
    }else if(weatherCode >= 293 && weatherCode <= 337){
        icon ="↖️"
    }else{
        icon = "❓"
    }

    return icon
}

/*

intensidad:

elocidad (km/h)	Icono sugerido	Descripción
0 - 5 km/h	🍃	Brisa ligera
6 - 20 km/h	🌬	Viento leve
21 - 40 km/h	💨	Viento moderado
41 - 70 km/h	🌪	Viento fuerte
71+ km/h	🌀	Tormenta
   */