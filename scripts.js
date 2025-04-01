/*Ejercicio 1:
Diseña un algoritmo que cuente las veces que aparece una determinada letra en una frase*/

cuentaLetras('Aaaaaeeeauedhddhd', 'a')

function cuentaLetras(palabra, letra){
    let repeticiones=0
    Array.from(palabra).forEach(char => {
        if (char.toUpperCase() === letra.toUpperCase() ) { 
            repeticiones++;
        }
    });
    console.log("La letra '"+letra+"' se repite "+repeticiones+" veces")
    return repeticiones;
    
}

/*Ejercicio 2:
Diseña un algoritmo que imprima los números impares entre un número dado por el usuario y los siguientes 50 números*/

imprimirImpares(67)
console.log("Siguiente prueba")
imprimirImpares(4)

function imprimirImpares(num) {

    if (typeof num !== 'number' || !Number.isInteger(num)) {
        console.error('Error: Se esperaba un número entero válido');  
        return; 
    }
    
    Array.from({ length: 51}, (_, i) => num + i).forEach(num =>{if(num % 2 !== 0) console.log(num)});
}
