
export function weatherData (param){
    const data = param
    let groupedData;
    
    if( data && data !== null){
         // Encontrar la cantidad máxima de elementos en cualquier día
        const maxIndex = Math.max(...Object.values(data).map((arr) => arr.length))
       
        //agrupar cada dato diario en su dia
         groupedData = Array.from({ length: maxIndex }, (_, index) =>  //[1][0], [2][0],[3][0], [4][0]
         //creo un objeto con las vlaves y lo mapeo.
         //se mete en la propiedad y va desparramando el valor en cada posicion
            Object.keys(data).map((key) => data[key][index]).filter(value => value !== undefined) // Filtra valores undefined
        );
    }
    return  groupedData
}