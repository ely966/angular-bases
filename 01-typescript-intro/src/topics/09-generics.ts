
//any no tiene restricciones
//<T> primer tipo generico
export function whatsMyType<T>(argument: T): T{


    return argument;
}


// const amIString = whatsMyType('Hola mundo');
// const amISNumber = whatsMyType(100);
// const amISArray= whatsMyType([1,2,3,4,5]);
//
//CON generico ya sabe cual es cada tipo
let amIString = whatsMyType<string>('Hola mundo');
let amISNumber = whatsMyType<number>(100);
let amISArray= whatsMyType<number[]>([1,2,3,4,5]);

console.log(amIString.split(' '));
console.log(amISNumber.toFixed());
console.log(amISArray.join('-'));//unir todos numeros con un -
//amIString.split(' '); separar palabras