import { WeatherCode } from "../types/types";
import { weatherIcons } from "../utils/weatherFunctions";

export const WeatherIcon: React.FC<WeatherCode> = ({ weatherCode }) => {
    const icon = weatherIcons[weatherCode] || "❓"; // Si no hay icono, muestra un signo de interrogación
    return <span>{icon}</span>;
};



