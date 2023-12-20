/* Encuentra el máximo */


export function maxOfTwoNumbers(numero1, numero2) {
    return Math.max(numero1, numero2);
}





export function findLongestWord(words){
let longestWord =words[0];
//inicializo la variable con un valor
for(let i=1; i<words.length; i++){
    //empieza en la posicion uno porque la anterior ya la indique
    //length es el final 
    if(words[i].length > longestWord.length){
//i es la posicion del elemento dentro del array
        longestWord = words[i]
    }
}
return longestWord
}





export function sumArray(array){
        // Utilizamos el método reduce para sumar los elementos del array
    var suma = array.reduce(function (acumulador, numero) {
    return acumulador + numero;
    }, 0); // 0 es el valor inicial del acumulador
        // Devolvemos el resultado de la suma
        return suma;
}



    
export function averageNumbers(array){
//  // Función para calcular la media aritmética
/**********que retorne undefined si el array esta vacio ****/
if (array.length === 0) 
    return undefined;
    // Utilizamos la función sumArray que creamos anteriormente
    var suma = sumArray(array);
    // Dividimos la suma por el número de elementos
    var media = suma / array.length;
    // Devolvemos el resultado de la media
    return media;
}

        
export function averageWordLength(words){
    if (words.length === 0)
    return undefined;
 // Calculamos la suma de las longitudes de todas las palabras
var sumLength = words.reduce(function (acumulador, word) {
    return acumulador + word.length;
}, 0);
  // Calculamos la media dividiendo la suma por el número de palabras
var averageWords = sumLength / words.length;
  // Devolvemos el resultado de la media
return averageWords;
}






export function uniquifyArray(array){
        const uniqueArray = [];
        if (array.length === 0) 
    return undefined;
    
        for (let i = 0; i < array.length; i++) {
            if (uniqueArray.indexOf(array[i]) === -1) {
                uniqueArray.push(array[i]);
            }
        }
    
        return uniqueArray;
    }








export function doesWordExist(array, palabra){
        // Iteramos sobre el array de palabras
for (var i = 0; i < array.length; i++) {
          // Comparamos cada palabra con la palabra objetivo
if (array[i] === palabra) {
return true; // Si encontramos la palabra, devolvemos true
}
}
        // Si no encontramos la palabra, devolvemos false
return false;
}






export function howManyTimes(array, word){
//tenemos que inicializar con cero la cantidad de veces que repite
if (array.length === 0) 
    return undefined;
    let count =0;
    for(let i=0; i < array.length; i++){
        //comparamos cada palabra con la palabra que buscamos
        if (array[i]===word){
            count++;
        }
    }
    return count;
}


// export function greatestProduct(){}