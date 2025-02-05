
export function transformDia(code:number):string{
    //let codigoDia = fechaADia.getDay()
    let dia:string
      switch (code) {
        case 0:
          dia="Domingo"
          break;
        case 1:
            dia="Lunes"
          break;
        case 2:
            dia="Martes"
          break;
        case 3:
            dia="Miércoles"
          break;
         case 4:
            dia="Jueves"
          break;
        case 5:
            dia="Viernes"
          break;
        case 6:
            dia="Sábado"
          break;
        default:
          dia= "Desconocido"
          break;
      }
      return dia
  }

  
// Diccionario de códigos de clima y sus iconos
export const weatherIcons: Record<number, string> = {
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


export const weatherWindIcon = (weatherCode: number) => {
    let icon = { icon: "", nameIcon: "" };

    if ((weatherCode >= 0 && weatherCode <= 22) || (weatherCode >= 338 && weatherCode <= 360)) {
        icon.icon = "⬆️";
        icon.nameIcon = "Norte";
    } else if (weatherCode >= 23 && weatherCode <= 67) {
        icon.icon = "↗️";
        icon.nameIcon = "Noreste";
    } else if (weatherCode >= 68 && weatherCode <= 112) {
        icon.icon = "➡️";
        icon.nameIcon = "Este";
    } else if (weatherCode >= 113 && weatherCode <= 157) {
        icon.icon = "↘️";
        icon.nameIcon = "Sureste";
    } else if (weatherCode >= 158 && weatherCode <= 202) {
        icon.icon = "⬇️";
        icon.nameIcon = "Sur";
    } else if (weatherCode >= 203 && weatherCode <= 247) {
        icon.icon = "↙️";
        icon.nameIcon = "Suroeste";
    } else if (weatherCode >= 248 && weatherCode <= 292) {
        icon.icon = "⬅️";
        icon.nameIcon = "Oeste";
    } else if (weatherCode >= 293 && weatherCode <= 337) {
        icon.icon = "↖️";
        icon.nameIcon = "Noroeste";
    } else {
        icon.icon = "❓";
        icon.nameIcon = "Desconocido";
    }

    return icon;
};



export const uvFunction = (index_uv:number)=>{
    let descripcionIndice:string = ""
    let rango:string = ""

    if(index_uv >= 0 && index_uv <3){
        descripcionIndice = `${index_uv} Bajo`
        rango= "FPS: 0-2"
    }else if(index_uv >= 3 && index_uv < 6){
        descripcionIndice = `${index_uv} Moderado`
        rango= "FPS: 3-5"
    }else if(index_uv >= 6 && index_uv < 8){
        descripcionIndice =`${index_uv} Alto`
        rango= "FPS: 6-7"
    }else if(index_uv >= 8 && index_uv< 11){
        descripcionIndice = `${index_uv} Muy alto`
        rango= "FPS: 8-10"
    }else{
        descripcionIndice = `${index_uv} Extremo`
         rango= "FPS: 11+"
    }

    return {descripcionIndice,rango}
}

export function descripciionCielo(cloudcover:number):string{
    let descripcion:string;
    if( cloudcover >= 0 && cloudcover< 11){
        descripcion ="Despejado"
    }else if(cloudcover >= 11 && cloudcover < 31 ){
            descripcion ="Mayormente despejado"
    }else if(cloudcover >= 31 && cloudcover < 51){
            descripcion ="Parcialmente nublado"
    }else if(cloudcover >= 51 && cloudcover <76){
         descripcion ="Medio nublado"
    }else if(cloudcover >= 76 && cloudcover <96){
         descripcion ="Mayormente nublado"
    }else{
        descripcion ="Completamente nublado"
    }
    return descripcion
}

//funcion para elegir el modelo.
export function obtenerModeloMeteorologico(lat:number, lon:number):string {
    if (lat >= 36 && lat <= 71 && lon >= -30 && lon <= 60) {
      return "icon_d2"; // Europa (alta resolución)
    }
    if (lat >= 35 && lat <= 70 && lon >= -30 && lon <= 40) {
      return "icon_eu"; // Europa (resolución media)
    }
    if (lat >= 24 && lat <= 50 && lon >= -130 && lon <= -60) {
      return "hrrr"; // EE.UU. (alta resolución)
    }
    if (lat >= 15 && lat <= 60 && lon >= -140 && lon <= -50) {
      return "nam"; // Norteamérica (resolución media)
    }
    if (lat >= 40 && lat <= 55 && lon >= -5 && lon <= 10) {
      return "arome"; // Francia y zonas cercanas
    }
    return "gfs"; // Modelo global por defecto
  }
  